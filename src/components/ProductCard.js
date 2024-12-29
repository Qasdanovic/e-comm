import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/Cart/CartActions";

const ProductCard = ({ prod }) => {
  const dispatch = useDispatch();
  const { cardProducts } = useSelector((state) => state.cart);
  // console.log(cardProducts)

  return (
    <div className="bg-white h-auto shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <img
        src={prod.images[0]}
        alt={prod.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />


      <div className="p-5 flex flex-col h-full">

        <h5 className="text-xl font-semibold text-gray-800 truncate">
          {prod.title}
        </h5>

        <p className="text-green-500 text-lg font-bold mt-2">${prod.price}</p>

        {cardProducts?.some(product => product.id === prod.id) ? (
          <div className="text-green-600 font-medium mt-4">
            ✅ Already added to cart
          </div>
        ) : (
          <button
            className="bg-blue-600 text-white text-sm font-medium py-3 px-4 rounded-full hover:bg-blue-700"
            onClick={() => {
              dispatch(add_to_cart(prod));
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
