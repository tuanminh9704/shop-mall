export interface Product {
    id: number,
    name: string,
    price: string,
    description: string,
    images: [
        {
            id: number,
            imageUrl: string,
            isMain: boolean,
            order: number,
            productId: number,
        }        
    ],
    productVariant: [
        {
            price: string,
            sku: string,
            imageUrl: string,
            stock: number,
        }
    ],
    productOption: [
        {
            id: number,
            productId: number,
            name: string,
            position: number,
            values: [
                {
                    id: number,
                    productOptionId: number,
                    value: string,
                    position: number,
                }
            ]
        }
    ]
}