import headphone1 from "../../../assets/products/headphone1.png";
import headphone2 from "../../../assets/products/headhone2.png";
import whiteheadphone from "../../../assets/products/white headphone.png";
import zx9 from "../../../assets/products/zx9.png";
import zx7 from "../../../assets/products/zx7.png";
import yx1 from "../../../assets/products/yx1.png";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsMain() {
  interface Product {
    id: number;
    url: string; 
    new?: string;
    name: string;
    description: string;
  }

  const products: Product[] = [
    {
      id: 1,
      url: headphone1,
      new: "NEW PRODUCT",
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      id: 2,
      url: headphone2,
      name: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      id: 3,
      url: whiteheadphone,
      name: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
    {
      id: 4,
      url: zx9,
      new: "NEW PRODUCT",
      name: "ZX9 SPEAKER",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      id: 5,
      url: zx7,
      name: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.",
    },
    {
      id: 6,
      url: yx1,
      name: "YX1 WIRELESS EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextIndex = (index: number) => (index + 1) % products.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 2 : (prevIndex - 2 + products.length) % products.length
    );
  };

  const secondIndex = getNextIndex(currentIndex);

  return (
    <div className="flex flex-col items-center gap-[25px]">
      <div className="flex flex-col justify-center gap-[30px]">
        
        <div className="flex flex-col items-center mb-8 gap-[15px]">
          <img
            src={products[currentIndex].url}
            alt={products[currentIndex].name}
            className="w-[327px]"
          />
          <div className="flex flex-col items-center gap-[20px]">
            {products[currentIndex].new && (
              <p className="text-[14px] text-[#D87D4A] tracking-[10px]">
                {products[currentIndex].new}
              </p>
            )}
            <h2 className="text-[35px] w-[317px] text-center text-black">
              {products[currentIndex].name}
            </h2>
            <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400">
              {products[currentIndex].description}
            </p>
            <Link
              to={`/products/${products[currentIndex].id}`}
              className="bg-[#D87D4A] w-[160px] h-[48px] text-white cursor-pointer hover:bg-[#fbaf85] transition-all text-center pt-[12px]"
            >
              See Product
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 gap-[15px]">
          <img
            src={products[secondIndex].url}
            alt={products[secondIndex].name}
            className="w-[327px]"
          />
          <div className="flex flex-col items-center gap-[20px]">
            {products[secondIndex].new && (
              <p className="text-[14px] text-[#D87D4A] tracking-[10px]">
                {products[secondIndex].new}
              </p>
            )}
            <h2 className="text-[35px] w-[317px] text-center text-black">
              {products[secondIndex].name}
            </h2>
            <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400">
              {products[secondIndex].description}
            </p>
            <Link
              to={`/products/${products[secondIndex].id}`}
              className="bg-[#D87D4A] w-[160px] h-[48px] text-white cursor-pointer hover:bg-[#fbaf85] transition-all text-center pt-[12px]"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-[15px]">
        <BiSolidLeftArrow
          className="text-black cursor-pointer hover:text-[#D87D4A] transition-all"
          onClick={handlePrev}
        />
        <BiSolidRightArrow
          className="text-black cursor-pointer hover:text-[#D87D4A] transition-all"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
