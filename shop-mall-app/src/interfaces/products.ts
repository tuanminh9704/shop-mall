export interface Product {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    isWarranty: boolean;
    slug: string;
    brand: {
      id: number;
      name: string;
      logoUrl: string;
    };
    images: [
      {
        id: number;
        imageUrl: string;
        isMain: boolean;
        order: number;
        productId: number;
      }
    ];
    productVariant: [
      {
        price: string;
        sku: string;
        imageUrl: string;
        stock: number;
        variantOptionValue: [
          {
            optionValue: {
              id: number;
              productOptionId: number;
              value: string;
              position: number;
            };
          }
        ];
      }
    ];
    productOption: [
      {
        id: number;
        productId: number;
        name: string;
        position: number;
        values: [
          {
            id: number;
            productOptionId: number;
            value: string;
            position: number;
          }
        ];
      }
    ];
  };
  specifications: [
    {
      name: string;
      attributes: [
        {
          code: string;
          name: string;
          value: string;
        }
      ];
    }
  ];
  relatedProducts: [
    {
      id: number;
      name: string;
      price: string;
      description: string;
      isWarranty: boolean;
      slug: string;
      images: [
        {
          id: number;
          imageUrl: string;
          isMain: boolean;
          order: number;
          productId: number;
        }
      ];
    }
  ];
}
