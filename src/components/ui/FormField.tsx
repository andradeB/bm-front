import type { ReactNode } from "react";
import { Typography } from "./Typography";

interface Props {
  label: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, error, children }: Props) {
  return (
    <div className="space-y-1">
      <Typography type="label">
        {label}
        <span className="text-error">*</span>
      </Typography>

      {children}

      {error && (
        <Typography type="caption" className="text-error">
          {error}
        </Typography>
      )}
    </div>
  );
}
