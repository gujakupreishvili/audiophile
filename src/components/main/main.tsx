import CustomersCard from "./customers/customers";
import CountDown from "./countDown/countDown";
import { Link } from "react-router-dom";
import headphone from "../../assets/headphone.png"
import Bestaudio from "./bestaudio";
import ProductList from "./productList";
import oval  from "../../assets/oval.png"
import zx9 from "../../assets/zx9.png"
import zx7bg from "../../assets/zx7bg.png"
import earbg from "../../assets/earbg.png"



const Main: React.FC = () => {

  interface customer{
    name: string,
    text: string

  }
  const customers :customer[]=[
    {name: "Sarah M.", text:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
    {name:"Alex.K", text:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly The stabled"},
    {name: "Luka.S",text:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not ."}

  ]

  return (
    <>
  <div className="relative bg-black mb-[90px]">
  <img src={headphone} alt="" className="w-full" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <p className="text-gray-500 tracking-[10px]">NEW PRODUCT</p>
    <h2 className="text-white text-3xl font-bold w-[328px] leading-10 text-[36px] pt-[8px] pb-[6px]">
      XX99 Mark II Headphones
    </h2>
    <p className="text-gray-300 mt-4 w-[328px] leading-[27px] font-normal">
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    <Link to="" className="mt-6 px-4 py-2 w-[160px] h-[48px] bg-[#D87D4A] hover:bg-[#FBAF85] hover:cursor-pointer  text-white rounded">See Product</Link>
  </div>
</div>
<div className="flex flex-col justify-center items-center">
    <ProductList />

    <div className="flex flex-col gap-[30px] justify-center items-center mb-[70px]">

    <div className="bg-[#D87D4A] w-[327px] flex flex-col relative justify-center items-center rounded-[8px] " >
      <img src={oval} alt=""  className="absolute top-0" />
      <div className=" z-10 flex flex-col justify-center items-center">
        <img src={zx9} alt="" className="mt-[55px] mb-[32px]" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white  text-[36px] font-bold text-center pb-[24px]">
            ZX9 <br />
          SPEAKER
          </h1>
          <p className="text-white opacity-[0.75] text-center pb-[24px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={`/products/4`}>
          <button className="w-[160px] h-[48px] bg-black text-white mb-[55px]">See Product</button>
          </Link>
        </div>
      </div>
      </div>

    <div className="rounded-[8px] relative">
      <img src={zx7bg} alt=""  className="rounded-[8px]"/>
      <div className="absolute top-[0] flex flex-col justify-center h-full pl-[30px]">
        <h1 className="text-[28px] font-bold pb-[26px]">ZX7 SPEAKER</h1>
        <Link to={`/products/5`}>
        <button className="w-[160px] h-[48px] border-[1px] border-black">See Product</button>
        </Link>
      </div>
    </div>

    <div>
      <img src={earbg} alt="" className="rounded-[8px]" />
      <div className="bg-[#F1F1F1] rounded-[8px] mt-[20px] px-[24px] pt-[40px]">
        <h1 className="text-[28px] text-black font-bold pb-[32px] tracking-[2px] ">YX1 EARPHONES</h1>
        <Link to={`/products/6`}>
        
        <button className="w-[160px] h-[48px] border-[1px] border-black mb-[41px]">See Product</button>
        </Link>
      </div>
    </div>
    </div>



    <Bestaudio />
    {/* happy customers div  */}
    <div className=" flex-col items-center gap-[30px] hidden">
      <h1 className="text-[27px] text-black font-bold leading-10 ">OUR HAPPY CUSTOMERS</h1>
      {customers.map((customer, index) =>(
        <CustomersCard  key={index}name={customer.name} text={customer.text} />
      ))}
    </div>
     <CountDown />
</div>
    </>
  );
}

export default Main;
