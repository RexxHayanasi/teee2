import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Genre Anime | Archavelianime",
  description: "Genre Anime Page Otakudesu. Build by RexxzynXD",
};

export default function GenreSlugLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
