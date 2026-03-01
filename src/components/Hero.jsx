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
    <section className="min-h-screen flex flex-col justify-end px-12 pb-20 overflow-hidden">
      <div className="hero-grid">
        <div>Available for new projects</div>
        <h1>
          Building digital
          <br />
          <em>experiences</em> that
          <br />
          leave an impression.
        </h1>

        <div>
          <div>
            hq
            <p>Learning and building as a</p>
            <strong>{typed}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
