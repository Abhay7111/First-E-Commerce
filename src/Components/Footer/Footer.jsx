import React from 'react'
import Lstr from '../dgn/Lstr'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full flex sm:flex-row flex-col items-center min-h-screen border-t-2 border-zinc-500'>
        <div className=' h-fit sm:h-screen flex flex-col items-start justify-between sm:border-r sm:border-b-0 border-b border-zinc-400 w-full sm:w-[30%] p-5'>
            <h2 className='uppercase w-[70%] text-xl font-medium pb-10'>The heart, soul, and creativity behind the exceptional accessories at prasa</h2>
            <div className='w-full flex items-center justify-center scale-75 py-10'>
            <Lstr/>
            </div>
            <p className='opacity-70 sm:pb-10 w-[95%] text-center sm:w-[90%] pt-10'>Curating a collection of stylish, high-quality accessories that help you express your unique personality.</p>
        </div>
        <div className=' h-fit sm:h-screen sm:w-[70%] p-5 w-full flex flex-col'>
            <div className='h-[35vh] sm:h-1/2 w-full flex flex-col sm:flex-row p-5 items-start justify-between'>
                <ul className='flex gap-20'>
                    <ul>
                        <NavLink className={`px-2`} to={`/collection`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Collections</li></NavLink>
                        <NavLink className={`px-2`} to={`/about`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>About</li></NavLink>
                        <NavLink className={`px-2`} to={`/product`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Product</li></NavLink>
                        <NavLink className={`px-2`} to={`/faq`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Faq</li></NavLink>
                    </ul>
                    <ul>
                        <NavLink className={`px-2`} to={`payments`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Payments</li></NavLink>
                        <NavLink className={`px-2`} to={`/support`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Support</li></NavLink>
                        <NavLink className={`px-2`} to={`/terms`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Terms</li></NavLink>
                        <NavLink className={`px-2`} to={`/privacy`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 leading-none list-disc font-medium text-sm uppercase'>Privacy</li></NavLink>
                    </ul>
                </ul>
                <ul className='flex items-start justify-end flex-col'>
                    <p className='uppercase text-xl font-semibold'>Contact</p>
                    <NavLink className={`px-2`} to={`https://maps.app.goo.gl/8aAN9v6YhciND1Gg6`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 my-1'>Delhi, Aya Nagar</li></NavLink>
                    <NavLink className={`px-2`} to={`tel:7408638739`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 my-1'>(+91) 740 863 8739</li ></NavLink>
                </ul>
            </div>
            <div className='text-[25vw] sm:text-[20vw] uppercase font-semibold w-full text-center relative sm:py-0 py-10'>Prasa. <span className='absolute scale-75 -top-1/2 sm:-top-0 right-0'><Lstr/></span></div>
        </div>
    </div>
  )
}

export default Footer