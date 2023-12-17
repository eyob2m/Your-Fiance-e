import React, { useState } from "react";

export default function Name() {
  function ch() {
    alert('You are outdated')
    alert('behind the times')
    alert("vintage like fine wine.")
    alert("out-of-date")
    alert("living history book.")

  }
  const [name , setname] = useState("")
  const [nam , setnam] = useState(false)
  function typing(e){

    if(e.target.value.length == 0) {
        setname('')
    }

if(e.target.value.length == 1) {
    setname('B')
}
if(e.target.value.length == 2) {
    setname('BL')
}
if(e.target.value.length == 3) {
    setname('BLO')
}
if(e.target.value.length == 4) {
    setname('BLOB')
}
if(e.target.value.length == 5) {
    setname('BLOBF')
}
if(e.target.value.length == 6) {
    setname('BLOBFI')
}
if(e.target.value.length == 7) {
    setname('BLOBFIS')
}
if(e.target.value.length >= 8 ) {
    setname('BLOBFISH')
    setnam(true)


}
  }




  return (
    <div className="flex  flex-col mine w-[100vh]  mx-auto">
      <p className="text-xl bg-white p-2 my-3">What is Your Name ?</p>
     {nam ?  ( 
      
      
      <input
        type="text"
        value={""}
      placeholder="BLOBFISH"

        id="namei"
        onChange={typing}
        className="h-[100px] placeholder:text-black hover:outline-none text-3xl bg-cyan-300 focus:outline-none"
      />) : ( <input
        type="text"
        value={name}
        placeholder="Type here . . ."
        contentEditable
        id="namei"
        onChange={typing}
        className="h-[100px] hover:outline-none text-3xl bg-cyan-300 focus:outline-none"
      />)
     

      }
      <div className=" p-2 cursor-default  bg-blue-300 flex justify-center items-center my-10 flex-col gap-3 mx-auto">
    <p className="text-xl">Which Gender Are you attracted to?</p><div className='flex'>
    <div>
<input  type="radio" name="male" onChange={ch}   id="male" />
<label className=' text-3xl' htmlFor="male">5-19</label> <br />
<input type="radio" name="male" id="female" onChange={ch}  />
<label className=' text-3xl' htmlFor="male">20-93</label>
  </div>
  
</div>
  </div>






    </div>
  );
}
