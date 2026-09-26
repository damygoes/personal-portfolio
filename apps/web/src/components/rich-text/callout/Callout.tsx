import type { CalloutBlock } from "@portfolio/contracts";
import { Icon } from "@portfolio/ui";
import type { IconName } from "@portfolio/ui/icon";
import { cn } from "@portfolio/utils";
import { ProseBlock } from "../prose-block/ProseBlock";

export interface CalloutProps {
  block: CalloutBlock;
}

const toneIcon: Record<CalloutBlock["tone"], IconName> = {
  info: "help",
  tip: "sparkles",
  warning: "alert",
};

const toneClassName: Record<CalloutBlock["tone"], string> = {
  info: "border-border bg-secondary text-secondary-foreground",
  tip: "border-success/30 bg-success-muted text-success",
  warning: "border-warning/30 bg-warning-muted text-warning",
};

function Callout({ block }: CalloutProps) {
  return (
    <div
      data-slot="callout"
      role="note"
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        toneClassName[block.tone],
      )}
    >
      <Icon
        name={toneIcon[block.tone]}
        size="sm"
        aria-hidden="true"
        className="mt-0.5 shrink-0"
      />
      <div className="flex flex-col gap-2 [&_p]:m-0">
        {block.body.map((b) => (
          <ProseBlock key={b._key} block={b} />
        ))}
      </div>
    </div>
  );
}

export { Callout };
