import { TreeLink } from "@/components/TreeLink";
import {
  Github,
  LibraryBig,
  Linkedin,
  LucideSmile,
  LucideSmilePlus,
  LucideTestTube,
  LucideTestTube2,
  Newspaper,
  PaintBucket,
  Swords,
  User,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto h-full items-stretch justify-center py-12 px-6 sm:px-0 sm:w-[400px]">
      <div className="flex flex-col items-center justify-center">
        {/* Profile Image placeholder */}
        <div className="w-[96px] h-[96px] rounded-full bg-slate-200 border-[5px] border-blue-600" />

        <span className="mt-4">Aziz Nal</span>
        <span>@aziznal </span>
      </div>

      <ul className="mt-12 flex flex-col gap-4">
        <li>
          <TreeLink icon={<Github />} href="https://github.com/aziznal">
            My Github
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<Linkedin />}
            href="https://linkedin.com/in/abdulaziz-nal"
          >
            Linkedin
          </TreeLink>
        </li>

        <li>
          <TreeLink icon={<Newspaper />} href="https://medium.com/@aziznal">
            Medium
          </TreeLink>
        </li>

        <li>
          <TreeLink icon={<User />} href="https://aziznal.com">
            My Website (WIP)
          </TreeLink>
        </li>

        {/* Projects  */}
        <h1 className="font-bold text-center text-2xl mt-12">Projects</h1>

        <li>
          <TreeLink
            icon={<PaintBucket />}
            href="https://custom-themes.aziznal.com"
          >
            Custom Themes with NextJS and Tailwind
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<PaintBucket />}
            href="https://design-principles.aziznal.com"
          >
            An interactive demo of design principles
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<Swords />}
            href="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
          >
            When am I going to my military service?
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<LibraryBig />}
            href="https://german-docs.aziznal.com"
          >
            German Docs (WIP)
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<LucideTestTube2 />}
            href="https://lazy-loading.aziznal.com"
          >
            Lazy loading (infinite scroll) with React Query
          </TreeLink>
        </li>

        <li>
          <TreeLink
            icon={<LucideSmilePlus />}
            href="https://emoji-picker.aziznal.com"
          >
            Emoji Picker with lazy loading, virtualization, and search
          </TreeLink>
        </li>
      </ul>

      <div className="text-center w-full mt-16 flex gap-1 items-center justify-center">
        <span>Made by</span>

        <Link
          href="https://github.com/aziznal/my-link-tree"
          target="_blank"
          className="flex gap-2 hover:text-rose-700 text-rose-500"
        >
          aziznal <Github />
        </Link>
      </div>
    </div>
  );
}
