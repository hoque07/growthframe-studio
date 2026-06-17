import { team } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Team() {
  return (
    <section id="team" className="bg-brand-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Team"
          title="Three focused roles, one coordinated growth engine."
          text="Lean structure keeps work practical, fast, and accountable."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.role}
              className="rounded-lg border border-brand-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-xl font-black text-brand-800">
                {member.role
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{member.role}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-700">{member.focus}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
