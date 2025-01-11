import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Hamd Bilal Tahir - Portfolio</title>
        <meta
          name="description"
          content="Hamd Bilal Tahir's personal portfolio"
        />
      </Head>
      <header className="flex justify-between items-center p-8 bg-gray-900">
        <h1 className="text-3xl font-bold text-yellow-500">HAMD</h1>
        <nav className="text-lg">
          <ul className="flex space-x-6">
            <li className="text-yellow-500">Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>My Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-yellow-500 text-lg mb-4">HELLO!</h2>
        <h1 className="text-5xl font-bold mb-4">I'm Hamd Bilal Tahir</h1>
        <p className="text-xl mb-8">An AI Product Manager</p>
        <div className="flex space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded">
            HIRE ME
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded">
            MY WORKS
          </button>
        </div>
      </main>
    </div>
  );
}
