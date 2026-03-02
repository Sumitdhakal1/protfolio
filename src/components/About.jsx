import React from "react";

const About = () => {
  return (
    <section className="py-28 px-12  bg-[#f0efe9]">
      <div>
        <div className="flex items-center gap-4 text-[.68rem]  tracking-[.2em] uppercase text-stone-600 mb-5 font-sans">
          <span className="w-8 h-px bg-stone-300" />
          About Me
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.025em] font-normal mb-8 text-stone-900">
          Hi, I’m Sumit Dhakal,
        </h2>
        <div className="text-sm text-stone-600 leading-[1.85] sapce-y-4 font-sans">
          <p>
            a beginner frontend developer who is passionate about learning and
            building websites.
          </p>
          <p>
            I’m currently learning React, JavaScript,Nodejs and modern web
            development tools.
            <br /> I enjoy creating simple, clean, and responsive websites while
            improving my skills every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
