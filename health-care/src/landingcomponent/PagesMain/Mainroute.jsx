import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../Pages/ProductList";
import { Homelan } from "../../Pages/Homelan";
import AdminLogin from "../../Pages/AdminLogin";
import { AdminProductList } from "../../Pages/AdminPages/AdminProductList";
import { AdminEditProduct } from "../../Pages/AdminPages/AdminEditProduct";

import SingleProductPage from "../../Pages/SingleProductPage";

import AdminDashboardPage from "../../Pages/AdminPages/AdminDashboardPage";
import AddProductPage from "../../Pages/AdminPages/AddProductPage"


import {Cart} from "../../Pages/Cart";
import Checkout from "../../Pages/Checkout";

// import { Protect } from "./authfolderrr/Protect";
import Thankyou from "../../Pages/Thankyou";
import AllProducts from "../../Pages/AdminPages/AllProducts";
import AdminUserPage from "../../Pages/AdminPages/AdminUserPage";
import { Signup } from "../Signup";
import LoginPage from "../../formvalidation/Login";
import PrivateRoute from "../../formvalidation/Privateroute";


export const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homelan />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/adminproductlist" element={<AdminProductList />}></Route>
        <Route path="/edit/:id" element={<AdminEditProduct />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/admindashboard" element={<AdminDashboardPage />}></Route>
        <Route path="/adminproductlist" element={<AdminProductList />}></Route>
        <Route path="/addproduct" element={<AddProductPage />}></Route>
        <Route path="/edit/:id" element={<AdminEditProduct />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {" "}
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        ;
        <Route
          path="/checkout/payment-information"
          element={
           
             
              <Checkout/>
           
          }
        ></Route>
        <Route
          path="/thankyou"
          element={
           
             
              <Thankyou />
            
          }
        ></Route>
        <Route path="/allproduct" element={<AllProducts />}></Route>
        <Route
          path="/adminuser"
          element={
           
             
              <AdminUserPage />
           
          }
        ></Route>
      </Routes>
    </div>
  );
};
