import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";


export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6 mt-5">
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-slate-600 dark:text-slate-200 hover:text-white transition-colors"
      >
        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      <a
        href="#"
        aria-label="Twitter"
        className="text-slate-600 dark:text-slate-200 hover:text-white transition-colors"
      >
        <Twitter className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      <a
        href="#"
        aria-label="Facebook"
        className="text-slate-600 dark:text-slate-200 hover:text-white transition-colors"
      >
        <Facebook className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      <a
        href="#"
        aria-label="Instagram"
        className="text-slate-600 dark:text-slate-200 hover:text-white transition-colors"
      >
        <Instagram className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
}
