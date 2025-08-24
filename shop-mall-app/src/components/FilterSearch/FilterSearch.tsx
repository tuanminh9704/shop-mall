import type { Province } from "../../interfaces/provinces";
import type { Brand } from "../../interfaces/brands";

import { useState, useEffect } from "react";
import { getAllProvinces } from "../../services/provinces";
import { getAllBrands } from "../../services/brand";
import { FilterSection } from "./FilterSection";
import { useSearchParams } from "react-router-dom";

export const FilterSearch = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const [selectedProvinces, setSelectedProvinces] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const [showMoreProvince, setShowMoreProvince] = useState(false);
  const [showMoreBrand, setShowMoreBrand] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  // this useEffect function catch with change of button show more
  useEffect(() => {
    const fetchApi = async () => {
      const provinceRecords = await getAllProvinces();
      setProvinces(
        showMoreProvince ? provinceRecords : provinceRecords.slice(0, 4)
      );

      const brandRecords = await getAllBrands();
      setBrands(showMoreBrand ? brandRecords : brandRecords.slice(0, 4));
    };
    fetchApi();
  }, [showMoreProvince, showMoreBrand]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    if (selectedProvinces.length > 0) {
      params.provinces = selectedProvinces.join(",");
    } else {
      delete params.provinces; // delete it if this on is empty
    }

    if (selectedBrands.length > 0) {
      params.brands = selectedBrands.join(",");
    } else {
      delete params.brands;
    }

    setSearchParams(params);
  }, [selectedProvinces, selectedBrands, setSearchParams]);

  const handleProvinceChange = (id: number) => {
    setSelectedProvinces((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleBrandChange = (id: number) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 w-75 bg-[#FFFFFF] rounded-md">
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
                <input
                  type="checkbox"
                  checked={selectedProvinces.includes(province.id)}
                  onChange={() => handleProvinceChange(province.id)}
                />
                {province.name}
              </label>
            </div>
          ))
        ) : (
          <p>Chưa tìm thấy tỉnh hoặc thành phố nào</p>
        )}
      </FilterSection>

      <FilterSection
        title="Thương Hiệu"
        length={brands.length}
        showMore={showMoreBrand}
        toggleShowMore={() => setShowMoreBrand((prev) => !prev)}
      >
        {brands.length ? (
          brands.map((brand) => (
            <div key={brand.id}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandChange(brand.id)}
                />
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
