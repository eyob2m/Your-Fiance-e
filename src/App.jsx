import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { useState } from 'react'
import Header from './components/Header'
import Gender from './components/Gender'
import Fiancee from './components/Fiancee'
import Name from './components/Name'
import Footer from './components/Footer'
import img from './components/8.webp'
import i from './components/pngwing.com (10).png'

function App() {
  const [ggo,sggo] = useState(true)

  const [ggjo,sggjo] = useState(15)
  setInterval(()=>{
      sggo(false)
  },60000)


  
  setTimeout(()=>{
    sggjo(ggjo-1)
  },2000)
  return (
  <>
{ ggo ? ( 


<div>
      <div className='flex flex-col justify-center absolute bg-white top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%]  items-center'>
         <button className=' hover:opacity-0 mx-5 self-end p-3 bg-transparent'><AiOutlineCloseCircle className=" text-3xl" /></button>
        <p>Ad  {ggjo} seconds</p>
        <img className='h-full' src={img} alt=""/> 
      </div>  </div> ) : (
       
  


<div className="">

      <div className=' mx-[25%] md:rotate-180 absolute h-fit '>
       <Header />
       <Name />
       <Gender />
       <Fiancee />
       <div className="h-full flex flex-col justify-center items-center "> <img className=" long  bg-green-400 w-[200px] h-[300000px]" src={i} alt=""/></div>
       <Footer />
       
    </div></div> ) }
    </>
  )

}

export default App
