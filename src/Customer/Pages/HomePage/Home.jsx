import React from 'react'
import HomeCaro from '../../Components/HomeCarousel/HomeCaro'

function Home() {
  return (
    <div>Home
     <div>
      <div className='absolute z-0 w-[100vw] h-[80vh]'><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2016/11/21/18/14/wall-1846965_1280.jpg" /></div>
      <HomeCaro/>
      </div>
    </div>
  )
}

export default Home