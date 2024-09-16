import logo from "../../assets/logo.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Footer(){
  return(
    <>
    <div className="bg-black mt-[100px] flex flex-col items-center py-[42px]">
      <div>
        <img src={logo} alt="" className="pb-[35px]" />
        <div className="flex flex-col items-center gap-[20px] ">
          <p className="text-white">HOME</p>
          <p className="text-white">HEADPHONES</p>
          <p className="text-white">SPEAKERS</p>
          <p className="text-white">EARPHONES</p>
        </div>
      </div>
      <p className="text-white text-center pt-[20px] w-[327px]">
      Audiophile is an all in one stop to fulfill your audio needs. 
      're a small team of music lovers and sound specialists who are 
      devoted to helping you get the most out of personal audio.
       Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div className="pt-[30px]">
        <p className="text-white">Copyright 2021. All Rights Reserved</p>
        <div className="flex gap-[14px]  justify-center mt-[35px]">
          <AiFillFacebook  className="text-white text-[25px]"/>
          <FaTwitter  className="text-white text-[25px]" />
          <FaInstagram  className="text-white text-[25px]"/>
        </div>
      </div>
    </div>
    </>
  )
}