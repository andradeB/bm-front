import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Typography } from "./Typography";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "w-full py-3 rounded-xl transition text-center";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <Typography type="button">{children}</Typography>
    </button>
  );
}
