import ProductsMain from "./productsMain/main";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function ProductsPage(){
 return(
       <>  
    <Header  />
    <h1 className="text-center text-white  py-[60px] text-[30px] bg-black mb-[70px]"> All PRODUCTS</h1>
  <ProductsMain />
  <Footer />
  </>
 )
}