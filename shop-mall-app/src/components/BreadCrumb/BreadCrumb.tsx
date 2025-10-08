import type { FC } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

interface BreadCrumbType {
  categoryId: number;
  categoryName: string;
}

interface BreadcrumbProps {
  breadCrumb: BreadCrumbType[];
}

export const BreadCrumb: FC<BreadcrumbProps> = ({ breadCrumb }) => {
  if (!breadCrumb || breadCrumb.length === 0) return null;

  return (
    <nav className="text-[17px] text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadCrumb.map((item, index) => {
          const isLast = index === breadCrumb.length - 1;
          return (
            <li key={item.categoryId} className="flex items-center">
              {isLast ? (
                <span className="text-gray-700 font-medium">
                  {item.categoryName}
                </span>
              ) : (
                <Link
                  to={
                    item.categoryId === 0 ? "/" : `/category/${item.categoryId}`
                  }
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.categoryName}
                </Link>
              )}
              {!isLast && <span className="mx-2 text-gray-400"> <IoIosArrowForward /></span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
