import { useState } from "react";
import { contact } from "../data/siteData.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (!form.service.trim()) nextErrors.service = "Select a service.";
    if (form.message.trim().length < 12) nextErrors.message = "Message must be at least 12 characters.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to build a sharper growth system?"
              text="Share your goals and the team will map the right content, web, or marketing support."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-brand-700"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-200 px-6 text-sm font-bold text-brand-800 transition hover:-translate-y-1 hover:bg-brand-50"
              >
                Email
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-brand-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-brand-100 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={updateField} />
              <Field
                label="Email"
                type="email"
                name="email"
                value={form.email}
                error={errors.email}
                onChange={updateField}
              />
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-800" htmlFor="service">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  className="mt-2 min-h-12 w-full rounded-lg border border-brand-100 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                >
                  <option value="">Select one</option>
                  <option>Video editing</option>
                  <option>Social media management</option>
                  <option>Website or landing page</option>
                  <option>Branding and campaign support</option>
                  <option>AI workflow setup</option>
                </select>
                {errors.service ? <p className="mt-2 text-sm font-medium text-red-600">{errors.service}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="mt-2 w-full resize-none rounded-lg border border-brand-100 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
                {errors.message ? <p className="mt-2 text-sm font-medium text-red-600">{errors.message}</p> : null}
              </div>
            </div>
            {submitted ? (
              <p className="mt-5 rounded-lg bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800">
                Thanks. Your project details are ready to send.
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200 sm:w-auto"
            >
              Send Project Details
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 min-h-12 w-full rounded-lg border border-brand-100 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
      />
      {error ? <p className="mt-2 text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
