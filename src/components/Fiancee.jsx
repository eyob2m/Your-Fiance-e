import React, { useState } from 'react'
import duck from './XOsX.gif'
import p from './87151883.jpg'
export default function Fiancee() {
    const [ggjjo,sggjjo] = useState(true)
    const [ggo,sggo] = useState(false)
    function myf() {
       sggjjo(false)
       setInterval(()=>{
        sggo(true)
    },4000)
    }
  return (
    <>

    { !ggo ? ggjjo ? ( <> 
   <p className='bg-white'> Choose one of  fiance-e Character</p>
    <div className='flex'>
<p onClick={myf} className='bg-red-400 p-2 hover:translate-x-5 duration-200 cursor-pointer hover:bg-cyan-400'>គួរឱ្យស្អប់
អាក្រក់។
អាក្រក់។
អស្ចារ្យ។
ដ៏អាក្រក់។   </p> <span><pre>      Or        </pre>  </span>  <p onClick={myf} className='bg-red-400 p-2 hover:-translate-x-5 duration-200 cursor-pointer hover:bg-cyan-400'>    ស្អាត សមរម្យ សង្ហា គួរឱ្យស្រលាញ់ និងស្អាត</p>
    </div> </>
    ) : (
    <div>
      <div className='flex flex-col justify-center absolute bg-white top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%]  items-center'>
       
        <p>Loading ...</p>
        <img className='h-full' src={duck} alt=""/> 
      </div>  </div>  )

  :    <div>
      <div className='flex flex-col justify-center absolute bg-white top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%]  items-center'>
       
        <p>Official Single</p>
        <img className='h-full' src={p} alt=""/> 
      </div>  </div>  }  </>
  )
}
