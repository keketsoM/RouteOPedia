import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Headers from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
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
      <Route path="/product">
        <Route path="" element={<Product />}></Route>
        <Route path="detail" element={<ProductDetail />}></Route>
        <Route path="list" element={<ProductList />}></Route>
        <Route path="create" element={<CreateProduct />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
