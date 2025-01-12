import BaseLayout from "@/components/layout/base-layout";
import HomeLayout from "@/components/layout/home-layout";
import GreetingLayout from "@/components/layout/greeting-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home | Archave Community",
  description: "Home Page Archavelianime. Build by RexxzynXD",
};

export default function Home() {
  return (
    <BaseLayout>
      <GreetingLayout />
      <HomeLayout />
    </BaseLayout>
  );
}
