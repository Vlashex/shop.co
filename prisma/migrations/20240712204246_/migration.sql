/*
  Warnings:

  - Made the column `previousPrice` on table `SneakersCard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SneakersCard" ALTER COLUMN "previousPrice" SET NOT NULL;
