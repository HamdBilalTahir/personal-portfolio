import Head from "next/head";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>About - Hamd Bilal Tahir</title>
        <meta name="description" content="About Hamd Bilal Tahir" />
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
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl mt-4">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="mt-8">
          <p>Name: Hamd Bilal Tahir</p>
          <p>Date of birth: January 01, 1987</p>
          <p>Address: San Francisco CA 97987 USA</p>
          <p>Zip code: 1000</p>
          <p>Email: clarkthomp@gmail.com</p>
          <p>Phone: +1-2234-5678-9-0</p>
        </div>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded mt-4">
          DOWNLOAD CV
        </button>
      </main>
    </div>
  );
}
