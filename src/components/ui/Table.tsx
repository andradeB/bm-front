import React from "react";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  children: React.ReactNode;
}

export function Table({
  striped = false,
  className = "",
  children,
  ...props
}: TableProps) {
  const classes = `table${striped ? " table-striped" : ""} ${className}`;
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  );
}
