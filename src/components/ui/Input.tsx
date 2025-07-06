import type { InputHTMLAttributes } from "react";
import { Typography } from "./Typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export function Input({
  label,
  error = false,
  className = "",
  ...props
}: InputProps) {
  const baseClasses =
    "w-full h-[50px] px-4 text-sm text-gray-800 placeholder-gray-400 border rounded-[16px] outline-none transition-all duration-200";
  const validClasses =
    "border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary";
  const errorClasses =
    "border-error focus:border-error focus:ring-1 focus:ring-error";

  return (
    <div className="space-y-1">
      {label && <Typography type="label">{label}</Typography>}

      <input
        className={`${baseClasses} ${error ? errorClasses : validClasses} ${className}`}
        {...props}
      />
    </div>
  );
}
