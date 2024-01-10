import Link from "next/link";
import { ReactNode } from "react";

import styles from "./TreeLink.module.css";
import { cn } from "@/lib/utils";

type TreeLinkProps = {
  children: ReactNode;
  icon?: ReactNode;
  href: string;
  className?: string;
};

export function TreeLink({ children, href, icon, className }: TreeLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className={cn(
        styles["hard-shadow"],
        `relative
        flex  
        items-center
        justify-center
        w-full
        text-center
        bg-rose-600
        text-white
        font-bold
        py-6
        rounded-full

        border-2
        border-white
        shadow-md
        shadow-white

        transition-all

        hover:bg-slate-700
        hover:border-blue-600

        focus:bg-slate-700
        focus:border-blue-600
        focus:outline-none

        active:bg-slate-700
        active:border-blue-600
      `,
        className
      )}
    >
      {icon && <div className="absolute left-4">{icon}</div>}

      <span className="max-w-[60%]">{children}</span>
    </Link>
  );
}
