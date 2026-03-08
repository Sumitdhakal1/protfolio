import React from "react";
import { PROJECTS } from "../constants/projects.js";
import ProjectCard from "./common/ProjectCard";

const Project = () => {
  return (
    <section id="project" className="py-28 px-12  bg-[#f7f6f3]">
      <div>
        <h1 className=" font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.025em] font-normal mb-10 text-stone-900">
          Projects
        </h1>
      </div>
      <div className="grid gird-col-1 md:grid-cols-3 gap-3 ">
        {PROJECTS.map((p) => {
          return (
            <div key={p.id}>
              <ProjectCard project={p} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
