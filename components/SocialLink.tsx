import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function SocialLink({
  href,
  children,
  className,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        `glass transition-all text-zinc-100 flex gap-2 items-center group py-2.5 px-4 rounded-lg backdrop-blur-[6px] text-sm`,
        className,
      )}
    >
      {children}
    </Link>
  );
}
