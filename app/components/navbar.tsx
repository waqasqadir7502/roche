"use client";

import { useEffect, useRef, useState } from "react";
import RocheLogo from "./logo";

const navItems = [
  { label: "Klinische Einordnung", href: "#clinical" },
  { label: "Workflow", href: "#workflow" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* REF ONLY FOR MOBILE MENU AREA */
  const menuRef = useRef<HTMLDivElement>(null);

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      
      {/* NAVBAR */}
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:h-[117px] lg:px-20">
        
        {/* LOGO */}
        <RocheLogo />

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-[37px] text-[20px] leading-[30px] text-[#544f4f] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#0b41cd]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE AREA */}
        <div
          ref={menuRef}
          className="relative lg:hidden"
        >
          
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex size-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            {/* TOP LINE */}
            <span
              className={`absolute h-[2px] w-6 bg-[#0b41cd] transition-all duration-300 ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-[7px]"
              }`}
            />

            {/* MIDDLE LINE */}
            <span
              className={`absolute h-[2px] w-6 bg-[#0b41cd] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            {/* BOTTOM LINE */}
            <span
              className={`absolute h-[2px] w-6 bg-[#0b41cd] transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-[7px]"
              }`}
            />
          </button>

          {/* MOBILE MENU */}
          <div
            className={`absolute right-0 top-[58px] w-[280px] overflow-hidden rounded-[12px] border border-[#ececec] bg-white shadow-lg transition-all duration-300 ${
              menuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#ececec] py-4 text-[18px] font-light leading-[1.2] text-[#544f4f] transition hover:text-[#0b41cd]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}