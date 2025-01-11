import Head from "next/head";

export default function Skills() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Skills - Hamd Bilal Tahir</title>
        <meta name="description" content="Skills of Hamd Bilal Tahir" />
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
        <h1 className="text-5xl font-bold">My Skills</h1>
        <p className="text-xl mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="w-full max-w-2xl mt-8">
          <div className="flex justify-between">
            <span>Photoshop</span>
            <span>90%</span>
          </div>
          <div className="bg-gray-800 h-2 rounded-full">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            <span>HTML5</span>
            <span>95%</span>
          </div>
          <div className="bg-gray-800 h-2 rounded-full">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            <span>WordPress</span>
            <span>70%</span>
          </div>
          <div className="bg-gray-800 h-2 rounded-full">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
