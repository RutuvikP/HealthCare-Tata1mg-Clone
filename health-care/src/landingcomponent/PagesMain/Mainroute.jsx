import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../Pages/ProductList";
import { Homelan } from "../../Pages/Homelan";

export const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homelan />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
};
