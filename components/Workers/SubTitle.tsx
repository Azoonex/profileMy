"use clinet"
import { workData } from "@/constant"

function SubTitle() {
  
  return (
    <div className="">
      <h2 className="text-yellow-50">
        {workData.label_1}
      </h2>
      <h3 className="text-yellow-50">
        {workData.label_2}
      </h3>
    </div>
  )
}

export default SubTitle
