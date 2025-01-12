import { FaBolt, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <FaBolt />
            <span className="hidden font-bold sm:inline-block">RH</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {siteConfig.navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div
                  className={`${pathName === item.href ? "bg-gradient-to-br from-[#5ea9ef] to-[#0087f5] bg-clip-text font-extrabold text-transparent hover:text-current" : "text-gray-400 hover:text-foreground"}`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger
            className="min-[770px]:hidden"
            aria-label="Hamburger Button"
          >
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Archavelianime</SheetTitle>
              <SheetDescription>
                {siteConfig.navMenuItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <div
                      className={`${pathName === item.href ? "bg-gradient-to-br from-[#5ea9ef] to-[#0087f5] bg-clip-text font-extrabold text-transparent" : "text-gray-400 hover:text-foreground"}`}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 max-[640px]:justify-end sm:justify-end md:justify-end lg:justify-end xl:justify-end">
          <div className="flex items-center">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://Instagram.com/rexxzynxd"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://x.com/ModerRexx?s=09"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <FaXTwitter />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <button
              aria-label="Toggle Theme"
              className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <IoSunny className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <FiMoon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
