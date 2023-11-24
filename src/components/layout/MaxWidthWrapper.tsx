import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: ReactNode;
}

const MaxWidthWrapper = ({
  className,
  children
}: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl border-r-2 border-l", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;