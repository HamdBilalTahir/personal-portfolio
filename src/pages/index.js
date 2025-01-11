import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Hamd Bilal Tahir - Portfolio</title>
        <meta
          name="description"
          content="Hamd Bilal Tahir's personal portfolio"
        />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section id="home" className="min-h-screen flex items-center">
          <div className="flex flex-col items-start mr-8">
            <h2 className="text-[#ffbd39] text-lg font-semibold tracking-wider mb-4 animate-fadeInUp">
              HELLO!
            </h2>
            <div className="flex items-center space-x-2">
              <h1 className="text-white text-5xl font-extrabold mb-4 animate-fadeInUp">
                I'm
              </h1>
              <h1 className="text-[#ffbd39] text-5xl font-extrabold mb-4 animate-fadeInUp">
                Hamd Bilal Tahir
              </h1>
            </div>
            <p className="text-2xl mb-8 animate-fadeInUp">
              An AI Product Manager
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="bg-[#ffbd39] font-bold text-black text-sm px-6 py-3 rounded-full"
              >
                HIRE ME
              </button>
              <Link href="#projects" onClick={(e) => e.preventDefault()}>
                <button className="border border-white font-bold text-white text-sm px-6 py-3 rounded-full">
                  MY WORKS
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/dp.png"
              alt="Profile Picture"
              className="w-128 h-128 animate-fadeInUp"
            />
          </div>
        </section>

        <section
          id="resume"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl font-extrabold">Resume</h1>
          <p className="text-xl mt-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                2014-2015
              </h2>
              <h3 className="text-2xl mb-4">Master Degree of Design</h3>
              <p className="text-[#A3A3A3] text-xl mb-4">
                Cambridge University
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                2014-2015
              </h2>
              <h3 className="text-2xl mb-4">Art & Creative Director</h3>
              <p className="text-[#A3A3A3] text-xl mb-4">
                Cambridge University
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl font-extrabold">Our Projects</h1>
          <p className="text-xl mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded">
                <img
                  src={`/project${i + 1}.jpg`}
                  alt={`Project ${i + 1}`}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl font-extrabold">My Skills</h1>
          <p className="text-xl mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="w-full max-w-2xl mt-8">
            {[
              { skill: "Photoshop", level: "90%" },
              { skill: "HTML5", level: "95%" },
              { skill: "WordPress", level: "70%" },
            ].map((skill, index) => (
              <div key={index} className="mt-4">
                <div className="flex justify-between">
                  <span>{skill.skill}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="bg-gray-800 h-2 rounded-full">
                  <div
                    className="bg-[#ffbd39] h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="blog"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl font-extrabold">Our Blog</h1>
          <p className="text-xl mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "Why Lead Generation is Key for Business Growth",
                date: "June 21, 2019",
                author: "Admin",
                comments: 3,
                excerpt:
                  "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
              },
              {
                title: "The Importance of SEO in Digital Marketing",
                date: "July 15, 2020",
                author: "Admin",
                comments: 5,
                excerpt:
                  "SEO is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
              },
              {
                title: "How to Improve Your Social Media Presence",
                date: "August 10, 2021",
                author: "Admin",
                comments: 2,
                excerpt:
                  "Social media is a powerful tool for businesses to reach potential customers and engage with existing ones.",
              },
            ].map((post, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-sm">
                  {post.date} | {post.author} | {post.comments} Comments
                </p>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-white text-4xl font-extrabold mb-4">
              Contact Me
            </h2>
            <p className="mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <div className="flex justify-around">
              <div>
                <img src="/public/file.svg" alt="Address" />
                <h3 className="font-semibold">ADDRESS</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div>
                <img src="/public/next.svg" alt="Contact Number" />
                <h3 className="font-semibold">CONTACT NUMBER</h3>
                <p>+ 1235 2355 98</p>
              </div>
              <div>
                <img src="/public/vercel.svg" alt="Email Address" />
                <h3 className="font-semibold">EMAIL ADDRESS</h3>
                <p>info@yoursite.com</p>
              </div>
              <div>
                <img src="/public/globe.svg" alt="Website" />
                <h3 className="font-semibold">WEBSITE</h3>
                <p>yoursite.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
