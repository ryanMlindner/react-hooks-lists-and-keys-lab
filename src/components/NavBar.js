import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link) => {
    const href = `#${link}`;
    return <a href={href} key={link}>{link}</a>;
  })
  return <nav>{linksList}</nav>;
}

export default NavBar;
