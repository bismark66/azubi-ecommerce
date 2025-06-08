import React, { useState } from "react";
import { Group, Text, Box } from "@mantine/core";
import AppButton from "../atoms/AppButton";

type QuantitySelectorProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
  [key: string]: any;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
  ...props
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <Group
      bg={"tertiary.3"}
      c={"dimmed"}
      style={{
        // backgroundColor: "#F1F1F1",
        // width: 120,
        // height: 48,
        ...props.style,
      }}
      {...props}
      preventGrowOverflow
    >
      <AppButton
        variant="subtle"
        color="gray"
        handleClick={handleDecrement}
        disabled={quantity <= min}
        style={{
          backgroundColor: "transparent",
          color: quantity <= min ? "#CCCCCC" : "#000000",
          border: "none",
          //   width: 40,
          //   height: 48,
          fontSize: 16,
          fontWeight: 700,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: quantity <= min ? "not-allowed" : "pointer",
          transition: "opacity 0.2s ease",
        }}
        buttonProps={{
          onMouseEnter: (e: React.MouseEvent) => {
            if (quantity > min) {
              (e.target as HTMLElement).style.opacity = "0.7";
            }
          },
          onMouseLeave: (e: React.MouseEvent) => {
            (e.target as HTMLElement).style.opacity = "1";
          },
        }}
      >
        −
      </AppButton>

      <Box
        style={{
          backgroundColor: "transparent",
          //   width: 40,
          //   height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#000000",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          {quantity}
        </Text>
      </Box>

      <AppButton
        variant="subtle"
        color="gray"
        handleClick={handleIncrement}
        disabled={quantity >= max}
        style={{
          backgroundColor: "transparent",
          color: quantity >= max ? "#CCCCCC" : "#000000",
          border: "none",
          //   width: 40,
          //   height: 48,
          fontSize: 16,
          fontWeight: 700,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: quantity >= max ? "not-allowed" : "pointer",
          transition: "opacity 0.2s ease",
        }}
        buttonProps={{
          onMouseEnter: (e: React.MouseEvent) => {
            if (quantity > min) {
              (e.target as HTMLElement).style.opacity = "0.7";
            }
          },
          onMouseLeave: (e: React.MouseEvent) => {
            (e.target as HTMLElement).style.opacity = "1";
          },
        }}
      >
        +
      </AppButton>
    </Group>
  );
};

export default QuantitySelector;
