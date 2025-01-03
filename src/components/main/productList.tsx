import headphones2 from "../../assets/headphones2.png";
import speakers from "../../assets/speakers.png";
import earphones from "../../assets/earphones.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";





export default function ProductList() {
  const animationVariantsleft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },  
  };

  const animationVariantsRight ={
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },  
  }
  
  const animationCenter ={
    hidden: { opacity: 0  },
    visible: { opacity: 1}, 
  }


  return (
    <div className="flex  flex-col items-center justify-center gap-[68px] mb-[120px] md:flex-row md:gap-[0px] md:justify-between md:px-[40px] md:w-full md:mt-[60px] lg:w-[1110px] lg:gap-[30px] lg:px-[0px]">
      <motion.div
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      variants={animationVariantsleft}
      >
      <Link
       to="/headphones" className="flex flex-col justify-center items-center  hover:lg:shadow-[6px_6px_0px_1px_#1e1e1e] transition-all duration-300  bg-[#F1F1F1] w-[327px] rounded-[8px] md:w-[223px] md:h-[165px] lg:w-[350px] lg:h-[204px]"> 
        <img src={headphones2} alt="headphone" className="mt-[-52px] mb-[36px]" />
        <h2 className="text-[15px] font-bold pb-[17px]">HEADPHONES</h2>
        <div className="flex  items-center pb-[32px] gap-[12px]">
          shop
          <IoIosArrowForward className="text-[#D87D4A] mt-[4px]" />
        </div>
      </Link>
       </motion.div>

       <motion.div 
       initial="hidden"
       whileInView="visible" 
       viewport={{ once: true, amount: 0.2 }}
       transition={{ duration: 2.0 }} 
       variants={animationCenter}
       >
      <Link to="/speakers" className="flex flex-col justify-center items-center bg-[#F1F1F1]  hover:lg:shadow-[6px_6px_0px_1px_#1e1e1e] transition-all duration-300  w-[327px] rounded-[8px] md:w-[223px] md:h-[165px] lg:w-[350px] lg:h-[204px]">
        <img src={speakers} alt="speaker"  className="mt-[-52px] mb-[36px]" />
        <h2 className="text-[15px] font-bold pb-[17px]">SPEAKERS</h2>
        <div className="flex  items-center pb-[32px] gap-[12px]">
          shop 
          <IoIosArrowForward   className="text-[#D87D4A] mt-[4px]" />
        </div>
      </Link>
       </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={animationVariantsRight}
       >
      <Link to = "/earphones" className="flex flex-col justify-center items-center bg-[#F1F1F1]   hover:lg:shadow-[6px_6px_0px_1px_#1e1e1e] transition-all duration-300 w-[327px] rounded-[8px] md:w-[223px] md:h-[165px] lg:w-[350px] lg:h-[204px]">
        <img src={earphones} alt="earphones"  className="mt-[-52px] mb-[36px]" />
        <h2 className="text-[15px] font-bold pb-[17px]">EARPHONES</h2>
        <div className="flex  items-center pb-[32px] gap-[12px]">
          shop
          <IoIosArrowForward  className="text-[#D87D4A] mt-[4px]"  />
        </div>
      </Link>
       </motion.div>
    </div>
  )
}

