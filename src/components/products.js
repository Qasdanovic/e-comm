import React, { useEffect } from "react";
import { fetchApi } from "../redux/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";
import Navbar from "./Navbar";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const { cardProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(products);
  //   console.log(loading);
  // }, [products, loading]);

  return (
    <div>
      <Navbar />
      <div className="mt-8 px-4 md:px-8">
        {/* Skeleton Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && products?.products?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            {products.products.map((prod) => (
              <ProductCard key={prod.id} prod={prod} />
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 font-semibold mt-6">
            Error while fetching data
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
