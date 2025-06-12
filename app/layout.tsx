import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";

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
      <body className={cn(fontFamily.className, "h-full text-white")}>
        <Image
          src="/bg.jpg"
          width="1920"
          height="1080"
          alt="background"
          className="fixed min-h-dvh object-cover brightness-[30%]"
        />

        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
