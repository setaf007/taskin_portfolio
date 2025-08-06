import React from 'react'
import { BsHexagon } from "react-icons/bs";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src='images/HexaPic.png' alt='Taskin'
        className='max-h-[450px] w-auto'>
        </img>
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <BsHexagon className='md:h-[90%] sm:h-[120%] min-h-[400px] 
            w-auto text-cyan opacity-50 blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </div>
  )
}

export default HeroPic