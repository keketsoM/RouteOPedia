import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
