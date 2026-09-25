import { Collapsible } from "@base-ui/react/collapsible";

import { cn } from "@portfolio/utils";
import { Icon } from "../icon/Icon";

export interface DisclosureProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (
    open: boolean,
    eventDetails: Collapsible.Root.ChangeEventDetails,
  ) => void;
  disabled?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Disclosure({
  open,
  defaultOpen,
  onOpenChange,
  disabled,
  trigger,
  children,
  className,
}: DisclosureProps) {
  return (
    <Collapsible.Root
      data-slot="disclosure"
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disabled={disabled}
      className={cn(className)}
    >
      <Collapsible.Trigger
        data-slot="disclosure-trigger"
        className="group flex w-full items-center justify-between gap-2 text-left"
      >
        {trigger}
        <Icon
          name="chevronDown"
          size="sm"
          aria-hidden="true"
          className="shrink-0 transition-transform group-data-[panel-open]:rotate-180"
        />
      </Collapsible.Trigger>
      <Collapsible.Panel
        data-slot="disclosure-panel"
        className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-(--duration-base) ease-(--ease-standard)"
      >
        {children}
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

export { Disclosure };
