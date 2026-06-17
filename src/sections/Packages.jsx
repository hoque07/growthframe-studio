import { packages } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Packages() {
  return (
    <section id="packages" className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Packages"
          title="Flexible packages without fixed pricing."
          text="Each engagement is scoped around goals, workload, and delivery rhythm."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pack) => (
            <article
              key={pack.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-bold">{pack.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pack.text}</p>
              <ul className="mt-6 space-y-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-200">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
