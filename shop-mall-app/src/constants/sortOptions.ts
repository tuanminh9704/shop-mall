export const SORT_BUTTONS = [
  { label: "Phổ Biến", value: { sortBy: "", order: "desc" } },
  { label: "Mới Nhất", value: { sortBy: "ctime", order: "desc" } },
  { label: "Cũ Nhất", value: { sortBy: "ctime", order: "asc" } },
  { label: "Bán Chạy", value: { sortBy: "", order: "desc" } },
];

export const PRICE_OPTIONS = [
  { label: "Giá: Thấp đến Cao", value: { sortBy: "price", order: "asc" } },
  { label: "Giá: Cao đến Thấp", value: { sortBy: "price", order: "desc" } },
]