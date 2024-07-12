import { NextApiRequest } from 'next';
import prisma from '../../../../prisma/prisma';
import { NextResponse } from 'next/server';


export async function POST(req: NextApiRequest) {

  const { title, rate, imageUrls, price, previousPrice } = req.body;
  
  try {
    const card = await prisma.sneakersCard.create({
      data: {
        title,
        rate,
        images: imageUrls,
        price,
        previousPrice,
      },
    });
    return new Response(JSON.stringify({ name: 'Create sneakers card',  card}), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 // Created
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create sneakers card' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500 // Internal Server Error
    })
  }
}
