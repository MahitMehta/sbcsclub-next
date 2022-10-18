import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeStyles from "../styles/home.module.css";
import { useRef } from "react";
import Workshop from "../components/Workshop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import MeetingDate from "../components/MeetingDate";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const landingContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Head>
        <title>CS Club | SBHS</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto flex min-h-screen overflow-hidden w-screen flex-col items-center justify-center">
          <section id="home" ref={landingContainerRef} className="flex container p-5 relative justify-center lg:flex-row flex-col-reverse items-center w-full min-h-screen">
              <div className={`${HomeStyles.gradientBubbleOne}`}></div>
              <div className="flex-1 justify-center z-20 space-y-6 flex flex-col items-start w-full">
                <h1
                  style={{ lineHeight: 1.1 }}
                  className="md:text-7xl text-5xl font-medium text-white">
                    South Brunswick Computer Science Club.
                </h1>
                <h2
                  className="md:text-xl text-lg text-white font-light text-opacity-60">
                    Master powerful tools and next-level skills to pursue a career in computer science.
                </h2>
                <div className="space-x-6 flex">
                  <a href="https://tinyurl.com/5n86ht4r" rel="noopener noreferrer nofollow" target={"_blank"}>
                    <button className="bg-white transition-opacity hover:opacity-50 rounded-full p-3">
                      Workshop Sign Up.
                    </button>
                  </a>
                 <a href="#workshops">
                    <button className="transition-opacity hover:opacity-50 text-white p-3">
                      View Workshops.
                    </button>
                 </a>
                </div>
                <div className="my-2 px-3 h-8 w-full relative flex space-x-6">
                  <a href={"https://www.instagram.com/sbcsclub/"} target="_blank" rel="noopener noreferrer nofollow">
                    <FontAwesomeIcon icon={faInstagram} height={35} color="white" />
                  </a>
                  <a href={"mailto:csclub@sbschools.org"} target="_blank" rel="noopener noreferrer nofollow">
                    <FontAwesomeIcon icon={faEnvelope} height={35} color="white" />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex mt-16 relative justify-center max-h-[1000px] items-center">
                <div className="lg:absolute lg:scale-150 z-10">
                  <Image 
                    src={"/sbcsclub/code.png"} 
                    quality={100} 
                    objectFit="contain" 
                    width={1000} 
                    height={1000} 
                  />
                </div>
              </div>
          </section>
          <section id="overview" className="min-h-[500px] mb-[100px] items-center flex flex-col-reverse lg:flex-row max-w-7xl px-6 md:px-3">
            <div className="flex-1 relative flex justify-center items-center space-x-0 md:space-x-6">
              <div className={`${HomeStyles.gradientBubbleOne}`}></div>
              <div className="flex-col flex space-y-3 w-min">
                <h1 className="text-white font-medium text-center text-lg">1st Semester</h1>
                <MeetingDate date="October 18th, 2022" />
                <MeetingDate date="November 1st, 2022" />
                <MeetingDate date="November 22nd, 2022" />
                <MeetingDate date="December 13th, 2022" />
                <MeetingDate date="January 3rd, 2023" />
                <MeetingDate date="January 17th, 2023" />
              </div>
              <div className="flex-col flex !ml-3 md:ml-0 space-y-3 w-min">
                <h1 className="text-white font-medium text-center text-lg">2nd Semester</h1>
                <MeetingDate date="February 14th, 2023" />
                <MeetingDate date="March 7th, 2023" />
                <MeetingDate date="March 21st, 2023" />
                <MeetingDate date="April 4th, 2023" />
                <MeetingDate date="May 2nd, 2023" />
                <MeetingDate date="May 30th, 2023" />
              </div>
            </div>
            <div className="flex-1 my-[100px] lg:my-0 space-y-6">
              <h1
                style={{ lineHeight: 1.1 }}
                className="md:text-7xl text-5xl font-medium text-white">
                 <span className={`${HomeStyles.overviewHeader}`}>Club</span> Overview.
              </h1>
              <p
                className="md:text-xl text-lg text-white font-light text-opacity-60">
                  Our goal is to teach students all about computer science and we require&nbsp; 
                  <span className={HomeStyles.proHighlight}>Zero</span> experience. 
                  Club meetings are held Bimonthly on <span className={HomeStyles.proHighlight}>Tuesdays</span>. 
              </p>
              <p
                className="md:text-xl text-lg text-white font-light text-opacity-60">
                  To gain club credit you must at least&nbsp;
                  <span className={HomeStyles.proHighlight}>50%</span>&nbsp;
                  of the meetings, pay to participate 
                  (<span className={HomeStyles.proHighlight}>$25</span>) 
                  on Community Pass, and submit club dues 
                  (<span className={HomeStyles.proHighlight}>$10</span>).
              </p>
              <p
                className="md:text-xl text-lg text-white font-light text-opacity-60">
                  Our wonderful advisors are Mr. Schiff, Ms. Robles, and Mr. Trainor.
              </p>
            </div>
          </section>
          <section id="workshops" className="min-h-screen my-6 flex-col space-y-3 flex max-w-7xl relative justify-center items-center" >
            <div className={`${HomeStyles.gradientBubbleTwo}`}></div>
            <h1
              style={{ lineHeight: 1.1 }}
              className="md:text-7xl text-5xl font-medium text-white">
                <span className={`${HomeStyles.proHighlight}`}>Pro</span> Workshops.
            </h1>
            <h2
              className="md:text-xl px-6 md:px-0 text-lg text-white font-light text-center text-opacity-60">
                Explore a Variety of Useful Workshops and Plan For Your Next Endeavor.
            </h2>
            <div className="min-h-screen content-start flex w-full flex-wrap justify-center items-center">
              <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/flutter.png"
                ]}
                teachers="Shreya & Sharvani"
                name={"Flutter App Development"}
              />
               <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/python.png"
                ]}
                teachers="Diya & Esha"
                name={"Intro to Python"}
              />
               <Workshop 
                description="Within this workshop, students will learn how to make a cross-platform database app. The goal of this database program is to store user information, like names, ages, emails, and phone numbers. In order to make this app, our workshop will use React Native, Java, Node.JS, and, MariaDB. All languages will be taught to the extent possible to make the app, but after teaching what is needed, students can do further if they want to further research the language they coded in."
                images={[
                  "/sbcsclub/workshops/react.png"
                ]}
                teachers="Tejas & Ali"
                name={"Cross-Platform Database App"}
              />
               <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/matplotlib.png"
                ]}
                teachers="Abhik & Yash"
                name={"MatPlotLib"}
              />
               <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/web-scraping.png"
                ]}
                teachers="Mohammad & Satvik"
                name={"Web Scraping"}
              />
              <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/html.png"
                ]}
                teachers="Mahit & Pooja"
                name={"Web Development"}
              />
              <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/sql.png"
                ]}
                teachers="Swathi & Aditi"
                name={"SQL"}
              />
              <Workshop 
                description=""
                images={[
                  "/sbcsclub/workshops/binary-tree.png"
                ]}
                teachers="Vivaan & Burhan"
                name={"Data Structures and Algorithms"}
              />
            </div>
          </section>
          {/* <section id="hackathon" className="flex justify-center w-full min-h-screen">
            <div className="flex-1 justify-center space-y-3 text-white flex items-center flex-col">
                <h1 className="text-7xl font-bold">Hackathon</h1>
            </div>
            <div 
              className={`relative ${HomeStyles.gradientOverlay}`}>
              <Image src={"/hackathon.jpg"} objectFit="cover" layout="fill" />
            </div>
          </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home; 