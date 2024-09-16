import { IoCheckmarkCircle } from "react-icons/io5"

interface customersCom{
  name:string
  text:string
}
const  CustomersCard: React.FC<customersCom>  =({name,text})=>{
  return(
    
    <div className="border-[1px]  border-slate-500 rounded-3 py-[8px] px-[12px]">
      <h4 className="text-[20px] text-black font-normal flex items-center gap-[6px]">{name}<span className="text-green-500"><IoCheckmarkCircle /></span></h4>
      <p className="w-[300px] text-[17px] text-gray-500">
        {text}
      </p>
    </div>
  )
}
export default CustomersCard