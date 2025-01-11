import Head from "next/head";

export default function Resume() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Resume - Hamd Bilal Tahir</title>
        <meta name="description" content="Hamd Bilal Tahir's Resume" />
      </Head>
      <header className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">CLARK</h1>
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
        <h1 className="text-5xl font-bold">Resume</h1>
        <p className="text-xl mt-4">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-yellow-500 text-lg">2014-2015</h2>
            <h3 className="text-xl font-bold">Master Degree of Design</h3>
            <p>Cambridge University</p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-yellow-500 text-lg">2014-2015</h2>
            <h3 className="text-xl font-bold">Art & Creative Director</h3>
            <p>Cambridge University</p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
