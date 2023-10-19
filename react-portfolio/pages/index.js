import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import deved from "../public/myPic.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import Tech from "../public/Tech-stacks.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import menu from "../public/menu.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alexa John</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-md"><a href=""><Image src={menu} alt="image"/></a></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:text-red-400 dark:bg-gradient-to-r from-blue-500 "
                  href="ALEXA(CV).pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full ring ring-gray-500 ring-opacity-30 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 dark:ring ring-teal-500 ring-opacity-30">
              <Image src={deved} layout="fill" objectFit="cover" alt="image" />
            </div>
          <div className="text-center p-10 py-10">
            
          <h2 className="text-5xl py-2 text-black-600 font-medium dark:text-white md:text-6xl">
              Hi there,
            </h2>
            <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-teal-400 md:text-6xl">
              I&#39;m Alexa John, 
            </h2>
            <h3 className="text-teal-600 text-2xl py-2 dark:text-yellow-600 md:text-3xl">
              a Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              And I provide freelancing services on Software Engineering especially Front-End. Come join me in creating amazing software applications!
            </p>
            <p className="text-md py-5 leading-8 text-blue-800 dark:text-yellow-600 max-w-xl mx-auto md:text-xl">Your can reach out to me through:</p>
            <p className="text-3xl py-1 dark:text-gray-600">Phone: <a className="text-3xl py-1 dark:text-gray-600 " href="tel:+254 758 345090">+254 758 345090</a></p>
            <p className="text-md py-5 leading-8 text-blue-800 dark:text-yellow-600 max-w-xl mx-auto md:text-xl">Or on Social Media:</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <a href="https://www.linkedin.com/in/alexa-john-212a1a1a3/" ><AiFillLinkedin /></a>
              <a href="https://github.com/iqbalwalker"><AiFillGithub /></a>
              
              <a href="mailto:alexarjohns@gmail.com"><AiOutlineMail /></a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white ">Services Offered</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              Since the beginning of my journey as a freelance 
              developer, I&#39;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and front-end development.
            </p>
          </div>
          <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-300 dark:hover:bg-gray-300 bg-white flex-1">
              <Image src={code} width={100} height={100} alt="image"/>
              <h3 className="text-red-600 text-lg font-medium pt-8 pb-2  ">
                Skills
              </h3>
              <p className="py-2">
                Coding, Electronics design and fabrication, GoogleCloud
              </p>
              <h4 className="py-4 text-teal-600">Programming languages:</h4>
              <p className="text-black-800 py-1">Python</p>
              <p className="text-black-800 py-1">JavaScript</p>
              <p className="text-black-800 py-1">C and C++</p>
              <p className="text-black-800 py-1">PHP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-300 dark:hover:bg-gray-300 bg-white flex-1">
              <Image src={Tech} width={100} height={100} alt="image"/>
              <h3 className="text-red-600 text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&#39;s make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks that I am well versed with</h4>
              <p className="text-black-800 py-1">NextJS + ExpressJS</p>
              <p className="text-black-800 py-1">PHP + Laravel</p>
              <p className="text-black-800 py-1">Django + Flask</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:bg-gray-300  dark:hover:bg-gray-300 bg-white flex-1 hover:bg-cyan-200">
              <Image src={design} width={100} height={100} alt="image"/>
              <h3 className="text-red-600 text-lg font-medium pt-8 pb-2  ">
               Projects
              </h3>
              <p className="py-2 ">
                I developed a couple of project samples (Front-End) for you to check out.
              </p>
              <h4 className="py-4 text-teal-600">Click on the Project name :</h4>
              <p className="text-black-800 py-1  hover:text-blue-600 "><a href="https://yummyfoodske.netlify.app/">Restuarant Website</a></p>
              <p className="text-black-800 py-1  hover:text-blue-600 "><a href="https://yummyfoodske.netlify.app/">Food Hub</a></p>
              <p className="text-black-800 py-1  hover:text-blue-600  "><a href="https://yummyfoodske.netlify.app/">Healthy Food</a></p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white ">Portfolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for<br></br>
              <span className="text-teal-500 text-lg"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people <br></br> to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              I offer the following services: <br></br>Web App development <br></br>API development 
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="image"
              />
            </div>
          </div>
          
        </section>
      </main>
      <footer className="bg-blue-400 text-center dark:bg-yellow-600">
            <p className="text-white text-lg py-1  dark:text-white">&copy; Alexa John 2023</p>
          </footer>
    </div>
  );
}