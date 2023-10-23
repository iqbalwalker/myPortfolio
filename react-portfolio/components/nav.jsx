import Image from "next/image";
import {useState, useEffect} from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
    AiOutlineMail,
    AiOutlineWifi,
    AiFillApi,
    AiOutlineLinkedin
  } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill, BsLinkedin, BsWifiOff } from "react-icons/bs";
import menu from "../public/menu.png";
import menu3 from "../public/menu3.png"; 


  

export const Navbar = ({darkMode, setDarkMode, showCountries, setShowCountries}) => {

    const [online, setOnline] = useState(true);

    useEffect(() => {
        const handleOnlineStatus = () => {
          setOnline(navigator.onLine);
        };
    
        if (typeof window !== 'undefined') {
          window.addEventListener('online', handleOnlineStatus);
          window.addEventListener('offline', handleOnlineStatus);
    
          return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
          };
        }
      }, []);

   
    return ( 
        <div className={darkMode ? "dark" : " "}>
        <nav className="py-3 mb-12 flex justify-between dark:text-white">
            {darkMode? <h1 className="font-burtons text-md"><a href=""><Image src={darkMode? menu3 : menu} alt="image" className="hover:animate-pulse"/></a></h1> 
            :<h1 className="font-burtons text-md"><a href=""><Image src={menu} alt="image" className="hover:animate-pulse"/></a></h1>}
            <ul className="flex items-center">
              {online? <li>
                        <AiOutlineWifi className="text-green-500 text-3xl mr-8 dark:text-green-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"/>
                      </li>
                    : <li>
                        <BsWifiOff className="text-red-500 text-3xl text-black mr-8 dark:text-red-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"/>
                      </li>
              }
              <li>
                {darkMode ? <BsFillSunFill
                  
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-3xl dark:text-white dark:hover:text-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                /> : <BsFillMoonStarsFill
                  
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl text-gray-800 hover:text-cyan-800 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
              />}
              </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
                <a
                  className="bg-gradient-to-r from-blue-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 
                    hover:text-red-400  hover:dark:bg-gradient-to-r from-blue-500 "
                  href="myCV.pdf" target="_blank" download>
                  Resume
                </a>
                </li>
               {/*<li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
                <button
                  className="bg-gradient-to-r from-blue-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 
                    hover:text-red-400  hover:dark:bg-gradient-to-r from-blue-500 "
                  onClick={()=>setShowCountries(true)}
                >
                  Location
                </button>
              </li>*/}
            </ul>
          </nav>
          </div>
     );
};