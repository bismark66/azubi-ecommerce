import React from "react";
import { Button } from "@mantine/core";
import type { ButtonProps } from "@mantine/core";

interface AppButtonProps extends ButtonProps {
  handleClick?: () => void;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}

function AppButton({
  children,
  handleClick,
  buttonProps = {},
  ...props
}: AppButtonProps) {
  return (
    <Button
      variant="filled"
      color="secondary"
      {...props}
      {...buttonProps} // Spread buttonProps after props to allow overrides
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export default AppButton;