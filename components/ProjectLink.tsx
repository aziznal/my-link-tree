import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { LucideImage } from "lucide-react";
import Image from "next/image";

type TreeLinkProps = {
  children: ReactNode;
  description: string;
  href: string;
  className?: string;
  imageSrc?: string;
};

export function ProjectLink({
  imageSrc,
  description,
  children,
  href,
  className,
}: TreeLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className={cn(
        `
      flex
      justify-center
      shrink-0

      lg:w-[500px]
      w-full

      gap-4

      lg:p-4

      rounded-lg

      transition-colors

      hover:bg-zinc-900
      focus:bg-zinc-900
      active:bg-zinc-900
    `,
        className
      )}
    >
      <div className="shrink-0 w-[160px] h-[130px] border border-zinc-600 rounded-lg flex items-center justify-center">
        {!imageSrc && <LucideImage className="text-zinc-600" size="36" />}

        {imageSrc && (
          <Image
            src={imageSrc}
            alt={description}
            width={180}
            height={180}
            className="rounded-lg object-cover w-full h-full"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <span className="font-medium text-lg">{children}</span>

        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </Link>
  );
}
