import humanMobile from "../../assets/human mobile.png"
import humanTablet from "../../assets/tablet/tabletHuman.png"
import humanDesktop from "../../assets/desktop/desktophuman.png"
export default function Bestaudio() {
  return (
    <div className="flex flex-col items-center gap-[20px] mb-[60px] w-[88%] lg:flex-row-reverse lg:w-[1110px] lg:justify-between">
    <img src={humanMobile} alt="" className="md:hidden rounded-[8px]" />
    <img src={humanTablet} alt="" className="hidden md:block rounded-[8px] lg:hidden" />
    <img src={humanDesktop} alt="" className="hidden lg:block rounded-[8px]" />
    <div className=" flex flex-col items-center gap-[20px]  md:gap-[0px] lg:items-start  ">
      <h1 className="text-[37px] leading-[38px] font-bold w-[327px] text-center md:text-[40px] md:w-[503px] md:py-[35px] lg:text-start lg:w-[380px]  ">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
      <p className=" text-[15px] leading-[25px] font-normal w-[327px] md:w-[573px] md:text-center text-center text-gray-500 lg:text-start lg:w-[400px]"> 
        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
         earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of our products. Stop by our
           store to meet some of the fantastic people who make Audiophile the best place to buy your
            portable audio equipment.
      </p>
    </div>
  </div>
  )
}
