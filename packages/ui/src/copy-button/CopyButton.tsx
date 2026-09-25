"use client";

import { useState } from "react";

import { Button, type ButtonProps } from "../button/Button";

export interface CopyButtonProps extends Omit<
  ButtonProps,
  "onClick" | "icon" | "iconPosition"
> {
  value: string;
  label?: string;
  copiedLabel?: string;
  resetAfterMs?: number;
}

function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  resetAfterMs = 2000,
  variant = "ghost",
  size = "icon-sm",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), resetAfterMs);
    } catch {
      // Clipboard unavailable (unsupported browser, denied permission, insecure context) — no-op.
    }
  };

  return (
    <Button
      type="button"
      data-slot="copy-button"
      variant={variant}
      size={size}
      icon={copied ? "check" : "copy"}
      aria-label={copied ? copiedLabel : label}
      onClick={handleClick}
      {...props}
    />
  );
}

export { CopyButton };
