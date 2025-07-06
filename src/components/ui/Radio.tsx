import React from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Radio({ className = "", ...props }: RadioProps) {
  return <input type="radio" className={`radio ${className}`} {...props} />;
}
