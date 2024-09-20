import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useCart } from "../../context"; 

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

  return (
    <>
      <div className="bg-black border-none py-[20px]">
        <div className="flex items-center justify-between px-[14px] py-[10px]">
          <div className="flex justify-between w-[67%] items-center">
            {hamburger ? (
              <VscChromeClose className="text-white" onClick={handleHamburger} />
            ) : (
              <RxHamburgerMenu className="text-white" onClick={handleHamburger} />
            )}

            {/* Hamburger menu items */}
            <div className={`${
                hamburger ? "flex flex-col mt-4" : "hidden"
              } absolute top-[40px] left-1 bg-black text-white p-4 gap-3 z-10`}>
              <Link to="/">HOME</Link>
              <Link to="/products">PRODUCTS</Link>
              <p>FEEDBACK</p>
              <p>SALE</p>
            </div>

            <img src={logo} alt="Logo" />
          </div>

          {/* Shopping Cart with total items */}
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
}; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
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
          <button className="w-full bg-[#D87D4A] h-[48px] text-white mt-[15px] rounded-sm cursor-pointer hover:bg-">checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )}
</div>

        </div>
      </div>
      <hr className="text-gray-400 w-full h-[1px]" />
    </>
  );
}
