import { useState } from 'react'
import Header from './components/Header'
import Gender from './components/Gender'
import Fiancee from './components/Fiancee'
import Name from './components/Name'
import Footer from './components/Footer'
import img from './components/8.webp'

function App() {
  const [ggo,sggo] = useState(true)
  const [ggjo,sggjo] = useState(30)
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
         <button className=' hover:self-start mx-5 self-end bg-transparent'>X</button>
        <p>Ad will remove in {ggjo} seconds</p>
        <img className='h-full' src={img} alt=""/> 
      </div>  </div> ) : (
       
  



      <div className='md:rotate-90 w-[100vh] absolute h-full'>
       <Header />
       <Name />
       <Gender />
       <Fiancee />
       <Footer />
    </div> ) }
    </>
  )

}

export default App
