import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
      {/* display an <a> tag for each link here */}
  return (
    <nav>
      {links.map((link) => {
        return <a key={link} href={`#${link}`}>{link}</a>
              //<a key={link} href={`#${link}`}>{link}</a>
      })}
    </nav>
  )
}
export default NavBar;
