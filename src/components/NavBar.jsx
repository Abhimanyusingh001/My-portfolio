import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Abhimanyu Singh
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => {
              const isInternal = link.startsWith('#');
              const handleClick = (e) => {
                if (isInternal) {
                  e.preventDefault();
                  const id = link.slice(1);
                  const target = document.getElementById(id);
                  if (target) {
                    const offset = window.innerHeight * 0.15;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }
              };

              return (
                <li key={name} className="group">
                  <a 
                    href={link} 
                    target={isInternal ? undefined : "_blank"} 
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    onClick={handleClick}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
