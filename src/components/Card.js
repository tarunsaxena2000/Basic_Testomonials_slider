import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"


const Card = (props) => {
      let review = props.data
  return (
    <div className='flex  flex-col  md:relative '>

        <div  className='absolute top-[-7rem] mx-auto z-[10]' >
            <img  className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}  />
              <div  className='aspect-square rounded-full w-[140px] h-[140px] z-[-10] top-[-6px] left-[10px] absolute  bg-violet-500'>

              </div>
        </div>

         <div  className='text-center mt-7'>
            <p className='capitalize  text-2-xl tracking-wider font-bold '>{review.name}</p>
            <p className='text-violet-300 text-sm uppercase'>{review.job}</p>
         </div>

      
        <div  className='text-violet-400  mx-auto mt-5'>
        <FaQuoteLeft></FaQuoteLeft>
        </div>
         
   <div  className='text-slate-500 text-center mt-4'>
        {review.text}
   </div>

     <div   className='text-violet-400  mx-auto mt-5'>
     <FaQuoteRight></FaQuoteRight>
     </div>

      
    
    </div>
  )
}

export default Card