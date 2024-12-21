
import CustomersCard from "./customers/customers";
import CountDown from "./countDown/countDown";
import { Link } from "react-router-dom";
import headphone from "../../assets/headphone.png"
import Bestaudio from "./bestaudio";
import ProductList from "./productList";



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
    <ProductList />
    <Bestaudio />
    {/* happy customers div  */}
    <div className=" flex-col items-center gap-[30px] hidden">
      <h1 className="text-[27px] text-black font-bold leading-10 ">OUR HAPPY CUSTOMERS</h1>
      {customers.map((customer, index) =>(
        <CustomersCard  key={index}name={customer.name} text={customer.text} />
      ))}
    </div>
     <CountDown />
    </>
  );
}

export default Main;
