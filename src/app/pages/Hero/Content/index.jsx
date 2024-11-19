import React from 'react';
import Header from './Header';
import Display from './Display';
import Itineraries from './Itineraries';
import Path from './Path';
import Creator from './Creator';
import Influence from './Influencers';
import Init from './Init';
import FAQ from "./Questions"

function Content() {
  return (
    <div
      className="w-full max-w-[1200px] h-auto min-h-[2045px]  opacity-100  mx-auto p-4 flex flex-col gap-[36px]"
    >
      <Header />
      <div className='h-[1897px] w-[1200px] bg-black rounded-[36px] flex flex-col gap-[35px] '>
      <Display />
      <Itineraries />
      <div className=' text-center text-[34px] font-bold '>
        <h1>How to list?</h1>
      </div>
      <Path />
      </div>
      <Creator />
      <Influence />
      <Init />
      <FAQ />
    </div>
  )
}

export default Content;