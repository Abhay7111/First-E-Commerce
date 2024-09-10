import React from 'react'
import { NavLink } from 'react-router-dom'
import Lstr from '../dgn/Lstr'
import Squrtlt from '../dgn/squrtlt'

function Home() {
  return (
    <div className=''>
        <div className='w-full overflow-x-hidden flex flex-col h-fit sm:flex-row items-start justify-between px-5'>
            <div className='flex relative flex-col items-start justify-between  pb-10 calc-css-h-full'>
                <h1 className='w-full sm:w-[75%] uppercase relative z-10 font-semibold text-xl mt-10 sm:mt-0'>The heat, soul, and creativity behind the exceptional accessories at prasa</h1>
                <div className='scale-[1.2] z-0 absolute sm:relative top-[200%] -right-[19%] sm:top-auto sm:right-auto overflow-hidden'>
                <Lstr/>
                </div>
            </div>
            <div className='xl:w-[68%] flex flex-col justify-end items-start z-20 relative h-fit '>
                <div className='w-full max-h-full sm:pt-32'>
                    <p className='w-full flex items-center justify-between sm:py-0 py-10'>
                        <p className='opacity-80 sm:w-fit w-[65%]'>Shop now and find the perfect pieces to complete any outfit.</p>
                        <NavLink to={`/shopnow`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-medium list-disc'>shop now</li></NavLink>
                    </p>
                    <img src="https://cdn.pixabay.com/photo/2020/04/22/08/17/portrait-5076529_960_720.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-auto sm:max-h-[90%] object-cover' />
                </div>
            </div>
        </div>
        <div className=' w-full pt-10 h-fit'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between'>
                <h1 className='text-6xl sm:text-9xl text-start px-5 w-full sm:w-fit'>Find the perfect</h1>
                <h2 className='text-4xl sm:text-7xl w-full py-10 sm:pl-0 pl-10 sm:w-fit text-end'>Pieces to match Your style.</h2>
            </div>
            <div className='py-10 w-full h-fit overflow-x-auto'>
                <div className='flex items-center justify-start gap-5 w-fit px-4 sm:px-0'>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2018/01/06/23/43/girl-3066198_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                <div className='w-[80vw] sm:w-[32vw] bg-[#ddddfa] sm:bg-transparent h-96 p-1 flex flex-col items-start justify-between'>
                    <div>
                        <p className='text-xl font-medium'>132 collections</p>
                        <h3 className='text-3xl font-bold uppercase'>Boucles <br /> d'oreilles</h3>
                    </div>
                    <div>
                        <p className='opacity-75'>From delicate studs to statement hoops, <br /> each pair is crafted with precision and care, <br /> ensuring you find the perfect earrings <br /> to express your personal style.</p>
                    <NavLink to={`/collections`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-bold list-disc'>Go to collections</li></NavLink>
                    </div>

                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2017/07/20/15/16/earring-2522608_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                </div>
            </div>
            <div className='py-10 w-full h-fit overflow-x-auto'>
                <div className='flex items-center justify-start gap-5 w-fit px-4 sm:px-0'>
                <div className='w-[80vw] sm:w-[32vw] bg-[#ddddfa] sm:bg-transparent h-96 p-1 flex flex-col items-start justify-between'>
                    <div>
                        <p className='text-xl font-medium'>132 collections</p>
                        <h3 className='text-3xl font-bold uppercase'>Boucles <br /> d'oreilles</h3>
                    </div>
                    <div>
                        <p className='opacity-75'>From delicate studs to statement hoops, <br /> each pair is crafted with precision and care, <br /> ensuring you find the perfect earrings <br /> to express your personal style.</p>
                        <NavLink to={`/collections`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-bold list-disc'>Go to collections</li></NavLink>
                    </div>

                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2019/12/18/13/59/christmas-4704072_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2016/10/04/18/29/cattle-show-1715098_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-full'>
            <div className='flex w-full h-fit py-10 items-start justify-between pl-3 sm:px-5'>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <p className='sm:text-[4vw] text-[9vw] w-full justify-between flex flex-col sm:flex-row uppercase leading-none pr-5 items-center font-semibold relative'><hr className='border-b-2 border-zinc-700 w-full sm:w-80 sm:mb-0 mb-10'/><span>Accessories is not</span> <NavLink to={`/cart`} className='absolute top-2 right-1 sm:relative sm:top-0 sm:right-0'><li className='text-lg list-disc font-bold'>[cart]</li></NavLink></p>
                        <p className='sm:text-[4vw] text-[9vw] font-semibold leading-none uppercase w-full sm:w-fit sm:ml-[10%]'>just add-ons</p>
                        <p className='sm:text-[4vw] text-[9vw] font-semibold leading-none uppercase w-full sm:w-fit sm:ml-[45%]'>it's essential for</p>
                        <p className='sm:text-[4vw] text-[9vw] font-semibold leading-none w-full flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row sm:items-center justify-between uppercase'> <span className='flex flex-col text-sm font-light'><span className='opacity-90'>Total products</span><span className='text-lg font-bold opacity-100'>(365)</span></span> personal style.</p>
                    </div>
            </div>  
            <div className='w-full overflow-x-auto flex items-center justify-start'>
                <div className='w-fit h-96 px-1 sm:px-5 flex items-center justify-start gap-5'>
                    <div className='h-full w-80 p-3 gap-3 flex flex-col items-start justify-end'>
                        <p className='text-sm opacity-80 pr-16'>Our mission is to bring you the latest trends and timeless classics that enhance your individuality. Each piece in our collection is carefully selected its quality, design, and ability to make you feel confident and chic.</p>
                        <NavLink to={`/shopnow`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase font-bold tracking-tighter text-sm list-disc'>shop now</li></NavLink>
                    </div>
                    <div className='h-full w-80 gap-3 flex flex-col p-3'>
                        <p className='w-[60%] font-medium leading-none ml-5 uppercase'>The best materials and craftsmanship.</p>
                        <img src="https://cdn.pixabay.com/photo/2016/06/11/22/43/earring-1451014_1280.jpg" alt="image Not Found" className=' uppercase w-full h-full object-cover text-xl font-bold' />
                    </div>
                    <div className='h-full w-80 gap-3 flex flex-col p-3'>
                        <img src="https://cdn.pixabay.com/photo/2023/10/12/13/35/earrings-8310858_1280.jpg" alt="image Not Found" className=' uppercase w-full h-full object-cover text-xl font-bold' />
                        <p className='w-[50%] font-medium leading-none ml-5 uppercase'>Your satisfaction is our priority.</p>
                    </div>
                    <div className='h-full w-80 gap-3 flex flex-col p-3'>
                        <img src="https://cdn.pixabay.com/photo/2017/05/12/11/30/girl-2306831_1280.jpg" alt="image Not Found" className=' uppercase w-full h-full object-cover text-xl font-bold' />
                    </div>
                    <div className='h-full w-80 gap-3 flex flex-col p-3'>
                        <img src="https://cdn.pixabay.com/photo/2016/12/01/14/39/rose-gold-1875469_1280.jpg" alt="image Not Found" className=' uppercase w-full h-full object-cover text-xl font-bold' />
                        <p className='w-[50%] font-medium leading-none ml-5 uppercase'>Find the perfect</p>
                    </div>
                    <div className='h-full w-80 gap-3 flex flex-col p-3'>
                        <p className='w-[60%] font-medium leading-none ml-5 uppercase'>Pieces to match Your style.</p>
                        <img src="https://cdn.pixabay.com/photo/2017/08/06/15/09/earrings-2593350_1280.jpg" alt="image Not Found" className=' uppercase w-full h-full object-cover object-left text-xl font-bold' />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row py-10 sm:gap-0 gap-10 overflow-x-hidden'>
            <div className='px-5 flex flex-col gap-20 sm:w-[65%]'>
                <div className='flex flex-col gap-5'>
                <h1 className='text-[11vw] sm:text-[6vw] font-semibold leading-none uppercase'>From passion <br /> to personal <br /> style</h1>
                <p className='text-sm sm:text-xl sm:w-[90%] font-medium'>For over 10 years, we've dedicated ourselves to curationg a collection of stylish, high-quality accessories that help you express your unique personality.</p>
                </div>
                <div className=' flex flex-col sm:flex-row gap-5 items-end justify-center'>
                <div className=' relative'>
                <img src="https://cdn.pixabay.com/photo/2013/11/06/09/59/earrings-206363_1280.jpg" alt="image Not Found" className=' uppercase w-full sm:w-80 sm:h-80 h-auto object-cover text-xl font-bold' />
                <div className='sm:size-40 size-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'><Squrtlt/></div>
                    <NavLink to={`/collections`}><li className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[1px] before:w-0 before:transition-all hover:before:left-0 w-fit px-1 leading-none uppercase tracking-tighter text-xs font-bold list-disc'>collections</li></NavLink>
                </div>
                <div className='px-3 flex flex-col items-start w-full gap-3'>
                    <p className='sm:w-96 opacity-80 text-sm'>Each piece in our collection is carefully selected it's quality, design, and ability to make you feel confident and chic.</p>
                    <NavLink to={`/shopnow`}><li className='relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase font-bold tracking-tighter text-sm list-disc'>shop now</li></NavLink>
                </div>
                </div>
            </div>
            <div className='px-5 flex flex-col gap-20 sm:w-[33%] overflow-hidden'>
                <div className='flex relative gap-5 sm:items-end justify-between'>
                    <div className='absolute sm:relative sm:top-0 sm:left-0 top-[30%] -left-[19%] sm:scale-[1.2] scale-[0.8]'>
                    <Lstr/>
                    </div>
                <img src="https://cdn.pixabay.com/photo/2015/11/25/13/48/ear-1062075_1280.jpg" alt="image Not Found" className='relative uppercase w-full sm:w-80 sm:h-80 h-auto object-cover text-xl font-bold' />
                </div>
                <div className=' flex flex-col sm:flex-row gap-5 items-end justify-center'>
                <div className='px-3 flex flex-col items-center justify-center w-full gap-7'>
                    <div className='sm:w-96'>
                        <h1 className='sm:text-2xl font-bold'>10 Years of Expertise</h1>
                        <p className='text-sm opacity-90'>Guarantees a collection of accessories that blend timeless elegance with trends.</p>
                    </div>
                    <div className='sm:w-96'>
                        <h1 className='sm:text-2xl font-bold'>344 Collections</h1>
                        <p className='text-sm opacity-90'>Designed to provide a wide array of styles, ensuring there's somthing for everyone.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home