import CountDown from "./countDown/countDown";
import { Link } from "react-router-dom";
import headphone from "../../assets/headphone.png"
import ProductList from "./productList";
import oval  from "../../assets/oval.png"
import zx9 from "../../assets/zx9.png"
import zx7bg from "../../assets/zx7bg.png"
import earbg from "../../assets/earbg.png"
import tabletOval from "../../assets/tablet/tablet ovla.png"
import tabletBox from "../../assets/tablet/tablet box.png"
import tabletear from "../../assets/tablet/tabletear.png"
import tabletHeadphone from "../../assets/tablet/tabletheadphone.png"
import desktopzk9 from "../../assets/desktop/desktop zx9.png"
import desktopOvla from "../../assets/desktop/desktopOval.png"
import desktopzx7 from  "../../assets/desktop/desktop.png"
import desktopzx1 from "../../assets/desktop/desktopzx1.png"
import desktopx9 from "../../assets/desktop/desktopx9.png"
import { motion } from "framer-motion";
import Bestaudio from "./bestaudio";
 

const Main: React.FC = () => {

  const animationVariantsleft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },  
  };
  const animationVariantsright = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <>
  <div className="relative bg-black mb-[90px] lg:flex lg:flex-row-reverse ">
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
  <img src={headphone} alt="" className="w-full md:hidden" />
  <img src={tabletHeadphone} alt="" className="hidden md:block w-full lg:hidden" />
  <img src={desktopx9} alt="" className="hidden lg:block" />
    </motion.div>
  <motion.div
  initial={{ x: "-100%" }}
  animate={{ x: "0%" }}
  transition={{ duration: 1, ease: "easeOut" }}
   className="absolute inset-0 flex flex-col items-center justify-center text-center lg:items-start lg:pl-[165px]">
    <p className="text-gray-500 tracking-[10px] mt-[30px] md:text-[14px] md:font-normal md:opacity-[0.5] md:pb-[24px]">NEW PRODUCT</p>
    <h2 className="text-white text-3xl font-bold w-[328px] leading-10 text-[36px] pt-[8px] pb-[6px] md:text-[56px] md:w-[396px] md:leading-[58px] lg:text-start">
      XX99 Mark II Headphones
    </h2>
    <p className="text-gray-300 mt-4 w-[328px] leading-[27px] font-normal md:w-[349px] md:text-[15px] lg:text-start">
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    <Link to="/products/1"
    className="group relative mt-6 px- py-2 pt-[12px] w-[160px] h-[48px] font-medium text-slate-100 transition-colors duration-[400ms] hover:text-[#FBAF85]"
    >
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#FBAF85] transition-all duration-100 group-hover:w-full" />
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#FBAF85] transition-all delay-100 duration-100 group-hover:h-full" />
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#FBAF85] transition-all delay-200 duration-100 group-hover:w-full" />
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#FBAF85] transition-all delay-300 duration-100 group-hover:h-full" />
      See Product</Link>
    </motion.div>
   </div>
   <div className="flex flex-col justify-center items-center">
    <ProductList />

    <div className="flex flex-col gap-[30px] justify-center items-center mb-[70px]">

    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1 }}
    variants={animationVariantsleft}

    className="bg-[#D87D4A] w-[327px] flex flex-col relative justify-center items-center rounded-[8px] md:w-[689px] lg:w-[1110px] lg:h-[560px] " >
      <img src={oval} alt=""  className="absolute top-0 md:hidden" />
      <img src={tabletOval} alt="" className="hidden md:flex absolute top-0 lg:hidden" />
      <img src={desktopOvla} alt="" className="hidden lg:flex absolute top-0 left-0" />
      <div className=" z-10 flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:w-full">
        <img src={zx9} alt="" className="mt-[55px] mb-[32px] md:mb-[64px] lg:hidden" />
        <img src={desktopzk9} alt="" className="hidden lg:block mb-[-95px]" />
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:mb-[-60px]">
          <h1 className="text-white  text-[36px] font-bold text-center pb-[24px] md:text-[56px] lg:text-start">
            ZX9 <br />
          SPEAKER
          </h1>
          <p className="text-white opacity-[0.75] text-center pb-[24px] md:w-[349px] lg:text-start">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={`/products/4`}>
          <button className="rounded-2xl border-2  border-black text-white bg-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          See Product
          </button>
          </Link>
        </div>
      </div>
      </motion.div>

    <motion.div 
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.3 }}
     transition={{ duration: 1 }}
     variants={animationVariantsright}
    className="rounded-[8px] relative">
      <img src={zx7bg} alt=""  className="rounded-[8px] md:hidden"/>
      <img src={tabletBox} alt="" className=" hidden md:block rounded-[8px] lg:hidden" />
      <img src={desktopzx7} alt="" className="hidden lg:block rounded-[8px]" />
      <div className="absolute top-[0] flex flex-col justify-center h-full pl-[30px]">
        <h1 className="text-[28px] font-bold pb-[26px]">ZX7 SPEAKER</h1>
        <Link to={`/products/5`}>
        <button className="rounded-2xl border-2  border-black text-white bg-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          See Product
          </button>
        </Link>
      </div>
    </motion.div>

    <div className="md:flex md:w-[689px] justify-between lg:w-[1110px] ">
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1 }}
       variants={animationVariantsleft}
      >
      <img src={earbg} alt="" className="rounded-[8px] md:hidden" />
      <img src={tabletear} alt="" className=" rounded-[8px] hidden md:block lg:hidden" />
      <img src={desktopzx1} alt="" className="hidden lg:block rounded-[8px]" />
      </motion.div>
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1 }}
       variants={animationVariantsright}
       className="bg-[#F1F1F1] rounded-[8px] mt-[20px] px-[24px] pt-[40px] md:h-[340px] md:w-[339px] md:mt-[0px] md:flex md:flex-col md:justify-center md:px-[41px] lg:w-[540px] lg:h-[320px] lg:px-[95px]">
        <h1 className="text-[28px] text-black font-bold pb-[32px] tracking-[2px] ">YX1 EARPHONES</h1>
        <Link to={`/products/6`}>
        <button className="rounded-2xl border-2  border-black text-white bg-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          See Product
          </button>
        </Link>
      </motion.div>
    </div>
    </div>
    <Bestaudio />
     <CountDown />
</div>
    </>
  );
}

export default Main;
