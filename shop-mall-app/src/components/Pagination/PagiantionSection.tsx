import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

export const PaginationSection = ({ pagination }: any) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <div>
      <Pagination
        align="center"
        size="default"
        defaultCurrent={pagination?.page || 1}
        total={pagination.total}
        pageSize={pagination.pageSize}
        className="[&_.ant-pagination-item]:w-12 [&_.ant-pagination-item]:h-12 [&_.ant-pagination-item>a]:text-lg"
        onChange={(p, ps) => {
          setSearchParams({ page: p.toString(), pageSize: ps.toString() });
        }}
      />
    </div>
  );
};
