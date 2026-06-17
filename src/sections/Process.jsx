import { processSteps } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Process"
          title="A clear path from idea to delivery."
          text="Simple stages keep strategy, creative production, and review cycles aligned."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className="rounded-lg border border-brand-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{step}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
