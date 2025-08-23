import type { Province } from "../../interfaces/provinces";
import type { Brand } from "../../interfaces/brands";

import { FilterOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllProvinces } from "../../services/provinces";
import { FilterSection } from "./FilterSection";
import { getAllBrands } from "../../services/brand";

export const FilterSearch = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const [showMoreProvince, setShowMoreProvince] = useState(false);
  const [showMoreBrand, setShowMoreBrand] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const provinceRecords = await getAllProvinces();
        setProvinces(
          showMoreProvince ? provinceRecords : provinceRecords.slice(0, 4)
        );

        const brandRecords = await getAllBrands();
        setBrands(showMoreBrand ? brandRecords : brandRecords.slice(0, 4));
      } catch (error) {
        console.log("[ERROR]: ", error);
      }
    };
    fetchApi();
  }, [showMoreProvince, showMoreBrand]);

  return (
    <div className="p-4 w-75 bg-[#FFFFFF] rounded-md">
      <div className="flex items-center mb-3">
        <FilterOutlined className="mr-2 text-xl align-middle" />
        <span className="font-bold">BỘ LỌC TÌM KIẾM</span>
      </div>

      <FilterSection
        title="Nơi Bán"
        length={provinces.length}
        showMore={showMoreProvince}
        toggleShowMore={() => setShowMoreProvince((prev) => !prev)}
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
      <FilterSection
        title="Nơi Bán"
        length={brands.length}
        showMore={showMoreProvince}
        toggleShowMore={() => setShowMoreBrand((prev) => !prev)}
      >
        {brands.length ? (
          brands.map((brand) => (
            <div key={brand.id}>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                {brand.name}
              </label>
            </div>
          ))
        ) : (
          <p>Chưa tìm thấy thương hiệu nào</p>
        )}
      </FilterSection>
    </div>
  );
};
