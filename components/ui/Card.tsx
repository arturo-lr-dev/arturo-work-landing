"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { cardHover } from "@/lib/animations";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = true, glow: _glow = false, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-chalk",
        "border border-line",
        "overflow-hidden",
        "transition-colors duration-300",
        hover && "hover:border-ink",
        className
      )}
      whileHover={hover ? cardHover : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6 pb-0", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
}
