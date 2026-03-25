import React,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { checkout } from '../Reducers/cartSlice';



const Checkout = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector((state) => state.cart.itemCount);
    const {cartItems, totalAmount} = useSelector((state) => state.cart);
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    const navigate = useNavigate();

    const clearCart = () => {
      dispatch(checkout());
      navigate('/')
    }
    const handlePay = () => {
      setOrderPlaced(true);
      setTimeout(()=>{
        dispatch(checkout());
        navigate('/');
      }, 5000);
    } 
    

    const [shippingInfo, setShippingInfo] = useState({
      email:'',
      name:'',
      cardNo:'',
      expiryDate:'',
      cvv:'',
      address:'',
      state:'',
      zip:'',
    });

    const handleChange =(e) => {
      const {name, value} = e.target;
      setShippingInfo({...shippingInfo, [name]:value});
    };
    

  return (
    <>    
    <div className='m-2 lg:m-8'>
        {itemCount > 0  && ( 
            <>
     <div className="mt-2 p-2 px-4 lg:px-2 border rounded bg-indigo-700">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">Enter Your Billing & Shipping Details</h2>
      </div>
      <div className="mt-2 py-2 px-4 lg:px-2 bg-indigo-700 border rounded border-none">   
      <h1 className="text-2xl font-bold">Delivery Method</h1>
                <form className="w-full mb-1">
                  <h3 className='text-gray-400 mb-4'>Choose a Delivery method</h3>
                    <div className="grid gap-6 lg:grid-cols-2">  
                    <div className='relative'>
                        <input type="radio" name="radio" id="radio" className='absolute form-radio right-4 top-1/2 cursor-pointer block h-7 w-7 -translate-y-1/2 text-red-600 border-red-500 rounded-full focus:ring-0 focus:ring-offset-0'/>
                      
                        <label htmlFor="radio-1" className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 bg-[url('./img/dispatch0.jpg')]">
                            <img src="./img/dispatch.jpg" alt="" className="w-14 object-contain" />
                            <div className='ml-1'>
                                <span className="mt-2 text-[red] font-bold">Dispatch Riders</span>
                                <p className="text-black font-bold text-sm leading-6">Delivery: 2-4 Hours</p>
                            </div>
                        </label>
                    </div>
                    <div className='relative'>
                        <input type="radio" name="radio" id="radio" className='absolute right-4 top-1/2 cursor-pointer block h-7 w-7 -translate-y-1/2'/>
                        <label htmlFor="radio-1" className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 bg-[url('./img/ups0.jpg')]">
                            <img src="/img/ups.jpg" alt="" className="w-14 object-contain" />
                            <div className="ml-1" >
                                <span className="mt-2  text-[red] font-bold">UPS</span>
                                <p className="text-black font-bold text-sm leading-6">Delivery: 2-4 Days</p>
                            </div>
                        </label>
                    </div>
                    </div>
                  </form>
               </div>
              <div className='mt-4' >
                    <label htmlFor="email" className=' text-yellow-500 text-sm font-medium'>Email</label>
                    <div className="relative mt-2">
                        <input type="text" name="email" value={shippingInfo.email} onChange={handleChange} className='w-full rounded-md border border-[red] px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your email' />
                    </div>
                    <label htmlFor="card-holder" className='mt-4 block text-yellow-500 text-sm font-medium'>Card Holder</label>
                    <div className="relative mt-1">
                        <input type="text" name="name" value={shippingInfo.name} onChange={handleChange} className='w-full rounded-md border border-[blue] px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your full names here' />
                    </div>
                     <label htmlFor="card-no" className='mt-4 block text-yellow-500 text-sm font-medium'>Card Details</label>
                    <div className="grid lg:grid-cols-3 gap-1">
                        <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-500">Card Number</label>
                        <input type="text" name="cardNo"  value={shippingInfo.cardNo} onChange={handleChange}  className='w-full rounded-md border border-[red] px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='xxxx-xxxx-xxxx-xxxx' />
                        </div>
                       <div> 
                       <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-500">Epiry Date</label>
                       <input type="date" name="expiryDate" value={shippingInfo.expiryDate} onChange={handleChange}  className='w-full rounded-md border border-[red] px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' />
                       </div>
                      <div> 
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-500">CVV Number</label>
                      <input type="text" name="cvv" value={shippingInfo.cvv} onChange={handleChange} className='w-full rounded-md border border-[red] px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='CVC' />
                      </div>            
                    </div>
                     <label htmlFor="billing-address" className='mt-4 block text-yellow-500 text-sm font-medium'>Billing Address</label>
                    <div className="grid lg:grid-cols-3 border-none">
                       <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-500">Address</label>
                        <input type="text" name="address" value={shippingInfo.address} onChange={handleChange} className="w-full bg-[url('./img/street.jpg')] rounded-md border border-gray-700 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder='Street Address' />
                       </div>
                      <div><label htmlFor="state" className="block text-sm font-medium text-gray-500">State</label>
                       <input type="text" name="state" value={shippingInfo.state} onChange={handleChange} className='w-full rounded-md border border-fuchsia-800  px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your state'/>
                      </div>
                      <div><label htmlFor="zip" className="block text-sm font-medium text-gray-500">Zip Code</label>
                      <input type="text" name="zip"  value={shippingInfo.zip} onChange={handleChange} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder='Enter city zip Code' />
                     </div>
                   </div>
                   {/* total */}
                   <div className="mt-6 border-t border-b py-2"> 
                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-400">Number of Ordered Items:</p>
                        <p className="font-bold text-white"> {itemCount}</p>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-400">Delivery cost</p>
                        <p className="font-bold text-white"> &#8358; 100.00</p>
                    </div>
                   {/* </div> */}
                   <div className="flex items-center justify-between">
                         <p className="text-sm font-bold text-slate-400">Total</p>
                        <p className="font-bold text-white">&#8358; {(totalAmount + 100).toFixed(2)}</p>
                   </div>
                   </div>
                </div>
    
    <span className="relative flex justify-between text-right mt-10 gap-4">
          {orderPlaced && ( <p className='absolute px-4 text-center text-green-600 border rounded-md'>Your order has been successfully placed, and would be delivered shortly!</p>
         )}
         
         <button onClick={handlePay} className="bg-green-600 text-gray-300 py-2 px-4 rounded w-1/2 mt-14 " disabled={cartItems.length === 0}>
         Pay Now</button>
          <button onClick={clearCart} className="bg-[red] text-gray-300 py-2 px-4 rounded w-1/2 mt-14">
          clear Cart</button>
    </span>
    </>
    )}
    </div>
    </>
  )
}

export default Checkout;