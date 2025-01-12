import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Anime | Archavelianime",
  description: "Anime Page Otakudesu. Build by RexxzynXD",
};

export default function AnimeEpisodeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
