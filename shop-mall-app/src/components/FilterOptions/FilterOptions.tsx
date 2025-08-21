import React, { useRef, useState, useEffect } from "react";
import { Button, Tag, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const FilterBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {showLeft && (
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={scrollLeft}
          style={{ position: "absolute", left: 0, zIndex: 10 }}
        />
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          gap: 8,
          padding: "0 40px", // chừa chỗ cho nút
        }}
      >
        <Space>
          <Tag>Thương hiệu</Tag>
          <Tag>Nhà cung cấp</Tag>
          <Tag>Đánh giá</Tag>
          <Tag>Giá</Tag>
          <Tag>Giao nhanh</Tag>
          <Tag>Màu sắc</Tag>
          <Tag>Kích thước</Tag>
          <Tag>Khuyến mãi</Tag>
          <Tag>Hàng mới</Tag>
          <Tag>Xu hướng</Tag>
        </Space>
      </div>

      {showRight && (
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={scrollRight}
          style={{ position: "absolute", right: 0, zIndex: 10 }}
        />
      )}
    </div>
  );
};
