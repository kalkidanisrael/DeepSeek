import React from 'react'
import Image from 'next/image'
import {assets} from '../assets/assets'
import { useState } from 'react'
const PromptBox = ({isLoading,setIsLoading}) => {
    const [prompt,setPrompt]=useState(' ')
  return (
   <form className={`w-full ${false?"max-w-3x1":"max-w-2x1"} bg-[#404045] p-4 rounded-3x1 mt-4 transition-all`}> 
   <textarea
   className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'
   rows={2}
   onChange={(e)=>setPrompt(e.target.value ) } value={prompt}
   placeholder='Message DeepSeek' required/>
   <div className='flex items-center justify-between text-sm'>
    <div className='flex items-center gap-2'>
        <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image src={assets.deepthink_icon} alt=''/>
            DeepThink (R1)
        </p>
        <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image className='h-5' src={assets.deepthink_icon} alt=''/>
            Search
        </p>
    </div>
    <div className='flex items-center gap-2 '>
        <Image src={assets.pin_icon} alt='' className='w-4 cursor-pointer'/>
            <button className={`${prompt? "bg-primary":"bg-[#71717a]"} rounded-full p-2 cursor-pointer`}> 
                <Image src={prompt? assets.arrow_icon:assets.arrow_icon_dull} alt='' className='w-4 cursor-pointer'/>
            </button>
    </div>
   </div>
   </form>
  )
}

export default PromptBox;
