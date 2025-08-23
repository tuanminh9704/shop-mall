import type { Province } from "../../interfaces/provinces";

import { FilterOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllProvinces } from "../../services/provinces";

export const FilterSearch = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const provinceRecords = await getAllProvinces();
        if (!showMore) {
          setProvinces(provinceRecords.slice(0, 4));
        } else {
          setProvinces(provinceRecords);
        }
      } catch (error) {
        console.log("[ERROR]: ", error);
      }
    };
    fetchApi();
  }, [showMore]);

  return (
    <div className="p-4 w-75 bg-[#FFFFFF] rounded-md">
      <div className="flex items-center">
        <FilterOutlined className="mr-2 text-xl align-middle" />
        <span className="font-bold">BỘ LỌC TÌM KIẾM</span>
      </div>

      <div className="mb-3">
        <div className="font-medium mb-1">Nơi Bán</div>
        <div className="flex flex-col gap-1">
          {provinces.length ? (
            <>
              {provinces.map((province) => (
                <div key={province.id}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {province.name}
                  </label>
                </div>
              ))}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShowMore((prev) => !prev)}
              >
                <div className="mr-1.5">{showMore ? "Thu gọn" : "Thêm"}</div>
                <DownOutlined
                  className={`text-[10px] align-middle transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </div>
            </>
          ) : (
            <p>Chưa tìm thấy tỉnh hoặc thành phố nào</p>
          )}
        </div>
      </div>
    </div>
  );
};
