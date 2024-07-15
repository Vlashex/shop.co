'use server'
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async function createCardAction(title: string, price: string | number, rate: number, images: string[]) {
    // Преобразуем price к числу, если он является строкой
    const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;

    // Проверка, что price после преобразования является числом
    if (isNaN(parsedPrice)) {
        throw new Error('Invalid value provided for price. Expected a number.');
    }
    const rateF = typeof rate === 'string' ? parseFloat(rate) : rate;

    const card = await prisma.productCard.create({
        data: {
            title,
            price: parsedPrice,
            rate: rateF,
            images,
            previousPrice: parsedPrice
        }
    });

    return card;
}