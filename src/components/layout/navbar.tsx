import { FaBolt, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 transition-all duration-300 shadow-sm dark:shadow-gray-900/20">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 sm:px-6">
        {/* Logo and Desktop Navigation */}
        <div className="mr-4 hidden md:flex items-center">
          <Link 
            className="mr-6 flex items-center space-x-2 group transition-all duration-200"
            href="/"
          >
            <div className="relative">
              <FaBolt className="text-2xl text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></span>
            </div>
            <span className="hidden font-bold text-lg bg-gradient-to-br from-blue-500 to-blue-700 bg-clip-text text-transparent sm:inline-block group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
              {siteConfig.name}
            </span>
          </Link>
          
          <nav className="flex items-center gap-1 text-sm">
            {siteConfig.navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div
                  className={`relative px-3 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5 ${
                    pathName === item.href 
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 font-semibold" 
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium hover:bg-gray-100/50 dark:hover:bg-gray-800/50 before:absolute before:bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-4/5"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
            aria-label="Hamburger Button"
          >
            <GiHamburgerMenu className="text-xl text-gray-700 dark:text-gray-300" />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-[280px] sm:w-[300px] border-r bg-background/95 backdrop-blur-lg">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <FaBolt className="text-lg text-blue-500 dark:text-blue-400" />
                </div>
                <span className="font-bold">{siteConfig.name}</span>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-2 mt-8">
                {siteConfig.navMenuItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <div
                      className={`px-4 py-3 rounded-md transition-all duration-200 active:scale-[0.98] ${
                        pathName === item.href
                          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {pathName === item.href && (
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Social Links and Theme Toggle */}
        <div className="flex flex-1 items-center justify-end gap-1">
          <div className="flex items-center gap-1">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://Instagram.com/rexxzynxd"
              className="group relative"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 hover:bg-gradient-to-br from-pink-500/10 to-purple-500/10 hover:-translate-y-0.5 active:scale-90">
                <FaInstagram className="text-lg text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Instagram</span>
              </div>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Instagram
              </span>
            </Link>
            
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://x.com/ModerRexx?s=09"
              className="group relative"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:-translate-y-0.5 active:scale-90">
                <FaXTwitter className="text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">Twitter</span>
              </div>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Twitter
              </span>
            </Link>
            
            <button
              aria-label="Toggle Theme"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:-translate-y-0.5 active:scale-90"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <IoSunny className="h-5 w-5 text-yellow-500 group-hover:rotate-12 transition-transform" />
              ) : (
                <FiMoon className="h-5 w-5 text-purple-400 group-hover:rotate-12 transition-transform" />
              )}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
            }
