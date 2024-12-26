import { Link, useParams } from 'react-router-dom';
import headphone1 from '../../assets/products/headphone1.png'
import headphone2 from "../../assets/products/headhone2.png"
import whiteheadphone from "../../assets/products/white headphone.png"
import zx9 from "../../assets/products/zx9.png"
import zx7 from "../../assets/products/zx7.png"
import yx1 from "../../assets/products/yx1.png"
import { TiMinus, TiPlus } from 'react-icons/ti';
import { useState } from 'react';
import Header from '../../components/header/header';
import { useCart } from '../../context';
import Footer from '../../components/footer/footer';

const AboutHeadphone1 = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  
  const products = [
    {
      id: 1,
      url: headphone1,
      new: "NEW PRODUCT",
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: 2999,
      features:"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    },
    {
      id: 2,
      url: headphone2,
      name: "XX99 Mark I Headphones",
      description:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      price: 1750,
      features:"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
    },
    {
      id: 3,
      url: whiteheadphone,
      name: "XX59 Headphones",
      description:"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      price: 899,
      features:"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
    },
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

    {
      id: 6,
      url: yx1,
      name: "YX1 WIRELESS EARPHONES",
      description:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      price:599,
      features:"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
    },
  
  ];

  const product = products.find((p) => p.id === Number(id));

  const [number, setNumber]=useState(0);

 const plus = () =>{
  setNumber(number+1);
 }
 const minus = () =>{
  if(number ===0){
    return number
  }
  setNumber(number-1)
 }
  const { addToCartsItems, cartItems }:any = useCart();
  console.log(cartItems)

  const handleAddToCart = () => {
    if (product && number > 0) {
      addToCartsItems(product, number);
      setNumber(0);
    }
    
  };



  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <>
    <Header  />
    <div className='flex flex-col gap-[10px]  mt-[40px] lg:w-full lg:justify-center'>
      <Link to="/products" className='px-[6%] text-15px text-gray-500 font-normal mb-[14px]'>Go Back</Link>
      <div className='flex flex-col items-center gap-[38px] md:flex-row md:justify-center lg:w-full lg:justify-around lg:mt-[40px] lg:mb-[40px] lg:px-[6%]'>
      <img src={product.url} alt={product.name}  className='lg:w-[530px] lg:h-[540px]'/>
      <div className='flex flex-col gap-[18px]'>
      <p className='text-[14px] text-[#D87D4A] tracking-[10px]'>{product.new}</p>
      <h1 className='text-[28px] w-[317px] leading-2 font-bold  text-black'>{product.name}</h1>
      <p className='text-[15px] w-[317px]  leading-6 font-normal text-gray-400'>{product.description}</p>
      <p className='text-[18px] text-black font-bold'>${product.price}</p>
      {/* add cart */}
      <div className='flex  gap-[30px]'>
        <div className='flex items-center bg-[#F1F1F1] gap-[22px] py-[8px] w-[120px]  justify-center'>
        <TiMinus  className='text-[12px] text-gray-500' onClick={minus}/>
          <p>{number}</p>
          <TiPlus className='text-[12px] text-gray-500'onClick={plus} />
        </div>
        <button className='w-[160px] h-[48px] bg-[#D87D4A] text-white' onClick={handleAddToCart}>ADD TO CART</button>
      </div>
      </div>
      </div>
      {/* features */}
      <h1 className='text-[36px] text-black font-bold mt-[60px] px-[6%]'>FEATURES</h1>
      <p className='text-[15px] text-gray-500 px-[6%]  font-normal mb-[25px]'>{product.features}</p>
    </div>
    <Footer />
    </>
  );
};

export default AboutHeadphone1;
