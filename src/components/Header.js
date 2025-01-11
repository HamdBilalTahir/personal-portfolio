import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 bg-gray-900">
      <h1 className="text-3xl font-bold text-yellow-500">HAMD</h1>
      <nav className="text-lg">
        <ul className="flex space-x-6">
          <li className="text-yellow-500">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">My Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
