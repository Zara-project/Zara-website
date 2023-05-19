"use client"
import React from 'react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Item 1',
      price: 10.99,
      image: 'https://static.zara.net/photos///2023/V/0/1/p/2400/408/800/2/w/563/2400408800_1_1_1.jpg?ts=1674735052725',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 19.99,
      image: 'https://static.zara.net/photos///2023/V/0/1/p/2562/162/330/2/w/563/2562162330_1_1_1.jpg?ts=1677236850733',
    },
    
  ];

  return (
    <div className="page-container">
      <div className="cart-header">
        <h1>Cart</h1>
      </div>

      <div className="list-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
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

        .cart-header {
          margin-bottom: 20px;
        }

        .cart-header h1 {
          font-size: 24px;
          font-weight: bold;
        }

        .list-container {
          margin-top: 50px;
        }

        .cart-items {
          display: flex;
        }

        .cart-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
        }

        .item-image {
          width: 150px;
          height: auto;
          margin-bottom: 10px;
        }

        .item-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .item-name {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .item-price {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};



export default CartPage;
