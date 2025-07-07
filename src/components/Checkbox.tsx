import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className = "", ...props }: CheckboxProps) {
  return (
    <input type="checkbox" className={`checkbox ${className}`} {...props} />
  );
}
