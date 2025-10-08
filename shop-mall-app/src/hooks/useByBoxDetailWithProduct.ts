import { useEffect, useState } from "react";
import { getProductById } from "../services/product";
import type { Product } from "../interfaces/products";

export const useByBoxDetailWithProduct = (productId: string | null) => {
  const [productDetail, setProductsDetail] = useState<Product | null>(null);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!productId) return;
        const productDetailData: Product = await getProductById(Number(productId));
        setProductsDetail(productDetailData);

        if (productDetailData?.product.productVariant.length > 0) {
          const firstVariant = productDetailData?.product.productVariant[0];
          setSelectedOption(firstVariant.variantOptionValue);
          setSelectedVariant(firstVariant);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchData();
  }, [productId]);
  // console.log('selectedVariant', selectedVariant);
  // console.log('selectedOption', selectedOption);
  // console.log('productDetail', productDetail);

  useEffect(() => {
    if (!productDetail || !selectedOption) return;

    const matchVariant = productDetail?.product.productVariant.find((variant) => {
      if (!variant.variantOptionValue) return false;

      const variantOptionIds = variant.variantOptionValue.map(
        (v: any) => v.optionValueId || v.optionValue?.id
      );
      const selectedOptionIds = selectedOption.map(
        (v: any) => v.optionValueId || v.optionValue?.id
      );

      return (
        variantOptionIds.length === selectedOptionIds.length &&
        variantOptionIds.every((id: number) => selectedOptionIds.includes(id))
      );
    });

    setSelectedVariant(matchVariant || null);
  }, [selectedOption, productDetail]);

  const handleSelectOption = (optionId: number, value: any) => {
    setSelectedOption((prev: any) => {
      if (!prev) return [{ optionValue: value }];

      const existingIndex = prev.findIndex(
        (opt: any) => opt.optionValue.productOptionId === optionId
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = { optionValue: value };
        return updated;
      } else {
        return [...prev, { optionValue: value }];
      }
    });
  };

  return {
    productDetail,
    selectedOption,
    selectedVariant,
    handleSelectOption,
  };
};
