import { portfolio } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Work"
            title="Placeholder projects for a credible launch portfolio."
            text="Swap these with live case studies as the studio completes new client projects."
          />
          <a
            href="#contact"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-brand-200 px-5 text-sm font-bold text-brand-800 transition hover:-translate-y-1 hover:bg-brand-50"
          >
            Discuss a Project
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolio.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-lg border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
            >
              <div className="h-36 bg-[linear-gradient(135deg,#effdf5,#ffffff_46%,#b6f4d1)] p-5">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
