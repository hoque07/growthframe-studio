import { trustPoints } from "../data/siteData.js";
import Container from "../components/Container.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero-image min-h-[92vh] pt-16">
      <Container className="flex min-h-[calc(92vh-4rem)] items-center py-20 sm:py-24">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Content, Web, and Growth Systems for Modern Brands.
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Grow Your Brand With Content, Web, and Smart Marketing Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            We help agencies, startups, and businesses grow through video content, web development, social media
            management, and AI-powered marketing systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-200 bg-white/88 px-6 text-sm font-bold text-brand-800 transition hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-50"
            >
              View Services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-brand-100 bg-white/86 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
