// Cart.jsx
import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
      <h1 className="cart-head">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="img" />
            </div>
            <div className="cart-product-datails">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="cart-amt">Total Amount Rs: {total}</h1>
    </>
  );
};

export default Cart;
