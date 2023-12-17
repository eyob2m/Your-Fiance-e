import React, { useState } from 'react'
import img  from './w.jpg'
export default function Gender() {
    const [g,sg] = useState(true)
    const [gg,sgg] = useState(false)
    function male(e) {
        sg(!g)
        sgg(true)
        
    }
    function female(e) {
        sg(!g)
        sgg(true)
    }
  return (
    <div className=" p-2 cursor-default bg-yellow-300 flex justify-center items-center my-10 flex-col gap-3 mx-auto">
    <p className="text-xl">Which Gender Are you attracted to?</p><div className='flex'>
    <div>
<input  type="radio" name="male" onChange={male}   id="male" />
<label className=' text-3xl' htmlFor="male">{g ? "Male" : "Female"}</label> <br />
<input type="radio" name="male" onChange={female}  id="female" />
<label className=' text-3xl' htmlFor="male">{!g ? "Male" : "Female"}</label>
  </div>
  
  { gg && ( <img className=' mx-3 h-[20vh]' src={img} alt=""/> ) }</div>
  </div>



  )
}
