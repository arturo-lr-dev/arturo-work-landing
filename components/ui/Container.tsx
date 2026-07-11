"use client";

import { cn } from "@/lib/utils";
import { createElement, type ElementType, type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return createElement(
    Component,
    {
      className: cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        "max-w-7xl",
        className
      ),
    },
    children
  );
}
