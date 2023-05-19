
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Product {
  
  id: string;
  name: string;

}

const getOneProduct = async (req: NextApiRequest, res: NextApiResponse<Product | { error: string }>) => {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid product ID' })
  }

  try {
    const response = await axios.get<Product>('http://localhost:5000/getone/${id}');
    const product = response.data;
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

export default getOneProduct