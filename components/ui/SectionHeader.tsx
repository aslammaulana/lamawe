import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter
          ? "text-center max-w-2xl mx-auto"
          : action
          ? "md:flex-row md:items-end justify-between gap-4"
          : "gap-1.5 max-w-2xl"
      } ${className}`}
    >
      <div className={`flex flex-col gap-1.5 ${action ? "max-w-2xl" : ""}`}>
        {eyebrow && (
          <span className="font-mono text-xs font-semibold text-btn-blue uppercase tracking-wider">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-heading leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="self-start md:self-auto shrink-0">{action}</div>}
    </div>
  );
}

