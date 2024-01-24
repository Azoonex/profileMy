"use clinet"
import { workData } from "@/src/constant"
import Image from "next/image"

function SubTitle() {
  
  return (
    <div className="">
      <div className="absolute backdrop-filter rounded-full shadow-stone-300 shadow-2xl backdrop-blur-lg top-0 right-0 w-1/2 h-1/2  bg-black ">
      <h3 className="text-yellow-50 uppercase m-3 -translate-x-28">
        {workData.label_1}
      </h3>
      <ul className="m-3">
        {
          workData.skill.map((item)=>(
            <li key={item.id} className=" text-yellow-50 group rounded-3xl cursor-help p-2 underline underline-offset-4 w-full hover:bg-red-500 hover:text-white">
              {item.link} <span className="opacity-0  group-hover:opacity-100">{item.ispn}</span>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default SubTitle


export const Card = ()=>{
  return(
    <div className="flex gap-20 rounded-md bg-white z-20">
      <div className="relative flex justify-center h-[450px] w-[250px] shadow-xl shadow-amber-100 border-4 border-black rounded-2xl bg-gray-50">
        <span className="border border-black bg-black w-28 h-5 rounded-br-xl rounded-bl-xl"></span>

        <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
        <span className="absolute -right-2 top-44  border-4 border-black h-24 rounded-md"></span>
        <Image
        src="/my-pc.jpg"
        alt="not fond"
        width={500}
        height={500}
        />
      </div>
    </div>
  )
}
