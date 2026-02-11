import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm flex flex-col gap-4 items-center">
        
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 transition"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          © {new Date().getFullYear()} Imprimisis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
