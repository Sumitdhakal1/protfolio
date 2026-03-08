import { useState, useRef, useEffect, memo } from "react";
import { SKILLS } from "../constants/skills";
import "../global.css";
function useIntersection(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const Reveal = memo(({ children, left = false, delay = 0, className = "" }) => {
  const [ref, visible] = useIntersection();
  return (
    <div
      ref={ref}
      className={`${left ? "reveal-left" : "reveal"} ${visible ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
});

const SkillBar = memo(({ name, value, active }) => {
  const [ref, visible] = useIntersection(0.1);
  return (
    <div ref={ref}>
      <span className="text-sm text-stone-700 min-w-[200px] font-sans">
        {name}
      </span>
      <div className="flex-1 h-0.5 bg-stone-200 relative overflow-hidden">
        <div
          className="skill-fill h-full bg-stone-900"
          style={{ width: visible && active ? `${value}%` : "0%" }}
        />
      </div>
      <span className="text-xs text-stone-400 min-w-[36px] text-right tabular-nums font-sans">
        {value}%
      </span>
    </div>
  );
});

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, visible] = useIntersection(0.1);

  return (
    <section id="skills" className="py-28 px-12 bg-[#f7f6f3]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.025em] font-normal mb-10 text-stone-900">
            Skills
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex w-fit border border-stone-200 mb-12">
            {SKILLS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 text-[.72rem] tracking-[.08em] uppercase border-r border-stone-200 last:border-r-0 font-sans transition-all duration-200 ${activeTab === i ? "bg-stone-900 text-[#f7f6f3]" : "bg-transparent text-stone-400 hover:bg-[#e8e7e0] hover:text-stone-900"}`}
              >
                {s.cat}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          {SKILLS.map((cat, ci) => (
            <div key={ci} className={activeTab === ci ? "block" : "hidden"}>
              {cat.items.map((sk, si) => (
                <SkillBar
                  key={si}
                  name={sk.n}
                  value={sk.v}
                  active={visible && activeTab === ci}
                />
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
