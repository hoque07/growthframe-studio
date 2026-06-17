import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Packages from "./sections/Packages.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Process from "./sections/Process.jsx";
import Services from "./sections/Services.jsx";
import Team from "./sections/Team.jsx";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Packages />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        ^
      </button>
    </div>
  );
}
