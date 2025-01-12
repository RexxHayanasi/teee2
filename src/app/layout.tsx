import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ProviderLayout from "./provider";
import { fontPoppins } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Archavelianime",
  description: "Build by RexxzynXD",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontPoppins.className,
        )}
      >
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
}
