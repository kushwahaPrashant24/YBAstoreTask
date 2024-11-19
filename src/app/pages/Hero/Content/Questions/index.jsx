import React from 'react'
import Question from './Question'

export default function index() {
  return (
    <div className='w-[1171px] h-[582px] flex gap-[36px] justify-center items-center '>
    <div className='w-[516px] h-[164px] flex flex-col gap-6'  >
        <div className='w-[516px] h-[82px] text-[34px] font-bold text-[#00DC82] '>FREQUENTLY ASKED QUESTIONS</div>
        <div className='w-[516px] h-[66px]  text-[18px] font-bold'>Quick answers to questions you may have. can&apos;t find what you're looking for?
        Check out our full documentation</div>
    </div>
    <Question />
    

    </div>
  )
}
