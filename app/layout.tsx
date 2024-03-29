import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontFamily = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Aziz Nal - My Link Tree",
  description: "Links to my projects and stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className={cn(fontFamily.className, "h-full text-zinc-100 bg-zinc-950")}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
