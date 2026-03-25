import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../Reducers/cartSlice';
import Checkout from './Checkout';


const OrderSummary = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector((state) => state.cart.itemCount);
    const {cartItems, totalAmount} = useSelector((state) => state.cart);
  
    return (
    <> 
    <div className='pt-10 bg-slate-800 h-full'>
    <div className='max-w-[1366px] bg-blue-800  border-none border rounded-md mt-10 mx-auto'>
       <h2 className="text-3xl font-bold  mt-4 mb-4 text-center">Order Summary</h2>
       <div className='bg-blue-950 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto max-w-[1400px]'>
       <div className="m-2 lg:m-8"> 
       {cartItems.length === 0 ? (<p className='font-bold text-2xl'>No Order yet</p>):(
        <>  
         <div  className='border p-4 mb-2 rounded-md bg-blue-700'>  
         <h2 className="text-2xl text-white font-bold mb-4">Your Order Summary:  <b className='text-black font-normal'>You have {itemCount} Items in Cart</b> </h2>  
         <p className="text-gray-400 font-semibold">Cross-check your items and select a suitable Shipping method</p>
        </div>
        <div className='bg-blue-950 p-2 border rounded'>
            {cartItems.map((item) => ( 
                <>  
               <div key={item.id} className='border rounded p-4 m-1 flex justify-between items-center'>
                  <img src={item.image} alt={item.name} className='w-28 h-32 lg:h-24 object-cover rounded-md' />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className='text-white py-2'>&#8358;{item.price.toFixed(2)}</p>
                    <div className="flex items-center ">
                        <button onClick={() => dispatch(decrement(item.id))} className="text-white text-1xl font-bold bg-red-500 px-3 py-1 rounded mx-1">-</button>
                        <span className="mx-2  text-white px-2 py-1 border rounded">{item.quantity}</span>
                        <button onClick={() => dispatch(increment(item.id))} className="text-white text-1xl font-bold bg-green-600 px-3 py-1 rounded mx-1">+</button>
                    </div>
                    </div>
                        <button onClick={() => dispatch(removeFromCart(item.id))} className="text-white text-1xl font-bold bg-[red] px-3 py-1 rounded mx-1">x</button>
                </div>
                </>
            ))}
            <div className="text-right mt-4 flex justify-between bg-black text-white rounded">
               <p className='text-2xl font-normal lg:font-bold px-3 py-1'>Cart Items: {itemCount}</p>
                <p className="text-2xl font-normal lg:font-bold px-3 py-1 text-white">Total:  &#8358; {totalAmount.toFixed(2)}</p>
             </div>
        </div>
        </>
       )}
       <Link to={"/"} className='mt-4 py-2 text-2xl w-full text-center font-bold text-white border border-slate-500 rounded-md inline-block'>Continue Shopping</Link>
    </div>
    <div className="container">
      <Checkout/> 
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default OrderSummary;