import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";
import headphone from "../../assets/headphone.png"
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
export default function Header(){
  const [hamburger,setHamburger]=useState(false)
  function handleHamburger(){
    setHamburger(!hamburger)
    console.log(hamburger)
  }
  return(
    <div className="bg-black border-none mb-[90px]">
    <div className="flex items-center justify-between px-[14px] py-[10px]">
      <div className="flex justify-between w-[67%] items-center">
        {hamburger ? <VscChromeClose  className="text-white" onClick={handleHamburger}/>:<RxHamburgerMenu className="text-white" onClick={handleHamburger} />}
        <div className={`${hamburger ? "flex flex-col mt-4" : "hidden"} absolute top-[40px] left-1 bg-black text-white p-4 gap-3 z-10`}>
            <p>HOME</p>
            <p>PRODUCTS</p>
            <p>FEEDBACK</p>
            <p>SALE</p>
          </div>
    <img src={logo} alt="" />
      </div>
    <MdShoppingCart className="text-white text-[23px]" />
    </div>
    <hr  className="text-gray-400 w-full h-[1px]  "/>
    <div className="relative">
  <img src={headphone} alt="" className="w-full" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <p className="text-gray-500 tracking-[10px]">NEW PRODUCT</p>
    <h2 className="text-white text-3xl font-bold w-[328px] leading-10 text-[36px] pt-[8px] pb-[6px]">
      XX99 Mark II Headphones
    </h2>
    <p className="text-gray-300 mt-4 w-[328px] leading-[27px] font-normal">
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    <button className="mt-6 px-4 py-2 w-[160px] h-[48px] bg-[#D87D4A] hover:bg-[#FBAF85] hover:cursor-pointer  text-white rounded">See Product</button>
  </div>
</div>

    </div>
  )
}