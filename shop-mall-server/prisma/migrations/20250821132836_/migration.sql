/*
  Warnings:

  - You are about to drop the column `price` on the `productvariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `price` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `productvariant` DROP COLUMN `price`;
