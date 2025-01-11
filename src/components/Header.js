import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = [
      "home",
      "resume",
      "projects",
      "skills",
      "blog",
      "contact",
    ];
    const offsets = sections.map((section) => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.find(
      (_, index) =>
        scrollPosition >= offsets[index] &&
        scrollPosition < (offsets[index + 1] || Infinity)
    );

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 md:p-8 bg-black">
      <h1 className="text-2xl md:text-3xl font-bold text-white">HAMD</h1>
      <nav className="text-base md:text-lg">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <li
            className={
              activeSection === "home"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="/" onClick={() => setActiveSection("home")}>
              Home
            </Link>
          </li>
          <li
            className={
              activeSection === "resume"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="#resume" onClick={() => setActiveSection("resume")}>
              Resume
            </Link>
          </li>
          <li
            className={
              activeSection === "projects"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="#projects" onClick={() => setActiveSection("projects")}>
              Projects
            </Link>
          </li>
          <li
            className={
              activeSection === "skills"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="#skills" onClick={() => setActiveSection("skills")}>
              Skills
            </Link>
          </li>
          <li
            className={
              activeSection === "blog"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="#blog" onClick={() => setActiveSection("blog")}>
              My Blog
            </Link>
          </li>
          <li
            className={
              activeSection === "contact"
                ? "text-white underline decoration-yellow-500"
                : "text-white"
            }
          >
            <Link href="#contact" onClick={() => setActiveSection("contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
