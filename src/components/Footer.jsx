import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";
import SocialIcons from "../sections/Socials";

export default function Footer() {
  const { theme } = useThemeContext();
  return (
    <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
      {/* <img className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none" src={theme === "dark" ? "./assets/landing-text-dark.svg" : "./assets/landing-text-light.svg"} alt="landing" width={930} height={340} priority fetchPriority="high" /> */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
        <div className="md:max-w-114">
          <a href="#!">
            <img
              className="h-12 md:h-18 w-auto shrink-0"
              src={
                theme === "dark"
                  ? "https://i.postimg.cc/WbC0Ls2Q/Artboard-3-cropped.png"
                  : "https://i.postimg.cc/WbC0Ls2Q/Artboard-3-cropped.png"
              }
              alt="Logo"
              width={140}
              height={40}
              priority
              fetchPriority="high"
            />
          </a>
          <SocialIcons/>
          <p className="mt-6">
            Katibu ERP is a comprehensive enterprise resource planning solution
            designed to streamline your business operations and drive growth
            with powerful, integrated modules.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-600 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="space-y-2">
              <p>+254 708 538 435</p>
              <p>info@katibu.africa</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://katibu.africa" target="_blank">
          Katibu
        </a>
        . All Right Reserved. Distributed by{" "}
       
      </p>
    </footer>
  );
}
