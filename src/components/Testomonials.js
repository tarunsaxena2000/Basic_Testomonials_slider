import React, { useState } from 'react';
import Card from './Card';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";


const Testomonials = (props) => {
  const data = props.data;

     const [index,setIndex] = useState(0);
     
   function leftHandler(){
            if(index-1 < 0){
                setIndex(data.length - 1)
            }
            else{
                setIndex(index-1)
            }
   }

   function rightHandler(){
               if(index +1>=data.length){
                     setIndex(0)
               }
               else{
                    setIndex(index+1)
               }
   }

   function surpiseHandler(){

        const surp = Math.floor(Math.random()*data.length)
        setIndex(surp);
   }
  

  return (
    <div  className='w-[85vw]  md:w-[700px]  bg-white flex  flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
       

        
        <Card  data={data[index]} />


        <div className='flex text-3xl mt-9 text-violet-400 gap-3 font-bold mx-auto'>

      <button  onClick={leftHandler}  className='cursor-pointer hover:text-violet-500'  
      >
      <SlArrowLeft></SlArrowLeft>
      </button>


       <button  onClick={rightHandler} className='cursor-pointer hover:text-violet-500'
         >
       <SlArrowRight></SlArrowRight>
       </button>

      </div>

      <div>
        <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 mt-5 rounded-md font-bold text-white text-lg  ' 
          onClick={surpiseHandler}>Surprise me</button>
      </div>

    </div>
  );
};

export default Testomonials;
