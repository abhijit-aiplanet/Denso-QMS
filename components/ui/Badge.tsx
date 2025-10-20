import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
          {
            "bg-blue-600 text-white border border-blue-700":
              variant === "default",
            "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600":
              variant === "secondary",
            "bg-red-600 text-white border border-red-700":
              variant === "destructive",
            "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600": 
              variant === "outline",
            "bg-green-600 text-white border border-green-700":
              variant === "success",
            "bg-yellow-600 text-white border border-yellow-700":
              variant === "warning",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

