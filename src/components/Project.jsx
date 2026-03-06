import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Job Finder",
    desc: "simpley add your age education gender and search for job",
    tags: ["React", "Nodejs"],
    year: 2026,
  },
  {
    id: 1,
    title: "Job Finder",
    desc: "simpley add your age education gender and search for job",
    tags: ["React", "Nodejs"],
    year: 2026,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div>
        <span>{project.title}</span>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="py-28 px-12  bg-[#f0efe9]">
      <div>
        <h1 className=" font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.025em] font-normal mb-10 text-stone-900">
          Projects
        </h1>
      </div>
      <div className="border ">
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
