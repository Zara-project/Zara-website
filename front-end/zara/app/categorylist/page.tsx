"use client";
import {useEffect, useState} from "react"
import axios from "axios"
import React from 'react';

const CategoryListPage = () => {
  const [data,setData]= useState([]) 
 
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="page-container">
      <div className="list-container">
      <div className="items-wrapper">
        {data.map((item) => (
          <div key={item.productID} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">${item.price}</div>
            </div>
          </div>
        ))} 
        </div>
      </div>

      <style jsx>{`
        .page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Neue Helvetica', Arial, sans-serif;
          }
          
          .list-container {
            margin-top: 50px;
          }
          
          .items-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust the width as needed */
            grid-gap: 20px;
          }
          
          .cart-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }
          
          .item-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
          }
          
          .item-name {
            font-family: 'Neue Helvetica', Arial, sans-serif;
            font-size: 10px;
          }
          
          .item-price {
            font-family: 'Neue Helvetica', Arial, sans-serif;
            font-size: 10px;
          }
          
          
          .cart-item img {
            width: 100%;
            height: auto;
          }
      `}</style>
    </div>
  );
};

export default CategoryListPage;
