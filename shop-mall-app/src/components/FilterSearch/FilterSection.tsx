import { DownOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";

interface FilterSectionProps {
  title: string;
  length: number;
  children: ReactNode;
  showMore?: boolean;
  toggleShowMore?: () => void;
}

export const FilterSection = ({
  title,
  length,
  children,
  showMore,
  toggleShowMore,
}: FilterSectionProps) => {
  return (
    <div className="mb-3 pb-3 border-b border-gray-200 last:border-none">
      <div className="font-medium mb-1">{title}</div>
      <div className="flex flex-col gap-1">
        {children}
        {toggleShowMore && (
          <div
            className={`${length > 3 ? "flex items-center cursor-pointer" : "hidden"}`}
            onClick={toggleShowMore}
          >
            <div className="mr-1.5">{showMore ? "Thu gọn" : "Thêm"}</div>
            <DownOutlined
              className={`text-[10px] align-middle transition-transform ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
