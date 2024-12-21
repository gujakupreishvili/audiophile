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
    <div className="flex flex-col justify-center items-center gap-[70px] mb-[120px]">
      <div className="w-full bg-black h-[80px] flex items-center justify-center">
        <h1 className="text-white text-[28px] font-bold mb-[38px]'">Headphones</h1>
      </div>
      {headphones.map((headphone) => (
        <div key={headphone.id} className="flex flex-col justify-center items-center gap-[20px]">
          <img src={headphone.url} alt={headphone.name} />
          <p className="text-[14px] text-[#D87D4A] tracking-[10px]">{headphone.new}</p>
          <h2 className="text-[35px] w-[317px] text-center text-black">{headphone.name}</h2>
          <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400">{headphone.description}</p>
          <Link
              to={`/products/${headphone.id}`}
              className="bg-[#D87D4A] w-[160px] h-[48px] text-white cursor-pointer hover:bg-[#fbaf85] transition-all text-center pt-[12px]"
            >
              See Product
            </Link>
        </div>
      ))}
    </div>
    <ProductList />
    <Bestaudio />
    <Footer />
    </>
  );
}
