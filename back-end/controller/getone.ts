import { Request, Response } from 'express';
import getone from '../database/module/getone';

export const getProduct =  async (req: Request, res: Response) => {
  const productName = req.params.name;
  console.log(productName);
 getone.getProductByName(productName, (err: Error, results: any[], fields: any) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log(results);
      res.send(results);
      console.log(fields);
    }
  });
};
 
  //   return new Promise((resolve, reject) => {
  //    const sql = 'SELECT * FROM products WHERE name LIKE '
  //     conect.query(sql, (err, rslt) => {
  //       if (err) reject(err)
  //       else resolve(rslt)
  //     })
  //   })
  // }

// const app = express()
// app.use(express.json())

// app.post('/controller/search', (req: Request, res: Response) => {
//   const { query } = req.body

//   const results = searchProducts(query)

//   res.json({ results })
// })

// function searchProducts(query: string) {
//   const products = [
//     { id: 1, name: 'Product 1', category: 'men' },
//     { id: 2, name: 'Product 2', category: 'women' },
//     { id: 3, name: 'Product 3', category: 'men' },
//     { id: 4, name: 'Product 4', category: 'women' },
//   ]

//   return products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(query.toLowerCase()) &&
//       (product.category === 'men' || product.category === 'women')
//   )
// }

// app.listen(5000, () => {
//   console.log('Server is running on port 5000')
// })

  //   const results = [
  //     {
  //       id: 2,
  //       name: "Product 2",
  //       category: "women"
  //     }
  //   ]
  // }
  // export const getOne = (prod:any) => {
  //   return new Promise((resolve, reject) => {
  //    const sql = 'SELECT * FROM products WHERE name LIKE '
  //     conect.query(sql, (err, rslt) => {
  //       if (err) reject(err)
  //       else resolve(rslt)
  //     })
  //   })
  // }