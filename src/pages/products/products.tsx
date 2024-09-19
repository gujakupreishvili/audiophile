import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import ProductsMain from "./productsMain/main";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

export default function ProductsPage(){
  const [hamburger,setHamburger]=useState(false)
  function handleHamburger(){
    setHamburger(!hamburger)
    console.log(hamburger)
  }
 return(
       <>  
      <div className="bg-black border-none mb-[90px]">
      <div className="flex items-center justify-between px-[14px] py-[10px]">
      <div className="flex justify-between w-[67%] items-center">
        {hamburger ? <VscChromeClose  className="text-white" onClick={handleHamburger}/>:<RxHamburgerMenu className="text-white" onClick={handleHamburger} />}
        <div className={`${hamburger ? "flex flex-col mt-4" : "hidden"} absolute top-[40px] left-1 bg-black text-white p-4 gap-3 z-10`}>
            <Link to="/">HOME</Link>
            <p>PRODUCTS</p>
            <p>FEEDBACK</p>
            <p>SALE</p>
          </div>
    <img src={logo} alt="" />
      </div>
    <MdShoppingCart className="text-white text-[23px]" />
    </div>
    <hr  className="text-gray-400 w-full h-[1px]  "/>
    <h1 className="text-center text-white  py-[60px] text-[30px]">PRODUCTS</h1>
  </div>
  <ProductsMain />
  <Footer />
  </>
 )
}