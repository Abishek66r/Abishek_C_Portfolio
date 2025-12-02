import React, { useState, useEffect } from "react";
import logo from "../assets/AK.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#technologies", label: "Technologies" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  // Optional: close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Custom slower smooth scroll to section title
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const animateScrollTo = (targetY, duration = 1200) => {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const scrollToSectionTitle = (selector) => {
    const section = document.querySelector(selector);
    if (!section) return;
    const title = section.querySelector("h1, h2, h3");
    const target = title || section;
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + window.scrollY;
    animateScrollTo(targetY, 1400); // slower than default
  };

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a
          href="#home"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSectionTitle("#home");
          }}
        >
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={43}
            alt="Abishek Logo"
          />
        </a>
      </div>

      {/* Center nav links (desktop) */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-stone-300/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionTitle(item.href);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Social icons + mobile menu button */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abishek-c7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-400 hover:text-white hover:bg-blue-600/40 rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* Github */}
        <a
          href="https://github.com/abishek66r"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-gray-300 hover:text-white hover:bg-gray-500/50 rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/abishek.tar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-400 hover:text-white hover:bg-pink-500/40 rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <FaInstagram />
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com/abishek_c7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-gray-400 hover:text-black hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <FaSquareXTwitter />
        </a>

        {/* Mobile hamburger (appears after social icons) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden ml-2 rounded p-2 text-xl text-stone-300 hover:bg-stone-800/60"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu + click-away overlay */}
      {open && (
        <>
          {/* Click-away overlay to close when clicking anywhere */}
          <div className="fixed inset-0 z-40" onClick={closeMenu} />

          {/* Semi-transparent mobile menu container with subtle blur and spacing */}
          <div className="md:hidden fixed top-20 left-0 right-0 z-50 mx-4 rounded-xl bg-stone-900/70 backdrop-blur-sm ring-1 ring-stone-700/40 p-4 pt-5">
            <ul className="flex flex-col items-center gap-4 text-sm">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href}
                    className="block w-full rounded px-3 py-2 text-center text-stone-300/85 hover:text-white hover:bg-stone-700/40"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSectionTitle(item.href);
                      closeMenu();
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
