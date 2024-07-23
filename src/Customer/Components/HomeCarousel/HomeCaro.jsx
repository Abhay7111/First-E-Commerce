import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCaroData } from './HomeCaroData';
import 'react-alice-carousel/lib/alice-carousel.css';

function HomeCaro() {
  return (
    <>
        <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={HomeCaroData.map((item, index) => <img className='h-[80vh] cursor-pointer w-full object-contain' src={item.image} />)}
    />
    </>
  )
}

export default HomeCaro