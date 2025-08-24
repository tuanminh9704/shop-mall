import { useState } from "react";
import { SORT_BUTTONS, PRICE_OPTIONS } from "../../constants/sortOptions";
import { useSearchParams } from "react-router-dom";

export const SortBar = () => {
  const [buttonSelected, setButtonSelected] = useState<any>(SORT_BUTTONS[0]);
  const [priceSort, setPriceSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (option: any) => {
    const { sortBy, order } = option.value;
    setPriceSort("");
    setButtonSelected(option);

    const params = Object.fromEntries(searchParams.entries());
    params.sortBy = sortBy;
    params.order = order;

    setSearchParams(params);
  };

  const handlePriceSort = (order: string) => {
    setPriceSort(order);
    setButtonSelected(null);
    if (order === "") {
      setSearchParams({ sortBy: "", order: "" });
    } else {
      setSearchParams({ sortBy: "price", order });
    }
  };

  return (
    <div className="bg-white flex p-4 shadow-sm rounded-lg items-center">
      <div className="mr-5 font-medium">Sắp xếp theo</div>

      <div className="flex gap-3">
        {SORT_BUTTONS.map((btn: any) => (
          <button
            key={btn.label}
            onClick={() => handleSort(btn)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                buttonSelected === btn
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="ml-6">
        <select
          value={priceSort}
          onChange={(e) => handlePriceSort(e.target.value)}
          className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all
            ${
              priceSort
                ? "text-[blue]"
                : "bg-white border-gray-300 hover:border-blue-400"
            } 
            focus:ring-2 focus:ring-blue-400 focus:outline-none`}
        >
          <option value="" className={priceSort ? 'hidden' : ''}>Sắp xếp theo giá</option>
          {PRICE_OPTIONS.map((opt) => (
            <option key={opt.label} value={opt.value.order}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
