import type { HTMLProps, ReactNode } from "react";

type TypographyType =
  | "title"
  | "subtitle"
  | "heading"
  | "body"
  | "label"
  | "caption"
  | "button";

interface TypographyProps {
  type: TypographyType;
  children: ReactNode;
  className?: HTMLProps<HTMLDivElement>["className"];
}

export function Typography({ type, children, className }: TypographyProps) {
  const baseVariants: Record<TypographyType, string> = {
    title: "text-2xl font-bold",
    subtitle: "text-xl font-semibold",
    heading: "text-lg font-semibold",
    body: "text-base",
    label: "text-sm font-medium",
    caption: "text-xs font-normal",
    button: "text-sm font-semibold uppercase",
  };

  const innerClassName = `${baseVariants[type]} ${className && className}`;

  return <div className={innerClassName}>{children}</div>;
}
