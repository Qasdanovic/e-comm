import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import SideBarProd from "./SideBarProd";

function SideBar() {
  const { cardProducts } = useSelector((state) => state.cart);


  return (
    <div className="drawer drawer-end">
      {/* Checkbox to toggle the drawer */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="drawer-button flex gap-2 items-center cursor-pointer">
          <FaCartShopping />
          Cart ({cardProducts.length})
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        {/* Overlay to close the drawer */}
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay">
          {" "}
        </label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-96 p-4">
          {/* Sidebar content */}
          <h1 className="font-bold">your cart products</h1>
          {cardProducts?.map((product) =>
            <li>
              <SideBarProd product={product} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
