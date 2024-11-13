import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Headers from "./Header";
import Home from "./Home";
import CreateProduct from "./Pages/CreateProduct";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import ProductList from "./Pages/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Headers />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/productdetail" element={<ProductDetail />}></Route>
      <Route path="/productlist" element={<ProductList />}></Route>
      <Route path="/createproduct" element={<CreateProduct />}></Route>
    </Routes>
  </BrowserRouter>
);
