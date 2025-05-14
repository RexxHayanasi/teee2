"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  FaBolt,
  FaXTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
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
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-2xl flex h-14 items-center justify-between px-4">
        {/* Logo dan Menu */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <FaBolt className="text-primary text-xl" />
            <span className="hidden font-bold text-lg sm:inline-block">AV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {siteConfig.navItems.map((item) => (
              <NavItem key={item.label} href={item.href} active={pathName === item.href}>
                {item.label}
              </NavItem>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open Menu">
              <GiHamburgerMenu className="text-xl" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-primary text-lg">Archavelianime</SheetTitle>
                <SheetDescription className="flex flex-col gap-4 mt-4">
                  {siteConfig.navMenuItems.map((item) => (
                    <NavItem key={item.label} href={item.href} active={pathName === item.href}>
                      {item.label}
                    </NavItem>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* Sosmed dan Toggle Theme */}
        <div className="flex items-center space-x-2">
          <IconLink href="https://Instagram.com/rexxzynxd" label="Instagram">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://x.com/ModerRexx?s=09" label="Twitter">
            <FaXTwitter />
          </IconLink>
          <IconLink href="https://github.com/rexxzy" label="GitHub">
            <FaGithub />
          </IconLink>
          <button
            aria-label="Toggle Theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md transition hover:bg-accent hover:text-accent-foreground"
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
    </header>
  );
}

// NavItem Component
function NavItem({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link href={href}>
      <div
        className={`transition-colors duration-200 ${
          active
            ? "bg-gradient-to-br from-[#5ea9ef] to-[#0087f5] bg-clip-text text-transparent font-extrabold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}

// Icon Sosial Media
function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md transition hover:bg-accent hover:text-accent-foreground"
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
