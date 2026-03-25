import React from 'react'
import { soups } from '../data';

const colors= ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500', 'bg-black', 'bg-orange-500']

const Hero = () => {
  return (
    <>  
    {/**Hero Section */}
    <div className='mt-[10vh] w-full h-[28.5vh] lg:h-[65.4vh] bg-black'>
         <div className="relative">
            {/**Overlay */}
            <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center">
            <div className="max-w-[1366px] lg:w-[1366px] mx-auto">  
                <h1 className="px-4 lg:px-0 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold pt-3 md:pt-0">Best in <span className='text-orange-600'> Organic</span></h1>
                <h1 className="px-4 lg:px-0 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-600">Food</span> Delivery</h1>
                <div className="flex flex-col md:flex-row items-center">
                <p className="md:w-1/2 text-center font-bold text-2xl md:text-left py-4 md:py-0 animate-scroll">Try our daily <span className="text-orange-600">freshly, cooked and tasty</span> delicacies now!!!</p>
                <p className="w-[380px] md:w-1/2">
                <ul className=" overflow-x-auto flex items-center justify-start md:justify-end space-x-1 py-1 md:py-0 animate-[slideOut_10s_linear_infinite]">
                {soups.map((soup, index) =>( 
                        <li key={soup.id} className={` ${colors[index % colors.length]} text-white hover:text-black cursor-pointer md:border md:border-black px-[2px] md:hover:border-white rounded-md  font-semibold py-0 whitespace-nowrap md:whitespace-nowrap`}>{soup}</li>
                    ))}
                </ul>
                </p>
                </div>
            </div>
            </div>
            <img src="./img/hero.jpg" alt="nkwobi" className='w-full max-h-[500px] object-cover' />
         </div>
    </div>
    {/**HeroCard Section */}
    <div className="max-w-[1366px] mx-auto grid md:grid-cols-3 gap-6 p-4 lg:p-0 py-4 lg:py-8 mt-8">
        <div className="rounded-xl relative">
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-10'>Eat In or Takeaway</p>
                <p className='px-2'>Always Available</p>
                <button className='border-white rounded-md bg-white text-black mx-2 px-2 absolute bottom-14 hover:bg-green-600 hover:text-white animate-pulse'>Order Now</button>
            </div>
            <img src="./img/bobozi.jpg" alt="" className='max-h-[200px] md:max-h-[260px] w-full object-cover rounded-xl' />
        </div>
        {/**Card */}
        <div className='rounded-xl relative'>
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-10'>New Delicacies</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white rounded-md bg-white text-black mx-2 px-2 absolute bottom-14 hover:bg-green-700 hover:text-white'>Order Now</button>
            </div>
            <img src="./img/variety1.jpg" alt="" className='max-h-[200px] md:max-h-[260px] w-full object-cover rounded-xl' />
        </div>
        {/**Card */}
        <div className='rounded-xl relative'>
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-10'>Assorted Pepper-soup For You</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white rounded-md bg-white text-black mx-2 px-2 absolute bottom-14 hover:bg-green-700 hover:text-white'>Order Now</button>
            </div>
            <img src="./img/peppersoup.jpg" alt="" className='max-h-[200px] md:max-h-[260px] w-full object-cover rounded-xl' />
        </div>
    </div>
    </>
  )
}

export default Hero;