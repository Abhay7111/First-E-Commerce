import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full flex items-center justify-between font-medium py-5'>
        <div className="logo">Gaama.</div>
        <ul className='hidden sm:flex gap-5 text-sm'>
            <NavLink to={`/`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before`}>Home</NavLink>
            <NavLink to={`/about`}  className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before`}>about</NavLink>
            <NavLink to={`/collection`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before`}>collection</NavLink>
            <NavLink to={`/contact`} className={({isActive}) =>` ${isActive ? 'if-css-active' : ''} relative hvr-css-before`}>contact</NavLink>
        </ul>
    </div>
  )
}

export default Nav