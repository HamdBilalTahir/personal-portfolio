import Head from "next/head";

import Link from "next/link";

const blogPosts = [
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
];

export default function Blog() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Blog - Hamd Bilal Tahir</title>
        <meta name="description" content="Blog by Hamd Bilal Tahir" />
      </Head>
      <header className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">HAMD</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
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
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Our Blog</h1>
        <p className="text-xl mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm">
                {post.date} | {post.author} | {post.comments} Comments
              </p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
