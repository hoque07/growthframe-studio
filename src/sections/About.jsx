import { aboutCards } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="A compact team built for focused digital growth."
            text="We are a compact 3-person digital growth team combining creative content, web development, marketing strategy, and social media operations."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <h3 className="text-lg font-bold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
