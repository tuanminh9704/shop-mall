export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  hasChildrens: boolean;
  icon: string;
  slug: string;
}

export interface CategoryWithChildren extends Category {
  children?: CategoryWithChildren[];
}
