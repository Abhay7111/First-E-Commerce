import React from 'react'

function Lstr() {
  return (
    <div className='Lstr rounded-full relative flex items-center justify-center size-32'>
        <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-20 bg-css-black absolute'></div>
        <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-20 bg-css-black absolute rotate-45'></div>
        <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-20 bg-css-black absolute rotate-90'></div>
        <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-20 bg-css-black absolute rotate-[135deg]'></div>
        <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7 bg-css-black rounded-full absolute rotate-[135deg]'></div>
    </div>
  )
}

export default Lstr