import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const GlassContainer: React.FC<
  { className?: string } & PropsWithChildren
> = (props) => {
  return <div className={cn(props.className, "glass")}>{props.children}</div>;
};
