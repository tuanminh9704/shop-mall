import { useState } from "react";
import { SORT_BUTTONS, PRICE_OPTIONS } from "../../constants/sortOptions";

export const SortBar = () => {
  const [buttonSelected, setButtonSelected] = useState(SORT_BUTTONS[0]);
  const [priceSort, setPriceSort] = useState("");

  return (
    <div className="bg-white flex p-4 shadow-sm rounded-lg items-center">
      <div className="mr-5 font-medium">Sắp xếp theo</div>

      <div className="flex gap-3">
        {SORT_BUTTONS.map((btn: string) => (
          <button
            key={btn}
            onClick={() => setButtonSelected(btn)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                buttonSelected === btn
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="ml-6">
        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white hover:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
        >
          <option value="">Sắp xếp theo giá</option>
          {PRICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
