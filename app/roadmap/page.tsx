import Link from "next/link";

export const dynamic = "force-dynamic";

export default function RoadmapPage() {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl">Things I want to add to my site</h1>

      <ul className="list-disc">
        <li>Header</li>

        <li>Footer</li>

        <li>Fancy home page</li>

        <li>Projects section</li>

        <li>Blog section?</li>

        <li>Something animated tastefully</li>

        <li>
          Store variations of this page and make them accessible through a
          little button somewhere in the footer
        </li>

        <li>
          Make things appear in a slide-up animation as you scroll (but not
          disappear again)
        </li>

        <li>
          Make site vim-friendly (e.g. j/k to scroll, gg to go to top, etc.)
        </li>

        <li>Add a shortcut for ? to show all shortcuts</li>

        <li>
          Add a vim-style command prompt
        </li>

        <li>
          Add Cmd/Ctrl+K command menu to allow access to various sections of the site
        </li>

        <li>
          Gradient that moves with cursor and lights up the background behind it
          (like on{" "}
          <Link href="https://brittanychiang.com">
            https://brittanychiang.com
          </Link>
          )
        </li>
      </ul>
    </div>
  );
}
