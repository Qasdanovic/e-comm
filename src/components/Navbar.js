import React from "react";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const { cardProducts } = useSelector((state) => state.cart);

  return (
    <nav className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">myStore</h2>
        <div>
          <button className="flex items-center text-green-600 hover:text-green-700 font-medium transition">
            <FaCartShopping className="mr-2" />
            Cart ({cardProducts.length})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
