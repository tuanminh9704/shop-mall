export interface ProductEntity {
  id: number;
  name: string;
  description: string | null;
  price: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  category?: {
    id: number;
    name: string;
  };
  images?: {
    id: number;
    imageUrl: string;
  }[];
}
