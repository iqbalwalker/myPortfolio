import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWifi,
  AiOutlineLoading3Quarters,
  AiOutlineLinkedin
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill, BsLinkedin, BsWifiOff } from "react-icons/bs";
import { FaSadTear, FaSadCry, FaLinkedin } from "react-icons/fa";
import { BiLoaderCircle} from "react-icons/bi";
import { useEffect, useState } from "react";
import myPic from "../public/myPic.jpg";
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
import {Navbar, Time} from "../components/nav";





export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  /*const [online, setOnline] = useState(true); */
  const [count, setCount]= useState(1);
  const [time, setTime] =useState(new Date());
  const darkVal = "dark ";
  const lightVal = "";
  const [showCountries, setShowCountries] = useState(false);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  useEffect(()=>{
    setCount(count + 1);
  },[seconds]);

  return (
    <>
    <div className={darkMode ? darkVal : lightVal }>
    <Head>
        <title className="font-shrikhand">Alexa John</title>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen ">
          <p className="text-center text-2xl ">
          {count > 0 ? <Time time={time} setCount={setCount} count={count} setTime={setTime}/>
            : 
            <div className="flex justify-center text-black dark:text-yellow-300">
              <BiLoaderCircle 
              className=" animate-spin " 
              />&#160;Loading...
            </div>}
          </p>
          
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} showCountries={showCountries} setShowCountries={setShowCountries} />
          <>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full ring ring-gray-500 ring-opacity-30 w-80 h-80 
                relative overflow-hidden mt-20 md:h-96 md:w-96 dark:ring ring-teal-500 ring-opacity-30 transition ease-in-out hover:-translate-y-1">
              <Image src={myPic} layout="fill" objectFit="cover" alt="image" />
            </div>
          <div className="text-center p-10 py-10">
            
          <h2 className="text-5xl py-2 text-black-600 font-medium dark:text-white md:text-6xl transition ease-in-out hover:-translate-y-1">
              Hi there,
            </h2>
            <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-teal-400 md:text-6xl transition ease-in-out hover:-translate-y-1">
              I&#39;m Alexa John, 
            </h2>
            <h3 className="text-teal-600 text-2xl py-2 dark:text-yellow-600 md:text-3xl transition ease-in-out hover:-translate-y-1">
              a Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl transition ease-in-out hover:-translate-y-1">
              And I provide freelancing services on Software Engineering especially Frontend. Come join me in creating amazing software applications!
            </p>
            <p className="text-md py-5 leading-8 text-blue-800 dark:text-yellow-600 max-w-xl mx-auto md:text-xl transition ease-in-out hover:-translate-y-1">Your can reach out to me through:</p>
            <p className="text-2xl py-1 dark:text-gray-400 transition ease-in-out hover:-translate-y-1">Phone: <a className="text-xl py-1 dark:text-gray-400" href="tel:+254 758 345090">+254 758 345090</a></p>
            <p className="text-md py-5 leading-8 text-blue-800 dark:text-yellow-600 max-w-xl mx-auto md:text-xl transition ease-in-out hover:-translate-y-1">Or on Social Media:</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <a href="https://www.linkedin.com/in/alexa-john-212a1a1a3/" >
                <BsLinkedin
                  className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:animate-bounce
                            hover:scale-110 bg-white rounded-lg shadow-xl hover:shadow-blue-700
                           text-gray-500 hover:text-blue-900 duration-300 rounded-lg bg-white "
                />
              </a>
              <a href="https://github.com/iqbalwalker">
                <AiFillGithub 
                  className="rounded-lg shadow-white transition ease-in-out 
                  bg-gray-500 hover:-translate-y-1 hover:animate-bounce text-gray-500
                  hover:scale-110 hover:bg-black rounded-lg shadow-xl hover:shadow-black
                  text-white duration-300 "
                />
              </a>
              
              <a href="mailto:alexarjohns@gmail.com">
                <AiOutlineMail
                  className="rounded-xl transition ease-in-out text-white hover:animate-bounce hover:-translate-y-1 
                  hover:scale-110  bg-gray-500 hover:bg-white rounded-xl shadow-xl hover:shadow-red-600 text-white
                  hover:text-red-600 duration-300"
                />
              </a>
            </div>
          </div>
          </>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white transition ease-in-out hover:-translate-y-1">Services Offered</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-200 transition ease-in-out hover:-translate-y-1">
              Since the beginning of my journey as a freelance 
              developer, I&#39;ve done remote work for
              <span className="text-yellow-600"> agencies </span>
              consulted for <span className="text-yellow-600">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-200 transition ease-in-out hover:-translate-y-1">
              I offer from a wide range of services, including brand design,
              programming and front-end development.
            </p>
          </div>
          <div className="lg:flex gap-10">
          <div className="text-center shadow-xl p-10 transition ease-in-out duration-800 hover:-translate-y-5 rounded-xl my-10 shadow-lg shadow-blue-400  dark:bg-gray-700 flex-1">
              <Image src={code} width={100} height={100} alt="image" className="animate-bounce "/>
              <h3 className=" bg-white text-red-600 pb-4 pt-2 text-lg font-medium rounded-full transition ease-in-out hover:-translate-y-2 duration-500 shadow-xl shadow-red-500 ">
                Skills
              </h3>
              <p className="dark:text-white py-4 transition ease-in-out hover:-translate-y-2  ">
                  Electronics design and fabrication,<br></br> GoogleCloud<br></br>Coding
              </p>
              <h4 className="bg-white py-4 text-teal-600 rounded-full shadow-xl shadow-teal-600 transition ease-in duration-400 hover:-translate-y-3">Programming languages:</h4>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">Python &#40; proficient &#41;</p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">JavaScript &#40; proficient &#41;</p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">C and C++ &#40; proficient &#41;</p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">PHP &#160;&#40; currently learning &#41;</p>
            </div>
            <div className="text-center shadow-xl p-10 transition ease-in-out duration-800 hover:-translate-y-5 rounded-xl my-10 shadow-lg shadow-blue-400  dark:bg-gray-700 flex-1">
              <Image src={Tech} width={100} height={100} alt="image" className="animate-bounce"/>
              <h3 className="bg-white text-blue-600 pb-4 pt-2 text-lg font-medium rounded-full transition ease-in-out hover:-translate-y-2 duration-500 shadow-xl shadow-blue-500 ">
                Code your dream project
              </h3>
              <p className="dark:text-white py-4 transition ease-in-out hover:-translate-y-1">
                Do you have an idea for your next great website? Let&#39;s make it a
                reality.
              </p>
              <h4 className="bg-white py-4 text-yellow-400 rounded-full shadow-xl shadow-yellow-500 transition ease-in duration-400 hover:-translate-y-3">Frameworks:</h4>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">NextJS + ExpressJS</p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">PHP + Laravel</p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2">Django + Flask</p>
            </div>
            <div className="text-center shadow-xl p-10 transition ease-in-out duration-800 hover:-translate-y-5 rounded-xl my-10 shadow-lg shadow-blue-400  dark:bg-gray-700 flex-1">
              <Image src={design} width={100} height={100} alt="image" className="animate-bounce"/>
              <h3 className="bg-white py-4 text-pink-600 rounded-full shadow-xl shadow-pink-700 transition ease-in duration-400 hover:-translate-y-3">
               Projects
              </h3>
              <p className="dark:text-white py-4 transition ease-in-out hover:-translate-y-1">
                I developed a couple of project samples &#40;Frontend&#41; for you to check out.
              </p>
              <h4 className="bg-white py-4 text-purple-600 rounded-full shadow-xl shadow-purple-700 transition ease-in duration-400 hover:-translate-y-3">Project links:</h4>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2 hover:text-blue-600 dark:hover:text-blue-600 "><a href="https://yummyfoodske.netlify.app/" target="_blank " rel="noreferrer" >
                Restuarant Website</a></p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2 hover:text-blue-600 dark:hover:text-blue-600 "><a href="https://foodhub-ke.netlify.app/" target="_blank" rel="noreferrer" >
                Food Hub</a></p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2 hover:text-blue-600 dark:hover:text-blue-600 "><a href="https://healthyfoods-ke.netlify.app/" target="_blank" rel="noreferrer" >
                Healthy Food</a></p>
              <p className="dark:text-white pt-4 transition ease-in-out hover:-translate-x-2 hover:text-blue-600 dark:hover:text-blue-600 "><a href="https://bakery-ke.netlify.app/" target="_blank" rel="noreferrer" >
                Bakery</a></p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white transition ease-in-out hover:-translate-y-1">Portfolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-800 text-center dark:text-gray-200 transition ease-in-out hover:-translate-y-1">
              I have pursued a <span className="text-teal-500 text-lg dark:text-yellow-600">Bachelor of Technology in Computer and Electronics Systems </span> 
              <br></br>from <span className="text-teal-500 text-lg dark:text-yellow-600"> Mount Kenya University </span>
              <br></br>I have also undergone
              <span className="text-teal-500 text-lg dark:text-yellow-600"> React Training</span> under a bootcamp
              <br></br>from <span className="text-teal-500 text-lg dark:text-yellow-600">
                Meta-Andela collaboration</span> and <span className="text-teal-500 text-lg dark:text-yellow-600">Google Cloud Computing 
                </span>
              <br></br> as well as containerization tools using
              <span className="text-teal-500 text-lg dark:text-yellow-600"> Docker</span>
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 text-center dark:text-gray-200 transition ease-in-out hover:-translate-y-1">
              I offer the following services: <br></br>Web App development <br></br>API development 
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
              <Image
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
              <Image
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="image"
              />
            </div>
            <div className="basis-1/3 flex-1 transition ease-in duration-500 hover:-translate-x-3">
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
      <footer className="bg-gray-700 text-center dark:bg-yellow-600">
            <p className="text-white text-lg py-1  dark:text-white">&copy; Alexa John 2023</p>
          </footer>
    </div>
  </>  
  );
}
