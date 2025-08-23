import { DownOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  showMore?: boolean;
  toggleShowMore?: () => void;
}

export const FilterSection = ({
  title,
  children,
  showMore,
  toggleShowMore,
}: FilterSectionProps) => {
  return (
    <div className="mb-3">
      <div className="font-medium mb-1">{title}</div>
      <div className="flex flex-col gap-1">
        {children}
        {toggleShowMore && (
          <div
            className="flex items-center cursor-pointer"
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
