import type { ReactNode } from "react";

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
}

export function Typography({ type, children }: TypographyProps) {
  const variants: Record<TypographyType, string> = {
    title: "text-2xl font-bold text-gray-900",
    subtitle: "text-xl font-semibold text-gray-900",
    heading: "text-lg font-semibold text-gray-900",
    body: "text-base text-gray-800",
    label: "text-sm font-medium text-gray-500", // 14px, medium, sutil
    caption: "text-xs font-normal text-gray-400",
    button: "text-sm font-semibold uppercase text-white",
  };

  return <div className={variants[type]}>{children}</div>;
}
