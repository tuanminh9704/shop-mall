export interface Category {
    id: number,
    name: string,
    hasChildrens: boolean,
    icon: string,
    slug: string,
    parentId: number,
    children: Category[],
}