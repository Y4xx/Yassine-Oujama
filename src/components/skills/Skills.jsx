import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3, IoLogoPython } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaPhp, FaLaravel, FaJava, FaSymfony } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";


const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16 items-center">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            Some Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        {/* right box */}
        <div className="grid grid-cols-4 sm:grid-cols-2 flex-col gap-10">
          <SkillBox
            logo={<FaReact />}
            skill={"React Js"}
          />

          <SkillBox
            logo={<IoLogoVue />}
            black={"black"}
            white={"white"}
            skill={"Vue Js"}
          />

          <SkillBox
            logo={<FaLaravel />}
            black={"white"}
            white={"black"}
            skill={"Laravel"}
          />

          <SkillBox
            logo={<BiLogoTailwindCss />}
            black={"black"}
            white={"white"}
            skill={"Tailwind css"}
          />

          <SkillBox
            className=""
            logo={
              <IoLogoPython />
            }
            black={"black"}
            white={"white"}
            skill={"Python"}
          />
          <SkillBox
            logo={<IoLogoNodejs />}
            black={"white"}
            white={"black"}
            skill={"Node Js"}
          />
          <SkillBox
            logo={<SiNextdotjs />}
            black={"black"}
            white={"white"}
            skill={"Next Js"}
          />
          <SkillBox
            logo={<SiMongodb />}
            black={"white"}
            white={"black"}
            skill={"MongoDB"}
          />


        </div>
      </div>
    </div>
  );
};

export default Skills;
