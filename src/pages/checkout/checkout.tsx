import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import cartBack from "../../assets/cart/cart.png";
import cartIcon from "../../assets/cart/Icons.png";
import mastercard from "../../assets/cart/Mastercard.png";
import arrowCart from "../../assets/cart/arrow.png";
import { useCart } from "../../context";
import { useFormik } from "formik";
import { validation } from "../../utils/validationSchema";
import { useState } from "react";
import Popup from "../../components/popup/popup";
import emailjs from "@emailjs/browser"



const initialValues = {
  name: "",
  phonenumber: "",
  email: "",
  adress: "",
  zipcode: "",
  city: "", 
  country: "",
  cardnumber: "0000 0000 0000 0000",
  expirydate: "",
  cvc: "",
};

export default function CheckOut() {
  const [checkbox, setCheckbox] = useState(false)
  const { cartItems }: any = useCart();
  const shipping = 50;
  const vat = 1000;
  const total = Number(
    cartItems
      .reduce(
        (
          total: number,
          item: { product: { price: number }; quantity: number }
        ) => total + item.product.price * item.quantity,
        0
      )
      .toFixed(2)
  );
  const grandTotal = total + shipping + vat;

  console.log("Total:", total);
  console.log("Grand Total:", grandTotal);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const handlechange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, "").slice(0, 16);
    formik.setFieldValue("cardnumber", onlyNumbers);
  };
  const formattedCardNumber = formik.values.cardnumber
  .padEnd(16, "0")
  .replace(/(\d{4})(?=\d)/g, "$1 ");
  const { handleBlur, handleChange, handleSubmit, values,errors } = formik;

  const checkInputs = () => {
    if (Object.keys(errors).length > 0 || Object.values(values).some((value) => typeof value === "string" && value.trim() === "")) {
      setCheckbox(false);
    } else {
      setCheckbox(true);
      const form = document.querySelector('form');
      if (form) {
        emailjs.sendForm('service_ezaabqi', 'template_sz5q1pc', form, 'ZDeT81yuxK4tD9JRr')
          .then(response => {
            console.log("Success:", response);
            // Optionally show a success popup here
          })
          .catch(error => {
            console.log("Error:", error);
          });
      }
    }
  };
  
  
  
  console.log(values, "values")
  console.log(errors, "erros")
  return (
    <>
      <Header  />
      <Link to="/" className="text-[15px] text-gray-400 font-normal mt-[25px] px-[25px] ">
        Go Back
      </Link>
      <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center mt-[20px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] bg-white px-[27px] py-[25px]">
        <p className="w-[280px] text-[28px] font-semibold">CHECKOUT</p>
          <p className="text-[#D87D4A] text-[13px] font-bold mt-[10px]">
            Billing details
          </p>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[12px] font-bold">Name</p>
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Name..."
                className={`border-[1px]  ${errors.name ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[12px] font-bold">Email Address</p>
              <input
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter Your Email..."
                className={`border-[1px]  ${errors.email ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold">Phone Number</p>
            <input
              value={values.phonenumber}
              name="phonenumber"
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder="Enter Your Phone Number..."
              className={`border-[1px]  ${errors.phonenumber ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
            />
          </div>
        </form>
        <form className="flex flex-col gap-[15px] bg-white px-[27px] py-[25px]">
          <p className="text-[#D87D4A] text-[13px] font-bold mt-[40px] text-start">
            shipping info
          </p>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold">Address</p>
            <input
              value={values.adress}
              name="adress"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Your Address"
              className={`border-[1px]  ${errors.adress ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[12px] font-bold">Zip Code</p>
              <input
                value={values.zipcode}
                name="zipcode"
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="Enter Your Zip Code..."
                className={`border-[1px]  ${errors.zipcode ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[12px] font-bold">City</p>
              <input
                 value={values.city}
                 name="city"
                 onChange={handleChange}
                 onBlur={handleBlur}
                type="text"
                placeholder="Enter Your City..."
                className={`border-[1px]  ${errors.city ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold">Country</p>
            <input
              value={values.country}
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Your Country..."
              className={`border-[1px]  ${errors.country ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
            />
          </div>
        </form>
        <div className="flex flex-col items-center gap-[30px] bg-white px-[27px] py-[25px]">
          <div className="flex flex-col gap-[25px]">
            <p className="text-[#D87D4A] text-[13px] font-bold mt-[40px] text-start">
              payment details
            </p>
            <input
              type="number"
              value={values.cardnumber}
              name="cardnumber"
              onChange={handlechange}
              onBlur={handleBlur}
              placeholder="Card  Number"
              className={`border-[1px]  ${errors.cardnumber ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[280px] pl-[10px]`}
            />
            <div className="flex gap-[26px]">
              <input
                type="number"
                value={values.expirydate}
                name="expirydate"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Exp.Date"
                className={`border-[1px]   ${errors.expirydate ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[127px] pl-[10px]`}
              />
              <input
                type="number"
                value={values.cvc}
                name="cvc"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="CVC"
                className={`border-[1px]   ${errors.cvc ? "border-red-500" : "border-[#CFCFCF]"}  border-solid rounded h-[46px] w-[127px] pl-[10px]`}
              />
            </div>
          </div>

          {/* card details */}
          <div className="relative">
            <img src={cartBack} alt="" />
            <img src={cartIcon} alt="" className="absolute top-3 left-4" />
            <img
              src={mastercard}
              alt=""
              className="absolute bottom-3 right-3"
            />
            <img src={arrowCart} alt="" className="absolute top-0 right-10" />
            <img src={arrowCart} alt="" className="absolute top-0 left-16" />
            <p className="absolute bottom-10 left-7 text-white text-[17px]">
              {formattedCardNumber}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  w-[334px] bg-white px-[27px] py-[25px] mt-[40px]  ">
      <div className="flex flex-col items-center justify-center">
        {cartItems.length > 0 ? (
          <>
            <p className="w-[334px] px-[27px] pb-[25px] text-[18px] font-semibold">summary</p>
            {cartItems.map(
              (
                item: {
                  product: {
                    [x: string]: string;
                    url: any | undefined;
                    name: any | number | boolean;
                  };
                  quantity: string | number | boolean | null | undefined;
                },
                index: null | undefined
              ) => (
                <div
                  key={index}
                  className="flex flex-col justify-between mb-[15px] w-[334px] px-[27px] "
                >
                  <div className="flex  gap-[10px] items-center justify-between">
                    <div className="flex justify-start gap-[12px] ">
                      <img
                        src={item.product.url}
                        alt=""
                        className="w-[64px] h-[64px] rounded-[3px]"
                      />
                      <div className="flex-col">
                        <p className="text-[15px] w-[90px] font-semibold">
                          {item.product.name}
                        </p>
                        <p className=" text-[15px] text-gray-600">${item.product.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <p className="text-bold text-[15px] text-gray-600 ">x{item.quantity}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </>
        ) : (
          ""
        )}
        {cartItems.length>0 ?
         <div className="flex flex-col  w-[280px] gap-[15px]">
         <div className="flex flex-col gap-[10px]">
         <div className="flex justify-between w-full">
           <p className="text-gray-500">TOTAL</p>
           <p className="text-[17px] font-semibold">${total}</p>
         </div>
         <div className="flex justify-between">
           <p className="text-gray-500">SHIPPING</p>
           <p className="text-[17px] font-semibold">${shipping}</p>
         </div>
         <div className="flex justify-between">
           <p className="text-gray-500">VAT (INCLUDED)</p>
           <p className="text-[17px] font-semibold">${vat}</p>
         </div>
         </div>
         <div className="flex justify-between">
           <p className="text-gray-500">GRAND TOTAL</p>
           <p className="text-[17px] font-semibold">${grandTotal}</p>
         </div>
         <button onClick={checkInputs}  className="w-[279px] h-[48px] bg-[#D87D4A] text-white mt-[15px]">CONTINUE & PAY</button>
       </div>:<p className="text-gray-500">products is empty</p>}
      </div>
      </div>
      </div>
      <Footer />
      {checkbox && <Popup />}
    </>
  );
}
