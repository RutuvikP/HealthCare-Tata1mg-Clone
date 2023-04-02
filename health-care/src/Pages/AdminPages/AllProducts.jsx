import React from 'react'
import { AdminProductList } from './AdminProductList';
import AdminNav from '../../Components/AdminComponents/AdminNav';

const AllProducts = () => {
  return (
    <div>
        <AdminNav/>
        <AdminProductList/>
    </div>
  )
}

export default AllProducts;
