import type { BodyBlock, ImageDTO } from "@portfolio/contracts";
import { cn, formatMessage, pad2 } from "@portfolio/utils";
import { Runs } from "../../atoms/runs/Runs";
import { CodeBlock } from "../../molecules/code-block/CodeBlock";
import { Figure, PullQuote } from "../../molecules/figure/Figure";

export interface ProseProps {
  blocks: BodyBlock[];
  /** "Fig. {n}" */
  figLabel: string;
  className?: string;
}

const linkClass = "text-primary underline underline-offset-[3px]";

/**
 * Post body renderer. Figures are numbered in order. `gallery` is reserved for the
 * photography layout (not designed yet) and falls back to one standard figure per image.
 */
function Prose({ blocks, figLabel, className }: ProseProps) {
  let figure = 0;
  const renderFigure = (key: string, image: ImageDTO, caption?: string) => {
    figure += 1;
    return (
      <Figure
        key={key}
        image={image}
        caption={caption}
        numberLabel={formatMessage(figLabel, { n: pad2(figure) })}
      />
    );
  };

  return (
    <article
      data-slot="prose"
      className={cn(
        "flex flex-col gap-6 text-[17px] leading-[1.65] text-fg-soft sm:gap-7 sm:text-lg",
        className,
      )}
    >
      {blocks.map((block) => {
        switch (block._type) {
          case "paragraph":
            return (
              <p key={block._key}>
                <Runs runs={block.children} linkClassName={linkClass} />
              </p>
            );
          case "heading":
            return (
              <h2
                key={block._key}
                id={block.id}
                className="mt-4 scroll-mt-6 font-display text-[28px] leading-[1.1] font-bold tracking-[-0.02em] text-fg sm:mt-8 sm:text-4xl"
              >
                {block.text}
              </h2>
            );
          case "list": {
            const items = block.items.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "flex gap-4",
                  block.ordered
                    ? "[counter-increment:n] before:shrink-0 before:pt-[5px] before:font-mono before:text-xs before:tracking-[0.15em] before:text-primary before:content-[counter(n,decimal-leading-zero)]"
                    : "before:shrink-0 before:text-spark-text before:content-['—']",
                )}
              >
                <span>
                  <Runs runs={item} linkClassName={linkClass} />
                </span>
              </li>
            ));
            return block.ordered ? (
              <ol
                key={block._key}
                className="flex flex-col gap-3 [counter-reset:n]"
              >
                {items}
              </ol>
            ) : (
              <ul key={block._key} className="flex flex-col gap-3">
                {items}
              </ul>
            );
          }
          case "pullQuote":
            return <PullQuote key={block._key} text={block.text} />;
          case "code":
            return <CodeBlock key={block._key} block={block} />;
          case "figure":
            return renderFigure(block._key, block.image, block.caption);
          case "gallery":
            return block.images.map((image, i) =>
              renderFigure(
                `${block._key}-${i}`,
                image,
                i === 0 ? block.caption : undefined,
              ),
            );
          default:
            return null;
        }
      })}
    </article>
  );
}

export { Prose };
