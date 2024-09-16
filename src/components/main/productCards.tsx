import { IoIosArrowForward } from "react-icons/io";
interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image }) => {
  return (
    <div className="text-center w-[327px] flex items-center flex-col bg-[#F1F1F1] rounded-md ">
      <img src={image} alt={name} className="mt-[-50px]" />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <div className="flex items-center justify-center mt-2 text-gray-500 cursor-pointer pb-[13px]">
        <p className="mr-2">Shop</p>
        <IoIosArrowForward  className="text-[#D87D4A]"/>
      </div>
    </div>
  );
}

export default ProductCard;
