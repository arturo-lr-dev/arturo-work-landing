"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-chalk hover:bg-ultra",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-chalk",
  outline: "border border-ultra text-ultra hover:bg-ultra hover:text-white",
  ghost: "text-graphite hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-xs",
  lg: "px-9 py-4 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className, href, ...props }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-mono font-medium uppercase tracking-[0.18em] rounded-full whitespace-nowrap",
      "transition-colors duration-300",
      "focus:outline-none focus-visible:outline-2 focus-visible:outline-ultra focus-visible:outline-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <motion.a href={href} className={baseStyles} whileTap={{ scale: 0.97 }}>
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} className={baseStyles} whileTap={{ scale: 0.97 }} {...props}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
