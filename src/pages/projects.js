import Head from "next/head";
import Header from "../components/Header";

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Projects - Hamd Bilal Tahir</title>
        <meta name="description" content="Projects by Hamd Bilal Tahir" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Our Projects</h1>
        <p className="text-xl mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project1.jpg" alt="Project 1" className="rounded" />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project2.jpg" alt="Project 2" className="rounded" />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project3.jpg" alt="Project 3" className="rounded" />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project4.jpg" alt="Project 4" className="rounded" />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project5.jpg" alt="Project 5" className="rounded" />
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img src="/project6.jpg" alt="Project 6" className="rounded" />
          </div>
        </div>
      </main>
    </div>
  );
}
