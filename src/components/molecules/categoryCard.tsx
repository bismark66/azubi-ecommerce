import React from "react";
import { Center } from "@mantine/core";

type CategoryCardProps = {
  image?: string;
  title: string;
  onShopClick?: React.MouseEventHandler<HTMLButtonElement>;
  imageBackground?: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  onShopClick,
  imageBackground = "#f8f9fa",
}) => {
  return (
    <div
      style={{
        width: "350px",
        height: "284px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Floating Image */}
      <Center
        style={{
          position: "absolute",
          top: "8px", // Positions image 24px from top (284px total - 204px content - 160px image = 80px overlap)
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "123px",
            height: "146px",
            backgroundColor: imageBackground,
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image || "https://via.placeholder.com/123x160"}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Center>

      {/* Content Section */}
      <div
        style={{
          height: "204px",
          width: "100%",
          backgroundColor: "#e9e9e9",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          //   paddingBottom: "24px",
          position: "relative",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "2px",
            margin: "0 0 16px 0",
            color: "#2c2c2c",
            fontFamily: "'Segoe UI', Roboto, sans-serif",
          }}
        >
          {title}
        </h3>

        <button
          onClick={onShopClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#666",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "1px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "4px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.backgroundColor = "#f5f5f5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#666";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          SHOP
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
