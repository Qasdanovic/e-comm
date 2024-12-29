import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement_quantity,
  delete_prod_in_cart,
  increment_quantity,
} from "../redux/Cart/CartActions";
import { TbXboxXFilled } from "react-icons/tb";

function SideBarProd({ product }) {
  const dispatch = useDispatch();
  const cardProducts = useSelector((state) => state.card);

  useEffect(() => {
    console.log(cardProducts);
  }, [cardProducts, product]);

  return (
    
    <div className="flex items-center justify-between p-4 border-b border-gray-200 w-96">
      <button onClick={() => dispatch(delete_prod_in_cart(product.id))}>
        <TbXboxXFilled className="text-red-500"/>
      </button>
      <div className="flex items-center gap-4">
      
        <img
          src={product.images[0]} 
          alt={product.title}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h5 className="text-lg font-medium">{product.title}</h5>

          <p className="text-green-600 font-bold">
            ${product.newPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition"
          onClick={() => {
            return product.quantity === 1
              ? null
              : dispatch(decrement_quantity(product.id));
          }}>
          -
        </button>
        <span className="text-lg font-medium">{product.quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition"
          onClick={() => dispatch(increment_quantity(product.id))}>
          +
        </button>
      </div>
    </div>
  );
}

export default SideBarProd;
