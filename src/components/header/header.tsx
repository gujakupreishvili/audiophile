import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useCart } from "../../context"; 
import { AnimatePresence,  motion } from "framer-motion";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [showCart, setShowCart] = useState(false); 
  const { cartItems, setCartItems }: any = useCart(); 

  const totalItemsInCart = cartItems.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

  function handleHamburger() {
    setHamburger(!hamburger);
  }

  function toggleCart() {
    setShowCart(!showCart);
  }
  const removeFromCart = (id: string) => {
    setCartItems((prev: any[]) => prev.filter((item) => item.product.id !== id));
    console.log("washla")
  };

   const menVars = {
      initial :{
        scaleY : 0
      },
      animate : {
        scaleY : 1,
        transition:{
          duration : 0.5,
          ease:[0.22, 0 , 0.39, 0]

        }
      },
      exit : {
        scaleY : 0,
        transition:{
          duration : 0.5,
          ease:[0.37, 0 , 0.63, 1]

        }
      }
  }
  const linkVars = {
    initial: {
      y:"30vh",
      transition:{
        ease:[0.22, 0 , 0.39, 0],
        duration : 0.5,
      }
    },
    open:{
      y:0,
      transition:{
        ease:[0, 0.55 , 0.45, 1],
        duration : 0.7,
      }
    },
  }

  const containerVars = {
    initial:{
      transition:{
        staggerChildren: 0.09,
        staggerDirection:-1,
      }
    },
    open:{
      transition:{
        delayChildren:0.3,
        staggerChildren: 0.03,
        staggerDirection:1
      }
    }

  }

  return (
    <>
      <motion.div 
      className="bg-black border-none py-[20px]"
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-[14px] py-[10px] md:px-[39px] md:py-[30px] lg:px-[165px]">
          <div className="flex justify-between w-[67%] items-center md:justify-start md:gap-[42px] ">
            {hamburger ? (
              <VscChromeClose className="text-white" onClick={handleHamburger} />
            ) : (
              <RxHamburgerMenu className="text-white" onClick={handleHamburger} />
            )}
            <AnimatePresence>
  {hamburger && (
    <motion.div
      variants={menVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-0 w-full h-screen bg-black text-white p-4 z-50 origin-top"
    >
      <VscChromeClose
        className="text-white absolute left-5 top-[35px]"
        onClick={handleHamburger}
      />
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <div className="overflow-hidden">
          <motion.div variants={linkVars} className="">
            <Link to="/">HOME</Link>
          </motion.div>

          <motion.div variants={linkVars} className=" mt-[30px]">
            <Link to="/products">All PRODUCTS</Link>
          </motion.div>

          <motion.div variants={linkVars} className=" mt-[30px]">
            <Link to="/headphones">HEADPHONES</Link>
          </motion.div>

          <motion.div variants={linkVars} className="mt-[30px]">
            <Link to="/speakers">SPEAKERS</Link>
          </motion.div>

          <motion.div variants={linkVars} className=" mt-[30px]">
            <Link to="/earphones">EARPHONES</Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
            </AnimatePresence>
            <img src={logo} alt="Logo" />
          </div>
          <div className="relative">
          <MdShoppingCart className="text-white text-[23px]" onClick={toggleCart} />
          {totalItemsInCart > 0 && (
          <span className="absolute top-[-8px] right-[-8px] bg-red-600 text-white text-xs rounded-full px-[6px] py-[2px]">
          {totalItemsInCart}
          </span>
      )}
        {showCart && (
        <div className="absolute bg-white text-black shadow-lg w-[330px] px-[14px] py-[15px] rounded right-[0px] top-[40px] z-50">
        {cartItems.length > 0 ? (
        <>
          {cartItems.map((item: { product: {
            [x: string]: string; url: any | undefined; name: any | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: any | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
          }; 
          quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className="flex flex-col justify-between mb-[15px]">
              <div className="flex gap-[10px] items-center justify-between">
                <img src={item.product.url} alt="" className="w-[64px] h-[64px] rounded-[3px]" />
                <div className="flex-col">
                  <p className="text-[15px] w-[90px]">{item.product.name}</p>
                  <p>${item.product.price}</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <p className="text-bold">{item.quantity}</p>
                  <button className="w-[60px] h-[32px] bg-[#F1F1F1] cursor-pointer text-[14px]" onClick={()=>removeFromCart(item.product.id)}>remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t pt-2 flex justify-between">
            <p className="text-[15px] font-bold text-gray-500">TOTAL</p>
            <p className="text-[18px]">
              ${cartItems.reduce((total: number, item: { product: { price: number; }; quantity: number; }) => total + (item.product.price * item.quantity), 0).toFixed(2)}
            </p>
          </div>
          
          <Link to="/checkout"
                className={`
                  w-full  h-[48px] lg:rounded-full mt-[15px] rounded-sm cursor-pointer  flex items-center justify-center
                  text-slate-500
                  shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                  
                  transition-all
          
                  hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                  hover:text-[#D87D4A]
              `}
          >
               Checkout
          </Link>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )}
</div>
        </div>
      </motion.div>
      <hr className="text-gray-400 w-full h-[1px]" />
    </>
  );
}
