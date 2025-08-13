/*
  Warnings:

  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `price`;

-- CreateTable
CREATE TABLE `ProductOption` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductOptionValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productOptionId` INTEGER NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `position` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VariantOptionValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `variantId` INTEGER NOT NULL,
    `optionValueId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Warehouses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VariantInventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `variantId` INTEGER NOT NULL,
    `warehouseId` INTEGER NOT NULL,
    `stockQuantity` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductOption` ADD CONSTRAINT `ProductOption_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOptionValue` ADD CONSTRAINT `ProductOptionValue_productOptionId_fkey` FOREIGN KEY (`productOptionId`) REFERENCES `ProductOption`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariantOptionValue` ADD CONSTRAINT `VariantOptionValue_variantId_fkey` FOREIGN KEY (`variantId`) REFERENCES `ProductVariant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariantOptionValue` ADD CONSTRAINT `VariantOptionValue_optionValueId_fkey` FOREIGN KEY (`optionValueId`) REFERENCES `ProductOptionValue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariantInventory` ADD CONSTRAINT `VariantInventory_variantId_fkey` FOREIGN KEY (`variantId`) REFERENCES `ProductVariant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariantInventory` ADD CONSTRAINT `VariantInventory_warehouseId_fkey` FOREIGN KEY (`warehouseId`) REFERENCES `Warehouses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
