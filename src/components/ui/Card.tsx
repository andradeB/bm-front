import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-card p-8 w-[400px] ${className}`}
    >
      {children}
    </div>
  );
}
