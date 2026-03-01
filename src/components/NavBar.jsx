import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>Protfolio</div>
        <ul>{["about", "skills", "project", "contact"]}</ul>
      </nav>
    </div>
  );
};

export default NavBar;
