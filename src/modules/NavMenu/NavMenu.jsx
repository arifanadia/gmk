import React from "react";

function NavMenu({ link = "#", children }) {
  return (
    <a
      href={link}
      className="text-navMenuLink  text-shadow-primary hover:text-gray-300 transition-colors"
    >
      {children}
    </a>
  );
}

export default NavMenu;
