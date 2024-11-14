import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();
  return (
    <div>
      Product
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Create Product
      </button>
      <br />
      <Link to={"/product/create"}>
        <button>Create Product</button>
      </Link>
    </div>
  );
};

export default Product;
