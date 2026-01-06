import { useRef, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
}

const ParallaxSection = ({
  children,
  className,
  animation = "reveal",
  delay = 0,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={cn(animation, isVisible && "active", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;