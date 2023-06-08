import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import PageNotFound from "../pages/404";
import DetailProduct from "../components/card/DetailProduct";
import ListingProduct from "../components/card/ListingProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<ListingProduct />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
