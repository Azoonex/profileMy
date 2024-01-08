"use clinet"
import { workData } from "@/src/constant"

function SubTitle() {
  
  return (
    <div className="">
      <h3 className="text-yellow-50  hover:underline underline-offset-8 ">
        {workData.label_1}
      </h3>
      <h4 className="text-yellow-50 mt-4 text-center">
        {workData.label_2}
      </h4>
    </div>
  )
}

export default SubTitle


export const Card = ()=>{
  return(
    <div className="flex gap-20 rounded-md bg-white z-20">

      <div
        className="flex items-center  justify-center mx-auto flex-col relative max-w-[350px] w-full bg-gradient-to-br from-white to-[#c7fee9] min-h-[160px] rounded-3xl p-6 text-[#151a41]">
        <div className="absolute -z-10 bg-yellow-50 h-[120%] w-[80%] rounded-xl"></div>

        <h1 className="text-lg font-extrabold">Daniel Joffrion</h1>
        <p className="block mt-1 mb-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="#151a41" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          Atlanta, Ga
        </p>
        <button className="rounded-full bg-[#151a41] text-white px-5 py-2 font-light text-sm my-8 transition-all duration-150 ease-in hover:bg-[#c6c9df] hover:text-[#151a41]">
          View Content
        </button>
      </div>
    </div>
  )
}
