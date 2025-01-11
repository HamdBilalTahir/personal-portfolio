import Head from "next/head";

export default function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Services - Hamd Bilal Tahir</title>
        <meta
          name="description"
          content="Services offered by Hamd Bilal Tahir"
        />
      </Head>
      <header className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">HAMD</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
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
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Services</h1>
        <p className="text-xl mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">Web Design</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">Photography</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">Web Developer</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">App Developing</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">Branding</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold">Product Strategy</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
