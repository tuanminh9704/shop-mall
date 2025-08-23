/*
  Warnings:

  - You are about to drop the column `city` on the `warehouses` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `warehouses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `sellerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `warehouses` DROP COLUMN `city`,
    DROP COLUMN `province`,
    ADD COLUMN `provinceId` INTEGER NULL,
    ADD COLUMN `sellerId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Province` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Province_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seller` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shopName` VARCHAR(191) NOT NULL,
    `logoUrl` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `provinceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `Seller`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Warehouses` ADD CONSTRAINT `Warehouses_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `Province`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Warehouses` ADD CONSTRAINT `Warehouses_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `Seller`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seller` ADD CONSTRAINT `Seller_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `Province`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
