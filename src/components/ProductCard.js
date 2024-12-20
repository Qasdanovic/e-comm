import React from "react";

const ProductCard = ({ prod }) => {
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
                <button 
                    className="btn btn-primary mt-auto" 
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
