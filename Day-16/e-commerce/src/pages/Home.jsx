import React, { useState,useRef,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addToCart} from '../feature/cartSlice'

const Home = () => {

    const [products, setProducts] = useState([]);


    //dispatch used to send the date to store
    const dispatch=useDispatch();
    const navigate=useNavigate();
     const inputRef = useRef();

//fetch the details from facestoreapi



  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);


  const handleAdd=()=>
  {
      dispatch(addToCart(products))
      console.log(products)
  }
  const handleBuy=()=>
  {
    navigate('/success')

    //navigate the pages
  }




  return (
   <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">🛍️ Products</h1>

      <input
        ref={inputRef}
        placeholder="Search..."
        className="border p-2 mb-4"
      />
      <button className='bg-blue-500 text-white p-3'>Search</button>

      <div className="grid grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
            <img src={item.image} className="h-32 mx-auto" />
            <h2 className="text-lg">{item.title.slice(0, 20)}</h2>
            <p>₹ {item.price}</p>

            <button
              onClick={() => handleAdd(item)}
              className="bg-blue-500 text-white px-2 py-1 m-1"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuy}
              className="bg-green-500 text-white px-2 py-1 m-1"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

  


export default Home