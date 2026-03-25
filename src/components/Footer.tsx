import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12 w-full'>
        <div className="container mx-auto px-4">
            <div className="flex  flex-wrap mx-4">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">

               <img src="/img/logo.png" alt="" className='my-10 h-40 w-60'/>
                <p className="text-sm ">We will always be at your service, eat good and look healthy!!!</p>
                </div>
  
                {/**Heading & Links */}
                <div className="lg:w-3/4 md:w-1/2 w-full px-4 mb-8">
                <div className="flex flex-wrap mx-4">
                <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-4">
                <h2 className="text-lg text-orange-600 font-bold mb-2">Find Our Branches</h2>
                <ul className='text-gray-500'>
                    <li className='mb-1 hover:text-emerald-500'><a href="">1054 R. Dansaba Road #304. <br /> Asaba, 85033 <br /> 080asabakitch</a></li>
                    <li className='mb-1 hover:text-emerald-500'><a href="">2356 M. Ganduza Rd #456. <br /> Abuja, 6750 <br /> 080abujakitch</a></li>
                    <li className='mb-1 hover:text-emerald-500'><a href="">1614 E. Isong St #234. <br />Calabar, 5673 <br /> 080calabarkitch</a></li>
                    <li className='mb-1 hover:text-emerald-500'><a href="">3458 Rumuokolo Rd #1004. <br />Port-harcourt, 1907 <br />080phkitch</a></li>
                    <li className='hover:text-emerald-500'><a href="">1190 CB Adeniyi Rd #1212. <br /> Lagos, 2323 <br /> 080lagkitch</a></li>
                </ul>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-4">
                <h2 className="text-lg text-orange-600 font-bold mb-2">Facilities</h2>
                <span className='text-gray-500'>
                    <p className='mb-1 cursor-pointer hover:text-white'>Chairs & Table</p>
                    <p className='mb-1 cursor-pointer hover:text-white'>Television set</p>
                    <p className='cursor-pointer hover:text-white'>Rest Room</p>
                </span>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-4">
                <h2 className="text-lg text-orange-600 font-bold mb-2">Working Hours</h2>
                <span className='text-gray-500'>
                    <p className=' mb-1 cursor-pointer hover:text-white'>Mondays - Fridays <br className='text-white' /> 09:00 - 22:00</p>
                    <p className='cursor-pointer hover:text-white'>Saturdays & Sundays <br /> 12:00 - 24:00</p>
                    
                </span>
                </div>

                </div>
            </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          <p className='font-bold md:text-[22px] text-orange-500'>&copy; 2024 <b className='text-white'>Eatry.</b> All rights reserved</p>
          <ul className="space-x-4 ">
            <a href="#" className="font-bold  hover:text-emerald-400">Branches</a>
            <a href="#" className="font-bold  hover:text-emerald-400">Instagram</a>
            <a href="#" className="font-bold  hover:text-emerald-400">Youtube</a>
            <a href="#" className="font-bold  hover:text-emerald-400">Staff</a>
          </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer;