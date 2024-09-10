import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [visible, setVisible] = useState(false);
  return (
    <div className='w-full flex items-center justify-between font-medium py-5'>
        <div className="logo text-[5vw] sm:text-3xl">Gaama.</div>
        <div className='flex gap-10 font-normal'>
          <ul className='hidden sm:flex gap-5 text-sm text-zinc-300'>
            <NavLink to={`/`} className={({isActive}) =>` ${isActive ? 'if-css-active text-zinc-100' : 'hover:scale-[1.1]'} relative transition-all hvr-css-before px-1`}>Home</NavLink>
            <NavLink to={`/about`}  className={({isActive}) =>` ${isActive ? 'if-css-active text-zinc-100' : 'hover:scale-[1.1]'} transition-all relative hvr-css-before px-1`}>about</NavLink>
            <NavLink to={`/collection`} className={({isActive}) =>` ${isActive ? 'if-css-active text-zinc-100' : 'hover:scale-[1.1]'} transition-all relative hvr-css-before px-1`}>collection</NavLink>
            <NavLink to={`/contact`} className={({isActive}) =>` ${isActive ? 'if-css-active text-zinc-100' : 'hover:scale-[1.1]'} transition-all relative hvr-css-before px-1`}>contact</NavLink>
          </ul>
        </div>
          <div className='flex gap-5 items-center justify-center'>
            <NavLink to={`/`}><i className="ri-search-2-line w-5" title='Search'></i></NavLink>
            <div className='group relative'>
              <i className="ri-group-line cursor-pointer w-5" title='Profile'></i>
              <div className='group-hover:block hidden absolute right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
                  <NavLink to={`/myprofile`} className={`hover:text-black cursor-pointer`}>My Profile</NavLink>
                  <NavLink to={`/`} className={`hover:text-black cursor-pointer`}>Orders</NavLink>
                  <NavLink to={`/`} className={`hover:text-black cursor-pointer`}>Logout</NavLink>
                </div>
              </div>
            </div>
            <NavLink to={`/cart`} className={`relative`}>
              <i className="ri-shopping-cart-2-line w-5" title='Cart'></i>
              <p className='text-[9px] p-0.5 bg-black font-light text-center rounded-full size-4 absolute -top-1 -right-2 overflow-hidden'>{`12`}</p>
            </NavLink>
            <i onClick={()=>setVisible(true)} class="ri-menu-4-fill text-2xl sm:hidden cursor-pointer"></i>
          </div>
        <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? 'w-full ' : 'w-0'}`}>
          <div className='w-full mt-5 flex items-center justify-end pr-5 pb-5'>
          <i onClick={()=>setVisible(false)} className="ri-close-fill text-3xl text-gray-700 font-semibold cursor-pointer"></i>
          </div>
          <ul className='flex flex-col gap-5 text-sm w-full px-3 text-zinc-600 relative'>
            <NavLink to={`/`} className={({isActive}) =>` ${isActive ? 'text-zinc-800 bg-zinc-200 py-5 px-3 text-base' : 'text-zinc-800 hover:bg-zinc-100 py-5 px-3'} relative transition-all`}>Home</NavLink>
            <NavLink to={`/about`}  className={({isActive}) =>` ${isActive ? 'text-zinc-800 bg-zinc-200 py-5 px-3 text-base' : 'text-zinc-800 hover:bg-zinc-100 py-5 px-3'} transition-all relative`}>about</NavLink>
            <NavLink to={`/collection`} className={({isActive}) =>` ${isActive ? 'text-zinc-800 bg-zinc-200 py-5 px-3 text-base' : 'text-zinc-800 hover:bg-zinc-100 py-5 px-3'} transition-all relative`}>collection</NavLink>
            <NavLink to={`/contact`} className={({isActive}) =>` ${isActive ? 'text-zinc-800 bg-zinc-200 py-5 px-3 text-base' : 'text-zinc-800 hover:bg-zinc-100 py-5 px-3'} transition-all relative`}>contact</NavLink>
          </ul>
        </div>
    </div>
  )
}
export default Nav