import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "On Going Anime | Archavelianime",
  description: "Ongoing Anime Page Otakudesu. Build by RexxzynXD",
};

export default function OngoingAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
