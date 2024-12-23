import { Link } from "react-router-dom"
import yx1 from "../../assets/products/yx1.png"
import Header from "../../components/header/header"
import ProductList from "../../components/main/productList"
import Bestaudio from "../../components/main/bestaudio"
import Footer from "../../components/footer/footer"

export default function Earphones() {
  const earphones = [

    {
      id: 6,
      url: yx1,
      name: "YX1 WIRELESS EARPHONES",
      description:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      price:599,
      features:"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
    },
  ]
  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center gap-[70px] mb-[120px]">
    <div className="w-full bg-black h-[80px] flex items-center justify-center">
      <h1 className="text-white text-[28px] font-bold mb-[38px]'">EARPHONES</h1>
    </div>
    {earphones.map((res)=>(
    <div key={res.id} className="flex flex-col justify-center items-center gap-[20px]">
        <img src={res.url} alt={res.name} />
        <h2 className="text-[35px] w-[317px] text-center text-black">{res.name}</h2>
        <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400">{res.description}</p>
        <Link
            to={`/products/${res.id}`}
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
  )
}
