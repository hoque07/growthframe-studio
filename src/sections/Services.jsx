import { services } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Services() {
  return (
    <section id="services" className="bg-brand-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Services"
          title="Creative production and growth operations in one place."
          text="Every service is built around ethical marketing, useful creative work, and durable systems."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service}
              className="rounded-lg border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-100 text-sm font-black text-brand-800">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-950">{service}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
