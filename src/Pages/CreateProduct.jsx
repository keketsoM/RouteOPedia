import React from "react";
import { useNavigate } from "react-router-dom";
const CreateProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      CreateProduct
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default CreateProduct;
