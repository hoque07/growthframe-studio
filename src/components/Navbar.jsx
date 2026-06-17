import { useState } from "react";
import { navLinks } from "../data/siteData.js";
import Container from "./Container.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-100/80 bg-white/92 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-600 text-lg font-black text-white shadow-glow">
              GF
            </span>
            <span className="text-base font-bold tracking-tight text-slate-950 sm:text-lg">GrowthFrame Studio</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200 lg:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-brand-100 text-slate-900 transition hover:bg-brand-50 focus:outline-none focus:ring-4 focus:ring-brand-100 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
      </Container>

      <div className={`border-t border-brand-100 bg-white lg:hidden ${open ? "block" : "hidden"}`}>
        <Container className="py-4">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-glow"
            >
              Get Started
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
