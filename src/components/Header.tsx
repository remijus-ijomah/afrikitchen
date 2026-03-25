import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const itemCount = useSelector((state) => state.cart.itemCount);

  return (
    <header className='bg-black z-10 top-0 p-4 fixed w-full h-[10vh]'>
       <div className="sm:mx-20 flex justify-between items-center">
        
       <div className='flex'>
       <Link to={"/"} className='text-2xl text-white'>Eat<span className='font-bold'>ry</span></Link>
       
       <div className='hidden lg:flex items-center p-1 ml-3 mt-1 text-[15px] bg-gray-200 rounded-full h-10'>
            <p className='bg-black text-white rounded-full p-1'>Delivery</p>
            <p className='p-1'>Pickup </p>
        </div>
       </div>
        <Link to={"/cart"} className='relative text-white font-bold'>
        <span>Cart</span>{itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs">{itemCount}</span>
        )}
        </Link>
       </div>
    </header>
  )
}

export default Header;