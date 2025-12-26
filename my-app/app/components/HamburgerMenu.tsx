"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { y: "-100%" },
          { y: "0%", duration: 0.8, ease: "power3.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power3.in",
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-full bg-green-950 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-green-950 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-green-950 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-green-950 z-40 flex flex-col justify-center pl-16"
        style={{ transform: "translateY(-100%)" }}
      >
        <nav className="flex flex-col items-start gap-8">
          <a
            href="#"
            className="menu-link text-6xl text-amber-50 transition-all duration-300 hover:translate-x-4 hover:text-amber-200"
            style={{ fontFamily: "var(--font-poiret-one)" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="menu-link text-6xl text-amber-50 transition-all duration-300 hover:translate-x-4 hover:text-amber-200"
            style={{ fontFamily: "var(--font-poiret-one)" }}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="menu-link text-6xl text-amber-50 transition-all duration-300 hover:translate-x-4 hover:text-amber-200"
            style={{ fontFamily: "var(--font-poiret-one)" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#"
            className="menu-link text-6xl text-amber-50 transition-all duration-300 hover:translate-x-4 hover:text-amber-200"
            style={{ fontFamily: "var(--font-poiret-one)" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

