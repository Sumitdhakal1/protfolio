import { useMemo } from "react";
import useTypewriter from "../hooks/useTypewriter.js";

import "../global.css";
const Hero = () => {
  const roles = useMemo(
    () => [
      "React Developer",
      "Node.js Backend Learner",
      "Full Stack Web Developer",
    ],
    [],
  );

  const typed = useTypewriter(roles);
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pb-20 relative overflow-hidden  bg-[#f7f6f3]">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="flex items-center gap-2 text-xs">
        <span className="w-6 h-px bg-stone-400" />
        Available for new projects
      </div>
      <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[.92] tracking-[-0.03em] font-normal mb-10 max-w-4xl text-stone-900">
        Building digital
        <br />
        <em>experiences</em> that
        <br />
        leave an impression.
      </h1>

      <div className="flex gap-16 items-end flex-wrap">
        <div>
          <p className="text-sm text-stone-400 leading-relaxed max-w-sm font-sans">
            Learning and building as a
          </p>
          <strong>
            {typed}
            <span className="blink">|</span>
          </strong>
          <br />
          I’m a web developer in training, currently learning and looking for
          new opportunities.
        </div>

        <div className="capitalize flex gap-4 items-center shrink-0">
          <a
            href=""
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-900 text-xm tracking-widest no-underline text-stone-900 hover:bg-stone-900 hover:text-[#f7f6f3] transition-all duration-200 font-sans"
          >
            view work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href=""
            className="text-sm tracking-wide text-stone-400 no-underline flex items-center gap-1 hover:text-stone-900 transition-colors duration-200 font-sans group"
          >
            lets talks
          </a>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
