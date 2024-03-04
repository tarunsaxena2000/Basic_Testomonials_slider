import React from 'react';
import Testomonials from './components/Testomonials';
import reviews from './data';  // Double-check the path

function App() {
 
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
       <div className='text-center'>
      <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400  h-[4px] w-1/5 mt-1 mx-auto'></div>
      <div>
        <Testomonials data={reviews} />
      </div>

      </div>
    </div>
  );
}

export default App;
