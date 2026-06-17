import { contact, navLinks, services } from "../data/siteData.js";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-slate-950 text-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-lg font-black">GF</span>
              <span className="text-lg font-bold">GrowthFrame Studio</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Content, Web, and Growth Systems for Modern Brands.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {services.slice(0, 5).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition hover:text-brand-200" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a className="block transition hover:text-brand-200" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="block transition hover:text-brand-200" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <div className="flex flex-wrap gap-3">
                {contact.socials.map((social) => (
                  <a key={social.label} href={social.href} className="transition hover:text-brand-200">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright {new Date().getFullYear()} GrowthFrame Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
