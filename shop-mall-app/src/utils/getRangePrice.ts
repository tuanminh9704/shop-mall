import type { Product } from "../interfaces/products";

export const getPriceRange = (product: Product) => {
    if (!product.productVariant || !product.productVariant.length) return "";
  
    const variantsInStock = product.productVariant.filter(v => v.stock > 0);
  
    const variants = variantsInStock.length > 0 ? variantsInStock : product.productVariant;
  
    const prices = variants.map(variant => Number(variant.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
  
    if (minPrice === maxPrice) return `${minPrice.toLocaleString()}đ`;
    return `${minPrice.toLocaleString()}đ - ${maxPrice.toLocaleString()}đ`;
  };
  