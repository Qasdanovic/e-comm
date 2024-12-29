import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement_quantity } from '../redux/Cart/CartActions'

function SideBarProd({product}) {

  const dispatch = useDispatch()
  const cardProducts = useSelector(state => state.card)

  useEffect(() => {
    console.log(cardProducts)
  }, [cardProducts, product])

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
  <div className="flex items-center gap-4">
    <img
      src={product.images[0]} // Replace with the product image URL
      alt={product.title} // Replace with the product name
      className="w-16 h-16 object-cover rounded-lg"
    />
    <div>
      
      <h5 className="text-lg font-medium">{product.title}</h5> 
      
      <p className="text-green-600 font-bold">${product.price}</p> 
    </div>
  </div>

  
  <div className="flex items-center gap-2">
    <button
      className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition"
      onClick={() => dispatch(decrement_quantity())} 
    >
      -
    </button>
    <span className="text-lg font-medium">1</span> 
    <button
      className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition"
    //   onClick={() => incrementQuantity(productId)} // Replace with increment handler
    >
      +
    </button>
  </div>
</div>

  )
}

export default SideBarProd