import { ProjectLink } from "@/components/ProjectLink";
import SocialLink from "@/components/SocialLink";
import { LucideBriefcase, LucideGithub, LucidePencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto h-full items-stretch justify-center py-12 px-6 lg:px-0 lg:w-fit">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[96px] h-[96px] rounded-full bg-zinc-900 border-[5px] border-zinc-800 overflow-clip">
          <Image
            src="/profile.jpeg"
            alt="Abdulaziz Nal"
            width={96}
            height={96}
            title="you will be missed, my friend"
          />
        </div>

        <span className="mt-4">
          Abdulaziz Nal &nbsp;
          <span className="text-zinc-500">@aziznal</span>
        </span>

        <span className="text-zinc-500">web developer</span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <SocialLink
          href="https://github.com/aziznal"
          className="text-yellow-500"
        >
          <LucideGithub size="20" /> Github
        </SocialLink>

        <SocialLink
          href="https://medium.com/@aziznal"
          className="text-teal-500"
        >
          <LucidePencil size="20" /> Medium
        </SocialLink>

        <SocialLink
          href="https://linkedin.com/in/abdulaziz-nal"
          className="text-blue-500"
        >
          <LucideBriefcase size="20" /> Linkedin
        </SocialLink>
      </div>

      <h1 className="font-bold text-xl mt-16 mb-2">Projects</h1>

      <hr className="border-zinc-600" />

      <div className="mt-8 flex gap-8 flex-wrap items-center lg:grid lg:grid-cols-2 lg:gap-0 lg:justify-center">
        <ProjectLink
          href="https://custom-themes.aziznal.com"
          imageSrc="/previews/custom-themes.png"
          description={
            "Testing out how tailwind can be leveraged to create custom themes."
          }
        >
          Custom Themes with Tailwind
        </ProjectLink>

        <ProjectLink
          href="https://design-principles.aziznal.com"
          imageSrc="/previews/design-principles.png"
          description={
            "A before and after comparison with an interactive site wreckingtoolbar for users to play with."
          }
        >
          Interactive design principles
        </ProjectLink>

        <ProjectLink
          href="https://ne-zaman-askeriyeye-gidiyorsun.aziznal.com"
          imageSrc="/previews/military-service.png"
          description={
            "A couple of dates to which I redirected my friends to when theyasked me when I'm going to my military service. "
          }
        >
          When am I going to my military service?
        </ProjectLink>

        <ProjectLink
          href="https://german-docs.aziznal.com"
          imageSrc="/previews/german-docs.png"
          description={
            "A site where I document some useful stuff for learning German."
          }
        >
          German Docs
        </ProjectLink>

        <ProjectLink
          href="https://lazy-loading.aziznal.com"
          imageSrc="/previews/lazy-loading.png"
          description={
            "A couple of demos for lazy loading and infinite scroll withTanstack (a.k.a React) Query. "
          }
        >
          Lazy loading with React Query
        </ProjectLink>

        <ProjectLink
          href="https://emoji-picker.aziznal.com"
          imageSrc="/previews/emoji-picker.png"
          description={
            "Emoji Picker with lazy loading, virtualization, and search. Why? Because I had 20 hours to kill researching unicode standards. "
          }
        >
          Emoji Picker
        </ProjectLink>

        <ProjectLink
          href="https://samehnaal.com"
          imageSrc="/previews/sameh-naal-com.png"
          description={
            "A very basic portfolio I made for my dad to showcase some of his work. Took about 2 hours to finish, including purchasing the domain and deploying the site."
          }
        >
          Samehnaal.com
        </ProjectLink>
      </div>

      <div className="text-center w-full mt-16 flex gap-1 items-center justify-center">
        <span>Made by</span>

        <Link
          href="https://github.com/aziznal/my-link-tree"
          target="_blank"
          className="flex gap-2 hover:text-rose-700 text-rose-500"
        >
          aziznal <LucideGithub />
        </Link>
      </div>
    </div>
  );
}
