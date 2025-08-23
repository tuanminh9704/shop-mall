import { FilterOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import type { Province } from "../../interfaces/provinces";
import { getAllProvinces } from "../../services/provinces";
import { FilterSection } from "./FilterSection";

export const FilterSearch = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const provinceRecords = await getAllProvinces();
        setProvinces(showMore ? provinceRecords : provinceRecords.slice(0, 4));
      } catch (error) {
        console.log("[ERROR]: ", error);
      }
    };
    fetchApi();
  }, [showMore]);

  return (
    <div className="p-4 w-75 bg-[#FFFFFF] rounded-md">
      <div className="flex items-center mb-3">
        <FilterOutlined className="mr-2 text-xl align-middle" />
        <span className="font-bold">BỘ LỌC TÌM KIẾM</span>
      </div>

      <FilterSection
        title="Nơi Bán"
        showMore={showMore}
        toggleShowMore={() => setShowMore((prev) => !prev)}
      >
        {provinces.length ? (
          provinces.map((province) => (
            <div key={province.id}>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                {province.name}
              </label>
            </div>
          ))
        ) : (
          <p>Chưa tìm thấy tỉnh hoặc thành phố nào</p>
        )}
      </FilterSection>
    </div>
  );
};
