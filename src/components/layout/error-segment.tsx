import { Metadata } from "next/types";
import BaseLayout from "./base-layout";

export const metadata: Metadata = {
  title: "Error Segment | Archavelianime",
  description: "Archavelianime Page. Build by RexxzynXD",
};

export default function ErrorSegment() {
  return (
    <BaseLayout>
      <div className="flex h-screen items-center justify-center text-xl font-medium">
        You have to put page number!
      </div>
    </BaseLayout>
  );
}
