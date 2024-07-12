import { NextResponse } from "next/server";
import prisma from "@/../prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, rate, imageUrls, price, previousPrice } = req.body;

  try {
    const product = await prisma.sneakersCard.create({
      data: {
        title,
        rate,
        images: imageUrls,
        price,
        previousPrice,
      },
    });
    
    res.status(200).json({ message: 200, product });
  } catch (error) {
    res.status(200).json({ error: 'Error creating product' });
  }
}
