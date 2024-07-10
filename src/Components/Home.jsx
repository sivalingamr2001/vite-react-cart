import React, { useState } from "react";
import data from "../assets/product.json";
import { Product } from "./Product";
import "./home.css"

const Home = ({cart, setCart}) => {
  const [product] = useState(data);
  return (
    <div className="product-container">
      {product.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
