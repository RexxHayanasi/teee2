import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime Detail | Archavelianime",
  description: "Anime Detail Page. Build by RexxzynXD",
};

export default function AnimeSlug({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
