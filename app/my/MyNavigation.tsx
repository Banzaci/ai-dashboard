// components/Navigation.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MyNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/my/profile", label: "Profile" },
  ];
  return (
    <nav aria-label="My navigation">
      <div className="flex items-center justify-between sm:px-6 lg:px-8 py-4 mx-4 sm:mx-auto">
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-bold text-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-gray-400 transition relative ${
                pathname === link.href ? "brush-underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* MOBILE BUTTON */}
       <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden min-w-12 min-h-12"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 p-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-400 transition relative ${
                  pathname === link.href ? "brush-underline" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}