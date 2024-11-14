import React from "react";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const  navigate  = useNavigate();
  return (
    <div>
      Product
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Go to Product
      </button>
    </div>
  );
};

export default Product;
