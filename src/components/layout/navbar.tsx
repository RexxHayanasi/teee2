import { FaBolt, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
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
import { motion } from "framer-motion";

export default function Navbar() {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo and Desktop Navigation */}
        <div className="mr-4 hidden md:flex items-center">
          <Link 
            className="mr-6 flex items-center space-x-2 group" 
            href="/"
          >
            <motion.div 
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaBolt className="text-2xl text-blue-500 group-hover:text-blue-400 transition-colors" />
            </motion.div>
            <span className="hidden font-bold text-lg bg-gradient-to-br from-blue-500 to-blue-700 bg-clip-text text-transparent sm:inline-block">
              AV
            </span>
          </Link>
          
          <nav className="flex items-center gap-6 text-sm">
            {siteConfig.navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`px-3 py-2 rounded-md transition-all ${
                    pathName === item.href 
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 font-semibold" 
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Hamburger Button"
          >
            <GiHamburgerMenu className="text-xl" />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-[280px] sm:w-[300px]">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <FaBolt className="text-xl" />
                <span>Archavelianime</span>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-3 mt-8">
                {siteConfig.navMenuItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-3 rounded-md transition-all ${
                        pathName === item.href
                          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.label}
                    </motion.div>
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
            >
              <motion.div 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none"
              >
                <FaInstagram className="text-lg text-pink-600 dark:text-pink-500" />
                <span className="sr-only">Instagram</span>
              </motion.div>
            </Link>
            
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://x.com/ModerRexx?s=09"
            >
              <motion.div 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none"
              >
                <FaXTwitter className="text-lg" />
                <span className="sr-only">Twitter</span>
              </motion.div>
            </Link>
            
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <IoSunny className="h-5 w-5 text-yellow-500" />
              ) : (
                <FiMoon className="h-5 w-5 text-purple-400" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
