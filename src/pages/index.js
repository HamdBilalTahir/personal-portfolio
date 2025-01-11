import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";

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
      <Header />
      <main className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-yellow-500 text-lg mb-4">HELLO!</h2>
        <h1 className="text-5xl font-bold mb-4">I'm Hamd Bilal Tahir</h1>
        <p className="text-xl mb-8">An AI Product Manager</p>
        <div className="flex space-x-4">
          <Link href="/contact">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded">
              HIRE ME
            </button>
          </Link>
          <Link href="/projects">
            <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded">
              MY WORKS
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
