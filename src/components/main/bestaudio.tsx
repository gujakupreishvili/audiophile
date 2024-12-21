import humanMobile from "../../assets/human mobile.png"

export default function Bestaudio() {
  return (
    <div className="flex flex-col items-center gap-[20px] mb-[60px]">
    <img src={humanMobile} alt="" />
    <div className=" flex flex-col items-center gap-[20px] ">
      <h1 className="text-[37px] leading-[38px] font-bold w-[327px] text-center">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
      <p className=" text-[15px] leading-[25px] font-normal w-[327px] text-center text-gray-500"> 
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
