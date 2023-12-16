import React, { useState } from "react";

export default function Name() {
  const alp = {
    A: "诶",
    B: "比",
    C: "西",
    D: "迪",
    E: "伊",
    F: "艾弗",
    G: "吉",
    H: "艾尺",
    I: "艾",
    J: "杰",
    K: "开",
    L: "艾勒",
    M: "艾马",
    N: "艾娜",
    O: "哦",
    P: "屁",
    Q: "吉吾",
    R: "艾儿",
    S: "艾丝",
    T: "提",
    U: "伊吾",
    V: "维",
    W: "豆贝尔维",
    X: "艾克斯",
    Y: "吾艾",
    Z: "贼德",
  };
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
      <p className="text-xl">What is Your Name ?</p>
     {nam ?  ( <input
        type="text"
        value={""}
      placeholder="BLOBFISH"

        id="namei"
        onChange={typing}
        className="h-[100px] placeholder:text-black hover:outline-none text-3xl bg-red-900 focus:outline-none"
      />) : ( <input
        type="text"
        value={name}
        placeholder="Type here . . ."
        contentEditable
        id="namei"
        onChange={typing}
        className="h-[100px] hover:outline-none text-3xl bg-cyan-300 focus:outline-none"
      />)}
    </div>
  );
}
