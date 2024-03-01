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
