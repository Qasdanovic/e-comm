import React, { useEffect } from 'react';
import { fetchApi } from '../redux/fetchApi';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';


function Products() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className="container mt-5">
            <div className="row g-4">
            {
                loading && Array.from({length : 8}).map((_, index) =>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Skeleton />
                    </div>
                )
            }
            </div>
            
            <div className="row g-4">
                {products?.products?.length && (
                    products.products.map((prod) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
                            <ProductCard prod={prod} />
                        </div>
                    ))
                )
            }
            </div>
        </div>
    );
}

export default Products;
