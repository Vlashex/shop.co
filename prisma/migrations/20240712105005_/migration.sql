/*
  Warnings:

  - Added the required column `previousPrice` to the `SneakersCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SneakersCard" ADD COLUMN     "previousPrice" INTEGER NOT NULL;
