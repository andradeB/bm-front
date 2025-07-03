import type { ButtonHTMLAttributes } from "react";
import type { ButtonVariant } from "./types";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "px-4 py-2 rounded font-medium transition-colors duration-200 text-sm";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
