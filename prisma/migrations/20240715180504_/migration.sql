/*
  Warnings:

  - You are about to drop the `SneakersCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SneakersCard";

-- CreateTable
CREATE TABLE "ProductCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "images" TEXT[],
    "price" INTEGER NOT NULL,
    "previousPrice" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductCard_pkey" PRIMARY KEY ("id")
);
