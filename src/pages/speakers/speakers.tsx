import zx9 from "../../assets/products/zx9.png"
import zx7 from "../../assets/products/zx7.png"
import Header from "../../components/header/header"
import { Link } from "react-router-dom"
import ProductList from "../../components/main/productList"
import Bestaudio from "../../components/main/bestaudio"
import Footer from "../../components/footer/footer"

export default function Speakers() {
  const speakers= [
    {
      id: 4,
      url: zx9,
      new: "NEW PRODUCT",
      name: "ZX9 SPEAKER",
      description:"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      price:4500,
      features:"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
    },
    
    {
      id: 5,
      url: zx7,
      name: "ZX7 SPEAKER",
      description:"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.",
      price:3500,
      features:"Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
    },
  ]
  return (
    <>
   <Header />
  <div className="flex flex-col justify-center items-center gap-[70px] mb-[120px]">
    <div className="w-full bg-black h-[80px] md:h-[140px] flex items-center justify-center">
      <h1 className="text-white text-[28px] font-bold mb-[38px]'">SPEAKERS</h1>
    </div>
    {speakers.map((res,index)=>(
        <div key={res.id}  className={`flex flex-col justify-center items-center gap-[20px] md:w-[689px] lg:w-[1110px] lg:justify-between ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}>
        <img src={res.url} alt={res.name} className="md:w-[589px] md:h-[500px] lg:w-[540px] lg:h-[560px] "   />
        <div>
        <p className="text-[14px] text-[#D87D4A] tracking-[10px] md:tex-[15px] md:mt-[32px lg:text-start]">{res.new}</p>
        <h2 className="text-[35px] w-[317px] text-center text-black md:text-[40px] md:w-[340px] lg:text-start">{res.name}</h2>
        <p className="text-[15px] w-[317px] text-center leading-6 font-normal text-gray-400  md:w-[340px] md:my-[15px]  lg:text-start">{res.description}</p>
        <Link
            to={`/products/${res.id}`}
            className="bg-[#D87D4A] w-[160px] h-[48px] text-white cursor-pointer hover:bg-[#fbaf85] transition-all text-center flex items-center justify-center  lg:mt-[30px]"
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
  )
}
