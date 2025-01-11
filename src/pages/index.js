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
                {"I'm"}
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
          className="min-h-screen flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-white text-5xl font-extrabold">Resume</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 max-w-7xl w-full">
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                10/2022 - Present
              </h2>
              <h3 className="text-2xl mb-4">Product Manager - AI/ML</h3>
              <p className="text-[#A3A3A3] text-xl mb-4">CAFU - Dubai, UAE</p>
              <ul className="list-disc pl-5">
                <li>
                  Built a Gen AI Sales Assistant that automated lead sourcing,
                  personalized email outreach, and lead qualification,
                  streamlining the TOF sales process and reducing reliance on
                  human SDRs.
                </li>
                <li>
                  Developed a Gen AI Data Insights Assistant that centralized
                  operations data sources, added a semantic layer, and provided
                  actionable insights via a conversational chatbot, transforming
                  operational decision-making processes.
                </li>
                <li>
                  Built ML-based ETA engine for CAFU operations, improving ETA
                  accuracy by 26% and achieving 81% on-time pilot deliveries by
                  A/B testing and comparative analysis methodologies.
                </li>
                <li>
                  Integrated the ETA engine across platforms (customer mobile
                  app, pilot mobile app, operations portal & routing engine),
                  enhancing customer UI/UX & pilot evaluation via ETA vs. ATA
                  analysis and building a pilot performance framework based on
                  ETA.
                </li>
                <li>
                  Developed the demand hotspots model to empower pilot
                  operations, guiding pilots to high-demand areas, and reducing
                  pilot idle time.
                </li>
                <li>
                  Built the demand prediction model to achieve demand-supply
                  harmony in CAFU operations, automating pilot and truck
                  allocation, and improving operational efficiency by 35%.
                </li>
                <li>
                  Created an image classification LLM model to rate carwash
                  quality, providing feedback to pilots and enhancing service
                  standards, hence improving carwash operations.
                </li>
                <li>
                  Used image classification LLM for cross-selling, guiding
                  pilots via the pilot app to capture fuel vehicle images,
                  triggering CRM comms, adding 1,500 weekly carwash customers.
                </li>
                <li>
                  Implemented ML-based live demand detector, identifying
                  real-time demand shifts and recommending proactive live ops
                  adjustments of operational slot caps.
                </li>
                <li>
                  Built a Data Science segmentation-based order prioritization
                  engine that mapped orders to priority for CAFU operational
                  efficiency.
                </li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                01/2021 - 10/2022
              </h2>
              <h3 className="text-2xl mb-4">Co-Founder & Product Manager</h3>
              <p className="text-[#A3A3A3] text-xl mb-4">
                DevNation (EdTech - raised $175K) - Lahore, Pakistan
              </p>
              <ul className="list-disc pl-5">
                <li>Established product policies around the company.</li>
                <li>
                  Allocated the budget and resources for tech initiatives &
                  products.
                </li>
                <li>
                  Managed human, financial, and material resources of the
                  company.
                </li>
                <li>
                  Established the central departments and associated senior
                  staff positions, KPIs, and milestones and track their
                  performances.
                </li>
                <li>
                  Selected middle managers, directors, & other executive staff
                  and provide them autonomy to execute their jobs.
                </li>
                <li>
                  Led all product development and tech innovation, user journey
                  mapping, building digital products for consumers, using Agile.
                </li>
                <li>
                  Worked with corporate clients to meet all tech needs & digital
                  transformation.
                </li>
                <li>
                  Represented DevNation in fundraising (raising $175k
                  investment).
                </li>
                <li>
                  Led Web Development initiatives and validate business use
                  cases.
                </li>
                <li>
                  Led the Product sprints in DevNation via the use of Agile
                  (Jira) frameworks.
                </li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                08/2019 - 09/2021
              </h2>
              <h3 className="text-2xl mb-4">
                Data Science Tech Lead Consultant
              </h3>
              <p className="text-[#A3A3A3] text-xl mb-4">
                PwC Digital Services Middle East - Dubai, UAE
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Acted as a Data Analytics, Data Science & Software Consultant
                  for various organizations and tech clients of PwC - worked
                  directly in Digital Transformation of Big Business and
                  Enterprise.
                </li>
                <li>
                  Dealt with PwC clients and was involved in POC creation,
                  negotiations, resource planning, use case delivery, and
                  support, defining key SOPs for the project pipeline.
                </li>
                <li>
                  Leveraged web development skills with React, Node, Typescript,
                  Agile Frameworks to develop TAMM, the United Arab Emirates’
                  government services customer-facing portal.
                </li>
                <li>
                  Utilized knowledge of Microsoft Power BI and data science to
                  develop internal tools for the Abu Dhabi Digital Authority,
                  Marks & Spencer, Kiabi Retail & Telco.
                </li>
                <li>
                  Applied experience with Microsoft Luis (natural language
                  processing engine), Microsoft Azure Services, and Python to
                  develop a customer service chatbot for the banking sector.
                </li>
              </ul>
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded">
              <h2 className="text-[#ffbd39] text-2xl font-bold mb-4">
                08/2018- 03/2019
              </h2>
              <h3 className="text-2xl mb-4">Data Scientist - Bioinformatics</h3>
              <p className="text-[#A3A3A3] text-xl mb-4">
                Shanghai Joye Biotech - Shanghai, China
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Performed descriptive data analysis, machine learning using
                  Python, R.
                </li>
                <li>
                  Performed Differentially Expressed Gene Analysis on Patient
                  Data.
                </li>
                <li>
                  Peformed ceRNA, lncRNA-miRNA-mRNA interaction network in
                  Cytoscape and dendrogram creation using R and Python scripts.
                </li>
                <li>
                  Provided Machine Learning insights into liver, lung, and
                  breast cancer to hospital clients so they can improve their
                  treatment.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl font-extrabold">My Projects</h1>
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
          <h1 className="text-white text-5xl font-extrabold">
            My Skills & Tools
          </h1>
          <div className="w-full max-w-2xl mt-8 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-[#ffbd39] text-3xl font-bold mb-4">Skills</h2>
              <ul className="custom-list pl-5">
                <li>Gen AI</li>
                <li>Machine Learning</li>
                <li>SQL</li>
                <li>Python</li>
                <li>MERN Stack</li>
                <li>Operations Planning</li>
                <li>Pilot/Driver Operations</li>
                <li>Supply-Demand Harmony</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[#ffbd39] text-3xl font-bold mb-4">Tools</h2>
              <ul className="custom-list pl-5">
                <li>PowerBI</li>
                <li>Metabase</li>
                <li>Microsoft Azure</li>
                <li>Confluence</li>
                <li>Notion</li>
                <li>JIRA</li>
                <li>AWS Athena</li>
              </ul>
            </div>
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
