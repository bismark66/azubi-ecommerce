import React from "react";
import { Button } from "@mantine/core";
import type { ButtonProps } from "@mantine/core";

interface AppButtonProps extends ButtonProps {
  handleClick?: () => void;
}

function AppButton({ children, handleClick, ...props }: AppButtonProps) {
  return (
    <Button variant="filled" color="secondary" {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}

export default AppButton;
