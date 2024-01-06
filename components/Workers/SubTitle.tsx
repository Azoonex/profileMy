"use clinet"
import { workData } from "@/constant"

function SubTitle() {
  
  return (
    <div className="">
      {
      workData.map(item=>(
          <h2 className="text-yellow-50">
           {item.label}
          </h2>

      ))}
     
    </div>
  )
}

export default SubTitle
