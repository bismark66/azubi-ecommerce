import React from "react";
import {
  Modal,
  Text,
  Group,
  Stack,
  Button,
  Image,
  Box,
  Paper,
  ThemeIcon,
  Divider,
  Grid,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderSummaryItemProps {
  item: CartItem;
  isMainItem?: boolean;
}

function OrderSummaryItem({ item, isMainItem = false }: OrderSummaryItemProps) {
  return (
    <Group justify="space-between" align="center" wrap="nowrap">
      <Group gap="sm" wrap="nowrap">
        <Image
          src={item.image || ""}
          alt={item.name}
          w={50}
          h={50}
          radius="md"
          fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='%23ddd'%3E%3Crect width='50' height='50'/%3E%3C/svg%3E"
        />
        <Stack gap={2}>
          <Text size="sm" fw={700} c="dark" lineClamp={1}>
            {item.name}
          </Text>
          <Text size="xs" c="dimmed">
            $ {item.price.toLocaleString()}
          </Text>
        </Stack>
      </Group>

      <Text size="sm" c="dimmed" fw={500}>
        x{item.quantity}
      </Text>
    </Group>
  );
}

export default function CheckoutSuccessModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Get cart data from localStorage and parse it
  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  console.log("---", cartItems);

  // Calculate grand total
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBackToHome = () => {
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={null}
      size={isMobile ? "full" : "lg"}
      fullScreen={isMobile}
      centered={!isMobile}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      styles={{
        modal: {
          padding: 0,
        },
        header: {
          display: "none",
        },
        body: {
          padding: 0,
        },
      }}
    >
      <Paper
        radius={isMobile ? 0 : "md"}
        p={isMobile ? "md" : "xl"}
        style={{
          minHeight: isMobile ? "100vh" : "auto",
        }}
      >
        <Stack gap="xl">
          {/* Success Icon */}
          <ThemeIcon
            size={64}
            radius="xl"
            color="orange"
            variant="filled"
            styles={{
              root: {
                backgroundColor: "#D87D4A",
                alignSelf: "flex-start",
              },
            }}
          >
            <IconCheck size={32} stroke={3} />
          </ThemeIcon>

          {/* Success Message */}
          <Stack gap="md">
            <Text size={isMobile ? "xl" : "2rem"} fw={700} lh={1.2}>
              THANK YOU
              <br />
              FOR YOUR ORDER
            </Text>
            <Text c="dimmed" size="sm">
              You will receive an email confirmation shortly.
            </Text>
          </Stack>

          {/* Order Summary */}
          <Paper
            radius="md"
            style={{
              overflow: "hidden",
              border: "1px solid #e9ecef",
            }}
          >
            <Grid gutter={0}>
              {/* Items Section */}
              <Grid.Col span={isMobile ? 12 : 8}>
                <Box p="md" style={{ backgroundColor: "#f8f9fa" }}>
                  <Stack gap="md">
                    {/* Show first item if exists */}
                    {cartItems.length > 0 && (
                      <>
                        <OrderSummaryItem
                          item={cartItems[0]}
                          isMainItem={true}
                        />
                        {/* Show other items count if more than 1 */}
                        {cartItems.length > 1 && (
                          <>
                            <Divider color="#e9ecef" />
                            <Text size="xs" c="dimmed" ta="center" fw={500}>
                              and {cartItems.length - 1} other item(s)
                            </Text>
                          </>
                        )}
                      </>
                    )}
                  </Stack>
                </Box>
              </Grid.Col>

              {/* Total Section */}
              <Grid.Col span={isMobile ? 12 : 4}>
                <Box
                  p="md"
                  h="100%"
                  style={{
                    backgroundColor: "#000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Stack
                    gap="xs"
                    align={isMobile ? "flex-start" : "flex-start"}
                  >
                    <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
                      Grand Total
                    </Text>
                    <Text size="lg" fw={700} c="white">
                      $ {grandTotal.toLocaleString()}
                    </Text>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Paper>

          {/* Back to Home Button */}
          <Button
            fullWidth
            size="md"
            onClick={handleBackToHome}
            styles={{
              root: {
                backgroundColor: "#D87D4A",
                "&:hover": {
                  backgroundColor: "#FBAF85",
                },
                marginTop: rem(16),
              },
            }}
          >
            BACK TO HOME
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
}
