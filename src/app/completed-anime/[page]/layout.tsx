import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Completed Anime | Archavelianime",
  description: "Completed Anime Page Otakudesu. Build by RexxzynXD",
};

export default function CompletedAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
