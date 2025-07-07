import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Typography } from "./Typography";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "warn";
  mode?: "default" | "outlined" | "flat";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  mode = "default",
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const base =
    "w-full py-3 rounded-md text-center font-medium transition duration-150 ease-in-out";

  const colorMap = {
    primary: {
      bg: "bg-blue-600",
      hoverBg: "hover:bg-blue-500",
      text: "text-white",
      border: "border-blue-600",
      textColor: "text-blue-600",
      hoverText: "hover:text-blue-500",
    },
    secondary: {
      bg: "bg-white",
      hoverBg: "hover:bg-gray-100",
      text: "text-blue-600",
      border: "border-blue-600",
      textColor: "text-blue-600",
      hoverText: "hover:text-blue-500",
    },
    danger: {
      bg: "bg-red-600",
      hoverBg: "hover:bg-red-500",
      text: "text-white",
      border: "border-red-600",
      textColor: "text-red-600",
      hoverText: "hover:text-red-500",
    },
    warn: {
      bg: "bg-yellow-500",
      hoverBg: "hover:bg-yellow-400",
      text: "text-white",
      border: "border-yellow-500",
      textColor: "text-yellow-600",
      hoverText: "hover:text-yellow-500",
    },
  };

  const v = colorMap[variant];

  let styleClasses = "";

  if (mode === "default") {
    styleClasses = clsx(v.bg, v.text, v.hoverBg, "shadow-sm");
  }

  if (mode === "outlined") {
    styleClasses = clsx(
      "bg-transparent border",
      v.border,
      v.textColor,
      v.hoverText,
    );
  }

  if (mode === "flat") {
    styleClasses = clsx("bg-transparent border-none", v.textColor, v.hoverText);
  }

  const disabledClasses = "opacity-50 cursor-not-allowed brightness-[0.85]";

  return (
    <button
      disabled={disabled}
      className={clsx(
        base,
        styleClasses,
        disabled && disabledClasses,
        className,
      )}
      {...props}
    >
      <Typography
        type="button"
        className={clsx(mode !== "default" && v.textColor)}
      >
        {children}
      </Typography>
    </button>
  );
}
