import React from 'react'
import Cards from './Cards';


function Itineraries() {
  return (
    <div className='h-[557px] w-[1220px] flex flex-col  gap-[56px] '>
      <div className='h-[41px] w-[1220px] flex  items-center justify-center'>
        <p className='text-[34px] font-bold'>Explore Our Curated Travel Itineraries</p>
      </div>
      <Cards />
    </div>
  )
}

export default Itineraries;