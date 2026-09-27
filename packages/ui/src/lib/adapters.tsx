"use client";

import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type ComponentType,
  type ReactNode,
} from "react";

/**
 * The ui package stays framework-agnostic: internal links and images render plain
 * <a>/<img> unless the app provides its own components (next/link, next/image).
 */

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** Router hint: keep the scroll position (next/link `scroll`). Ignored by plain anchors. */
  scroll?: boolean;
};

export type ImageComponentProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  blurDataURL?: string;
};

type Adapters = {
  Link?: ComponentType<LinkComponentProps>;
  Image?: ComponentType<ImageComponentProps>;
};

const AdapterContext = createContext<Adapters>({});

export function UiAdapterProvider({
  children,
  ...adapters
}: Adapters & { children: ReactNode }) {
  return (
    <AdapterContext.Provider value={adapters}>
      {children}
    </AdapterContext.Provider>
  );
}

const isInternal = (href: string) =>
  href.startsWith("/") && !href.startsWith("//");

/** Internal paths go through the app's router link; anchors, mailto and URLs stay plain. */
export function Anchor({ scroll, ...props }: LinkComponentProps) {
  const { Link } = useContext(AdapterContext);
  if (Link && isInternal(props.href))
    return <Link scroll={scroll} {...props} />;
  return <a {...props} />;
}

export function Picture({
  priority,
  blurDataURL,
  ...props
}: ImageComponentProps) {
  const { Image } = useContext(AdapterContext);
  if (Image)
    return <Image priority={priority} blurDataURL={blurDataURL} {...props} />;
  return (
    <img loading={priority ? "eager" : "lazy"} decoding="async" {...props} />
  );
}
