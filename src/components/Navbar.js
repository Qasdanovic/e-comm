import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { cardProducts } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h2 className="navbar-brand">myStore</h2>
          <div>
            <a className="nav-link text-success" href="#">
              <i className="bi bi-cart"></i> Cart({cardProducts.length})
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
