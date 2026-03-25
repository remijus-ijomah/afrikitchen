import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../Reducers/foodSlice';
import { addToCart } from '../Reducers/cartSlice';


const FoodList = () => {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const dispatch = useDispatch();
    const foodItems = useSelector((state) => state.foodItems. items);
    
    //console.log(foodItems)

  
    useEffect(() =>{
        dispatch(fetchFoods());
    },[dispatch]);

    const getFilteredFoods = () => {
      return foodItems.filter((food) =>{
        const matchesPrice = selectedPrice ? food.size === selectedPrice: true
        const matchesCategory = selectedCategory ? food.category === selectedCategory: true
        return matchesPrice && matchesCategory;
      });
    };

    const handlePriceClick = (size) => {
      setSelectedPrice(size)
    }

    const handleCatClick = (category) =>{
      setSelectedCategory(category);
    }

    const resetFilters = () => {
      setSelectedPrice(null);
      setSelectedCategory(null);
    };

    const filteredFoods = getFilteredFoods();

  return (
    <>  
    <div className="max-w-[1366px] mx-auto  pt-20">
       <h2 className='text-3xl font-bold pb-10 text-center bg-gradient-to-r from text-orange-600 animate-bounce'>Top Rated Menu Items</h2>
        {/**Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
            {/**Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                {/* <PriceFilter/> */}
                <div className='flex'>
                    <button onClick={resetFilters} className='m-1 px-2 border-orange-600 border rounded-md text-orange-600 font-bold hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> handleCatClick("Rice")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>Rice</button>
                    <button onClick={()=> handleCatClick("Soup")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>Soup</button>
                    <button onClick={()=> handleCatClick("Nkwobi")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>Nkwobi</button>
                    <button onClick={()=> handleCatClick("Swallow")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>Swallow</button>
                </div>
            </div>
            {/**Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                  <div className='flex'>
                    <button onClick={()=> handlePriceClick("&#8358;")} className='m-1 px-2 border-orange-600 border rounded-md font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>&#8358;</button>
                    <button onClick={()=> handlePriceClick("&#8358; &#8358;")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>&#8358; &#8358;</button>
                    <button onClick={()=> handlePriceClick("&#8358; &#8358; &#8358;")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>&#8358; &#8358; &#8358;</button>
                    <button onClick={()=> handlePriceClick("&#8358; &#8358; &#8358; &#8358;")} className='m-1 px-2 border rounded-md border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white'>&#8358; &#8358; &#8358; &#8358;</button>
                </div> 
            </div>
        </div>
        {/**Display Foods */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
       
        {filteredFoods.map((food) => (
            <div key={food.id} className='border shadow-lg hover:scale-105 duration-300 p-1 rounded-lg'>
              <img src={food.image} alt={food.name} className='w-full h-52 mb-1 object-cover rounded-t-lg' />
                <div className='flex justify-between px-1 py-2'>
                 <h2 className="text-lg font-bold">{food.name}</h2>
                 <p className="bg-orange-500 text-white p-1 rounded-full">&#8358; {food.price.toFixed(2)}</p>
                </div>
                <span className="flex justify-center bg-orange-500 text-white py-2 rounded mt-2">
                <button className='bg-[green] hover:bg-green-500 hover:border-transparent animate-pulse text-white border border-white-600 p-1 rounded text-center'onClick={() => dispatch(addToCart(food))} >Order Now</button>
              </span>
            </div>
        ))}
    </div>
    </div>
  </>
  );
};

export default FoodList;