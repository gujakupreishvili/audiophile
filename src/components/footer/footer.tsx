import { motion } from "framer-motion";
import logo from "../../assets/logo.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer(){
  const animationFooter = {
    hidden: { opacity: 0,  },
    visible: { opacity: 1,},
  }
  return(
    <>
    <motion.div
       initial="hidden" // ანიმაციის საწყისი მდგომარეობა
       whileInView="visible" // როცა viewport-ში გამოჩნდება
       viewport={{ once: true, amount: 0.2 }} // ანიმაცია ერთხელ იწყება, როცა 20% კომპონენტი ჩანს
       transition={{ duration: 2 }} // ანიმაციის ხანგრძლივობა
       variants={animationFooter} // ანიმაციის ვარიანტები
     className="bg-black mt-[100px] flex flex-col items-center py-[42px] md:items-start md:px-[39px] lg:px-[165px]">
      <div className="md:flex md:flex-col md:justify-start md:items-start lg:flex-row lg:w-full lg:justify-between">
        <img src={logo} alt="" className="pb-[35px]" />
        <div className="flex flex-col items-center gap-[20px] md:flex-row ">
          <Link to="/" className="text-white hover:text-[#D87D4A;] cursor-pointer">HOME</Link>
          <Link to="/headphones" className="text-white hover:text-[#D87D4A;] cursor-pointer">HEADPHONES</Link>
          <Link to="/speakers" className="text-white hover:text-[#D87D4A;] cursor-pointer">SPEAKERS</Link>
          <Link to="/earphones" className="text-white hover:text-[#D87D4A;] cursor-pointer">EARPHONES</Link>
        </div>
      </div>
      <p className="text-white text-center pt-[20px] w-[327px] md:text-start md:w-full opacity-[0.5] lg:w-[80%]">
      Audiophile is an all in one stop to fulfill your audio needs. 
      're a small team of music lovers and sound specialists who are 
      devoted to helping you get the most out of personal audio.
       Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div className="pt-[30px] md:flex md:w-full md:justify-between">
        <p className="text-white">Copyright 2021. All Rights Reserved</p>
        <div className="flex gap-[14px]  justify-center mt-[35px] md:mt-[0px]">
          <AiFillFacebook  className="text-white text-[25px] hover:text-[#D87D4A;] cursor-pointer transition-[3]"/>
          <FaTwitter  className="text-white text-[25px] hover:text-[#D87D4A;] cursor-pointer " />
          <FaInstagram  className="text-white text-[25px] hover:text-[#D87D4A;] cursor-pointer "/>
        </div>
      </div>
    </motion.div>
    </>
  )
}