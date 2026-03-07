const ProjectCard = ({ project }) => {
  return (
    <div className=" flex flex-col gap-4 border p-5 hover:shadow-lg transition duration-300  cursor-pointer bg-stone-200">
      <div className="flex justify-end">
        <span className="font-sans ">{project.year}</span>
      </div>
      <div className="font-serif text-xl ">
        <span>{project.title}</span>
      </div>
      <div className="font-sans">
        <span>{project.desc}</span>
      </div>
      <div className="flex gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 border text-[.65rem] tracking-[.04em] font-sans"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-5 text-[.7rem] tracking-[.0.06rem uppercase font-sans transition-colors duration-200">
        <a href="">Live Demo →</a>
        <a href="">Github →</a>
      </div>
    </div>
  );
};

export default ProjectCard;
