import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, rate, imageUrls, price, previousPrice } = req.body;

    try {
      const product = await prisma.product.create({
        data: {
          title,
          rate,
          imageUrl: imageUrls,
          price,
          previousPrice,
        },
      });

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
