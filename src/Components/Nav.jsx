import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full flex items-center justify-between font-medium py-5'>
        <div className="logo">Gaama.</div>
        <ul className='hidden sm:flex gap-5 text-sm'>
            <NavLink to={`/`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before px-1`}>Home</NavLink>
            <NavLink to={`/about`}  className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before px-1`}>about</NavLink>
            <NavLink to={`/collection`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before px-1`}>collection</NavLink>
            <NavLink to={`/contact`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before px-1`}>contact</NavLink>
        </ul>
    </div>
  )
}

export default Nav