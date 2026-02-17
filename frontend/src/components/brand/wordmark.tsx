import Image from "next/image";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeMap = {
  xs: "h-[18px]",
  sm: "h-5",
  md: "h-6",
  lg: "h-7",
} as const;

export function Wordmark({ className, size = "md", priority = false }: WordmarkProps) {
  return (
    <span className={cn("inline-flex shrink-0 select-none items-center leading-none", className)} aria-label="KoreVitta">
      <Image
        src="/logo.png"
        alt="KoreVitta"
        width={582}
        height={217}
        priority={priority}
        className={cn("w-auto", sizeMap[size])}
      />
    </span>
  );
}
