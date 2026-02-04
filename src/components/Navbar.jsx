import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SocialIcons from "../sections/Socials";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { theme } = useThemeContext();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
            <a href="#!">
                <img className="h-12 md:h-18 w-auto " src={theme === "dark" ? `https://i.postimg.cc/6q7PbHQS/Artboard-1-cropped.png` : `https://i.postimg.cc/6q7PbHQS/Artboard-1-cropped.png`} alt="Logo" />
            </a>
            <SocialIcons/>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-slate-600 dark:hover:text-slate-300">
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                ))}
                <button>
                    Sign in
                </button>
                <button className="aspect-square size-10 p-1 items-center justify-center bg-[#fc7d5e] hover:bg-purple-700 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="hidden md:block hover:bg-slate-100 dark:hover:bg-[#d4573f] transition px-4 py-2  border border-[#fc7d5e] rounded-md">
                    Sign in
                </button>
                <button className="hidden md:block px-4 py-2 bg-[#fc7d5e] hover:bg-purple-700 transition text-white rounded-md">
                    Get started
                </button>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}