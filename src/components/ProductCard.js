import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/Cart/CartActions";

const ProductCard = ({ prod }) => {
    const dispatch = useDispatch()

    const { cardProducts } = useSelector(state => state.cart)

    return (
        <div className="card">
            <img 
                src={prod.images[0]}
                className="card-img-top" 
                alt={prod.title} 
                loading="lazy" 
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{prod.title}</h5>
                <p className="card-text text-success fw-bold">${prod.price}</p>
                {
                    cardProducts.includes(prod.id) ?
                    <div className="text-success">already added to cart</div>
                    :
                <button 
                    className="btn btn-primary mt-auto" 
                    onClick={() => {
                        dispatch(add_to_cart(prod.id))
                    }}
                >
                    Add to Cart
                </button>
                }
            </div>
        </div>
    );
};

export default ProductCard;
