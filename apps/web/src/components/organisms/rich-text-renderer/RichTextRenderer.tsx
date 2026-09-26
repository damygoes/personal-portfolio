import type { PortableTextBlock } from "@portabletext/types";
import type { RichText, RichTextNode } from "@portfolio/contracts";
import { isFigureBlock, isGalleryBlock } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { Fragment } from "react";
import type { ExifPanelLabels } from "../../molecules/exif-panel/ExifPanel";
import { Callout } from "../../rich-text/callout/Callout";
import { CodeBlock } from "../../rich-text/code-block/CodeBlock";
import { Figure } from "../../rich-text/figure/Figure";
import { Gallery } from "../../rich-text/gallery/Gallery";
import { ProseBlock } from "../../rich-text/prose-block/ProseBlock";
import { ProseHeading } from "../../rich-text/prose-heading/ProseHeading";
import { VideoEmbed } from "../../rich-text/video-embed/VideoEmbed";

export interface RichTextLabels {
  copyLabel?: string;
  copiedLabel?: string;
  playVideoLabel?: string;
  exif?: ExifPanelLabels;
}

export interface RichTextRendererProps {
  value: RichText;
  variant?: "article" | "photoEssay" | "compact";
  /** `_key` of each `code` block → its Shiki-highlighted HTML, resolved server-side via `highlightCode`. */
  codeHtml?: Record<string, string>;
  labels?: RichTextLabels;
}

const isTextBlock = (node: RichTextNode): node is PortableTextBlock =>
  node._type === "block";

function groupBlocks(value: RichText) {
  const groups: (
    RichTextNode | { list: "bullet" | "number"; items: PortableTextBlock[] }
  )[] = [];

  for (const node of value) {
    if (isTextBlock(node) && node.listItem) {
      const last = groups[groups.length - 1];
      if (last && "list" in last && last.list === node.listItem) {
        last.items.push(node);
        continue;
      }
      groups.push({
        list: node.listItem as "bullet" | "number",
        items: [node],
      });
      continue;
    }
    groups.push(node);
  }

  return groups;
}

const variantSpacing: Record<
  NonNullable<RichTextRendererProps["variant"]>,
  string
> = {
  article: "flex flex-col gap-6 [&_h2]:mt-4 [&_h3]:mt-2",
  photoEssay: "flex flex-col gap-12",
  compact: "flex flex-col gap-4 text-sm",
};

function RichTextRenderer({
  value,
  variant = "article",
  codeHtml = {},
  labels,
}: RichTextRendererProps) {
  const groups = groupBlocks(value);

  return (
    <div data-slot="rich-text-renderer" className={cn(variantSpacing[variant])}>
      {groups.map((group, index) => {
        if ("list" in group) {
          const Tag = group.list === "number" ? "ol" : "ul";
          return (
            <Tag
              key={index}
              className={cn(
                group.list === "number" ? "list-decimal" : "list-disc",
                "flex flex-col gap-1 pl-5",
              )}
            >
              {group.items.map((item) => (
                <ProseBlock key={item._key} block={item} />
              ))}
            </Tag>
          );
        }

        const node = group;

        if (isTextBlock(node)) {
          if (node.style === "h2" || node.style === "h3") {
            return (
              <ProseHeading
                key={node._key}
                block={node as PortableTextBlock & { style: "h2" | "h3" }}
              />
            );
          }
          return <ProseBlock key={node._key} block={node} />;
        }

        if (isFigureBlock(node)) {
          return (
            <Figure key={node._key} block={node} exifLabels={labels?.exif} />
          );
        }

        if (isGalleryBlock(node)) {
          return <Gallery key={node._key} block={node} />;
        }

        if (node._type === "code") {
          return (
            <CodeBlock
              key={node._key}
              block={node}
              html={codeHtml[node._key] ?? ""}
              copyLabel={labels?.copyLabel}
              copiedLabel={labels?.copiedLabel}
            />
          );
        }

        if (node._type === "callout") {
          return <Callout key={node._key} block={node} />;
        }

        if (node._type === "videoEmbed") {
          return (
            <VideoEmbed
              key={node._key}
              block={node}
              playLabel={labels?.playVideoLabel}
            />
          );
        }

        return <Fragment key={index} />;
      })}
    </div>
  );
}

export { RichTextRenderer };
