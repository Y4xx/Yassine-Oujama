import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div id="works" className="mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7 rounded-t-2xl">
        <h2 className="font-bold text-5xl sm:text-3xl text-white"
         data-aos="fade-up" data-aos-duration="1200"
        >Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://t.me/@Yassine4x/"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
                <a href="https://linkedin.com/in/yassine-oujama">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>            
                {/* <p>Telegram</p> */}
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/212671227672"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            {/* <p>WhatsApp</p> */}
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="#"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <AiFillGithub className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            {/* <p>Instagram</p> */}
          </a>
        </div>
        <div className="sm:text-[12px] text-white">
          | Copyright &copy; <span>{year} Y4x </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
