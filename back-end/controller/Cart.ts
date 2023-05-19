import { Request, Response } from 'express';
import CartModel from "../database/module/Cart";

export const addToCart = function (req: Request, res: Response) {                      
  const { productId, idusers ,quantity } = req.body;

  CartModel.addToCart(Number(productId), Number(idusers), Number(quantity), (err: any, result: any) => {
    if (err) {
      console.error('Error adding product to cart:', err);
      res.status(500).json([ req.body]);
    } else {
      res.status(200).json({ message: 'Product added to cart successfully' });
    }
  });
};


export const getCartItems = function (req: Request, res: Response) {
  const { userId } = req.params;

  CartModel.getCartItems(Number(userId), (err: any, result: any) => {
    if (err) {
      console.error('Error retrieving cart items:', err);
      res.status(500).json({ error: 'Failed to retrieve cart items' });
    } else {
      res.status(200).json(result);
    }
  });
};

export const removeFromCart = function (req: Request, res: Response) {
  const { cartItemId } = req.params;

  CartModel.removeFromCart(Number(cartItemId), (err: any, result: any) => {
    if (err) {
      console.error('Error removing cart item:', err);
      res.status(500).json({ error: 'Failed to remove cart item' });
    } else {
      res.status(200).json({ message: 'Cart item removed successfully' });
    }
  });
};
