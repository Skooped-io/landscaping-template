import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
}

const animationClasses = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "scale-in": "animate-scale-in",
};

export default function SectionReveal({ children, className, animation = "fade-up", delay = 0 }: Props) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClasses[animation] : "opacity-0",
        className
      )}
      style={isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
