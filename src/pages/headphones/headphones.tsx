import headphone1 from "../../assets/products/headphone1.png"
import headphone2 from '../../assets/products/headhone2.png';
import whiteheadphone from "../../assets/products/white headphone.png"
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import ProductList from "../../components/main/productList";
import Bestaudio from "../../components/main/bestaudio";
import Footer from "../../components/footer/footer";

export default function Headphones() {
  const headphones = [
    {
      id: 1,
      url: headphone1,
      new: 'NEW PRODUCT',
      name: 'XX99 Mark II Headphones',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      price: 2999,
      features:
        'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening...',
    },
    {
      id: 2,
      url: headphone2,
      name: 'XX99 Mark I Headphones',
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      price: 1750,
      features:
        'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise...',
    },
    {
      id: 3,
      url: whiteheadphone,
      name: 'XX59 Headphones',
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones...',
      price: 899,
      features:
        'These headphones have been created from durable, high-quality materials tough enough to take anywhere...',
    },
  ];

  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center gap-[70px] mb-[120px] ">
      <div className="w-full bg-black h-[80px] md:h-[140px] flex items-center justify-center">
        <h1 className="text-white text-[28px] font-bold mb-[38px] md:text-[38px] md:mt-[20px] ">Headphones</h1>
      </div>
      {headphones.map((headphone,index) => (
        <div key={headphone.id}   className={`flex flex-col justify-center items-center gap-[20px] md:w-[689px] lg:w-[1110px] lg:justify-be ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}>
          <img src={headphone.url} alt={headphone.name} className="md:w-[589px] md:h-[500px] lg:w-[540px] lg:h-[560px] " />
          <div>
          <p className="text-[14px] text-[#D87D4A] tracking-[10px] md:tex-[15px] lg:text-start">{headphone.new}</p>
          <h2 className="text-[35px] w-[317px] text-center text-black md:text-[40px] md:w-[340px] lg:text-start">{headphone.name}</h2>
          <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400 md:w-[340px] lg:text-start">{headphone.description}</p>
          <Link
          to={`/products/${headphone.id}`}
          className="bg-[#D87D4A] w-[160px] h-[48px] text-white cursor-pointer px-6 py-2 font-medium  hover:bg-[#fbaf85] text-center flex items-center justify-center  transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] lg:mt-[30px]"
        >
          See Product
        </Link>
          </div>
        </div>
      ))}
    <ProductList />
    <Bestaudio />
    </div>
    <Footer />
    </>
  );
}
