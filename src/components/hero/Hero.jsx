import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn} from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/CV_Yassine_Oujama.pdf";


const Hero = () => {
  return (
    <div id="home" className={`bg-gradient-to-r from-gray-200 to-gray-400 rounded-b-3xl`}>
      <div className=" container mx-auto pt-5 h-[calc(100vh-0.5rem)] md:flex-col-reverse  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-2/3 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
             Hey There, I'm Yassine OUJAMA
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
                "Problem Solver",
                2000,
                "Freelancer",
                2000,
                "UI/UX Design",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-black text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              I Devlop beautiful simple things, And I love what i do !
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a href="mailto:yassine.oujama@gmail.com"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-gray-200"
            >
              <span> Contact Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-black"
              download
            >
              <div className="flex items-center gap-1">
                CV <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yassine-oujama">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/OujamaYassine">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://wa.me/212610994170">
                  {" "}
                  <IoLogoWhatsapp className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <div className="absolute bottom-12 md:bottom-6 right-8 md:right-2">
                <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                  <img
                    className=" w-[135px] md:w-[90px] circle-text"
                    src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                    alt=""
                  />
                  <FaPlay
                    className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
