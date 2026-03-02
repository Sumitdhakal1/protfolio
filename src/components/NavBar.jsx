import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0  h-0.5 bg-stone-900 z-50 origin-left transition-all duration-100">
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center  px-12 py-5 bg-[#f7f6f3]/85 backdrop-blur-md border-b border-stone-900/5  font-sans`}
      >
        <div className="font-serif italic text-xl tracking-tight text-stone-900">
          Protfolio
        </div>
        <ul className="flex gap-10 list-none">
          {["about", "skills", "project", "contact"].map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-xs tracking-widest uppercase font-sans text-stone-400 hover:text-stone-900 transition-colors duration-200 no-underline"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
        <button className="px-5 py-2 border border-stone-900 text-xs tracking-widest uppercase font-sans text-stone-900 bg-transparent hover:bg-stone-900 hover:text-[#f7f6f3] transition-all duration-200">
          Hire Me
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
