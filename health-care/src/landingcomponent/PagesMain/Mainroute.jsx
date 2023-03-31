import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../Pages/ProductList";
import { Homelan } from "../../Pages/Homelan";
import AdminLogin from "../../Pages/AdminLogin";
import { AdminProductList } from "../../Pages/AdminPages/AdminProductList";
import { AdminEditProduct } from "../../Pages/AdminPages/AdminEditProduct";
import AdminDashboardPage from "../../Pages/AdminPages/AdminDashboardPage";
import AddProductPage from "../../Pages/AdminPages/AddProductPage";

export const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homelan />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboardPage/>}></Route>
        <Route path="/adminproductlist" element={<AdminProductList/>}></Route>
        <Route path="/addproduct" element={<AddProductPage/>}></Route>
        <Route path="/edit/:id" element={<AdminEditProduct/>}></Route>
      </Routes>
    </div>
  );
};
