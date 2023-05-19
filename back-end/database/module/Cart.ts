import connection from "../index";

export default {
    addToCart: function (productId: number, userId: number, quantity: number, callback: Function) {
        const sql: string = 'INSERT INTO cart (products_productID, users_idusers, quantity) VALUES (?,?,?)';
        const values = [productId, userId, quantity];
    
        connection.query(sql, values, (err: any, result: any) => {
          if (err) {
            console.error(values, err);
            return callback(err, null);
          }
    
          return callback(null, result);
        });
      },

  getCartItems: function (userId: number, callback: Function) {
    const sql: string = `
      SELECT cart.idcart, products.*
      FROM cart
      INNER JOIN products ON cart.products_productID = products.productID
      WHERE cart.users_idusers = ?
    `;
    const values = [userId];
    connection.query(sql, values, (err: any, result: any) => {
      callback(err, result);
    });
  },

  removeFromCart: function (cartItemId: number, callback: Function) {
    const sql: string = 'DELETE FROM cart WHERE idcart = ?';
    const values = [cartItemId];
    connection.query(sql, values, (err: any, result: any) => {
      callback(err, result);
    });
  },
};
