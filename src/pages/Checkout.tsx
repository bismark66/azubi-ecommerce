import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Title,
  Text,
  TextInput,
  Select,
  Radio,
  Button,
  Card,
  Stack,
  Flex,
  Box,
} from "@mantine/core";
import CheckoutSuccessModal from "../components/organisms/CheckoutModal";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        console.log("items in cart", parsedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);

  // Calculate totals based on cart items
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  function getImagePath(path: string) {
    return new URL(`${path}`, import.meta.url).href;
  }

  const handleCheckout = () => {
    setCartOpened(false);
    setSuccessModalOpened(true);
  };

  return (
    <Container
      size="xl"
      py="xl"
      px="md"
      style={{ backgroundColor: "#F2F2F2", minHeight: "100vh" }}
    >
      <Button
        variant="subtle"
        size="sm"
        mb="xl"
        style={{ color: "#666", padding: 0, fontWeight: 400 }}
      >
        Go Back
      </Button>

      <Grid gutter="xl">
        {/* Left Column - Checkout Form */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card
            padding="xl"
            radius="md"
            style={{ backgroundColor: "white", minHeight: "400px" }}
          >
            <Title
              order={1}
              size="2rem"
              mb="xl"
              style={{ fontWeight: 700, letterSpacing: "1px" }}
            >
              CHECKOUT
            </Title>

            {/* Billing Details */}
            <Box mb="xl">
              <Text
                size="sm"
                fw={700}
                mb="md"
                style={{
                  color: "#D87D4A",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Billing Details
              </Text>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Name"
                    placeholder="Alexei Ward"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Email Address"
                    placeholder="alexei@mail.com"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Phone Number"
                    placeholder="+1 202-555-0136"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Box>

            {/* Shipping Info */}
            <Box mb="xl">
              <Text
                size="sm"
                fw={700}
                mb="md"
                style={{
                  color: "#D87D4A",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Shipping Info
              </Text>

              <Grid gutter="md">
                <Grid.Col span={12}>
                  <TextInput
                    label="Address"
                    placeholder="1137 Williams Avenue"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="ZIP Code"
                    placeholder="10001"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="City"
                    placeholder="New York"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Country"
                    placeholder="United States"
                    data={["United States", "Canada", "United Kingdom"]}
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Box>

            {/* Payment Details */}
            <Box>
              <Text
                size="sm"
                fw={700}
                mb="md"
                style={{
                  color: "#D87D4A",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Payment Details
              </Text>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Text fw={700} size="sm" mb="sm">
                    Payment Method
                  </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Stack>
                    <Radio
                      value="e-money"
                      label="e-Money"
                      checked={paymentMethod === "e-money"}
                      onChange={(event) =>
                        setPaymentMethod(event.currentTarget.value)
                      }
                      styles={{
                        root: {
                          border: "1px solid #CFCFCF",
                          borderRadius: "8px",
                          padding: "18px 16px",
                          "&:hover": {
                            borderColor: "#D87D4A",
                          },
                        },
                        radio: {
                          borderColor: "#CFCFCF",
                          "&:checked": {
                            backgroundColor: "#D87D4A",
                            borderColor: "#D87D4A",
                          },
                        },
                        label: {
                          fontWeight: 700,
                          paddingLeft: "16px",
                        },
                      }}
                    />
                    <Radio
                      value="cash"
                      label="Cash on Delivery"
                      checked={paymentMethod === "cash"}
                      onChange={(event) =>
                        setPaymentMethod(event.currentTarget.value)
                      }
                      styles={{
                        root: {
                          border: "1px solid #CFCFCF",
                          borderRadius: "8px",
                          padding: "18px 16px",
                          "&:hover": {
                            borderColor: "#D87D4A",
                          },
                        },
                        radio: {
                          borderColor: "#CFCFCF",
                          "&:checked": {
                            backgroundColor: "#D87D4A",
                            borderColor: "#D87D4A",
                          },
                        },
                        label: {
                          fontWeight: 700,
                          paddingLeft: "16px",
                        },
                      }}
                    />
                  </Stack>
                </Grid.Col>

                {paymentMethod === "e-money" && (
                  <>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="e-Money Number"
                        placeholder="238521993"
                        styles={{
                          label: { fontWeight: 700, marginBottom: 8 },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="e-Money PIN"
                        placeholder="6891"
                        styles={{
                          label: { fontWeight: 700, marginBottom: 8 },
                        }}
                      />
                    </Grid.Col>
                  </>
                )}
              </Grid>
            </Box>
          </Card>
        </Grid.Col>

        {/* Right Column - Order Summary */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card padding="xl" radius="md" style={{ backgroundColor: "white" }}>
            <Title
              order={2}
              size="1.2rem"
              mb="xl"
              style={{ fontWeight: 700, letterSpacing: "1px" }}
            >
              SUMMARY
            </Title>

            {/* Order Items */}
            {cartItems.length > 0 ? (
              <Stack mb="xl" gap="sm">
                {cartItems.map((item) => (
                  <Flex key={item.id} justify="space-between" align="center">
                    <Flex align="center" gap="md">
                      <img
                        src={getImagePath(item.image ?? "")}
                        alt={item.name}
                        width={64}
                        height={64}
                      />
                      <Box>
                        <Text fw={300} size="sm">
                          {item.name}
                        </Text>
                        <Text size="sm" color="dimmed">
                          ${item.price.toLocaleString()}
                        </Text>
                      </Box>
                    </Flex>
                    <Text fw={700} size="sm" color="dimmed">
                      x{item.quantity || 1}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            ) : (
              <Text size="sm" color="dimmed" mb="xl" ta="center">
                Your cart is empty
              </Text>
            )}

            {/* Price Breakdown */}
            <Stack mb="xl">
              <Flex justify="space-between">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  Total
                </Text>
                <Text fw={700}>${total.toLocaleString()}</Text>
              </Flex>
              <Flex justify="space-between">
                <Box>
                  <Text size="sm" style={{ textTransform: "uppercase" }}>
                    Shipping
                  </Text>
                  <Text
                    size="xs"
                    color="dimmed"
                    style={{ fontStyle: "italic" }}
                  >
                    Fixed shipping cost
                  </Text>
                </Box>
                <Text fw={700}>${shipping}</Text>
              </Flex>
              <Flex justify="space-between">
                <Box>
                  <Text size="sm" style={{ textTransform: "uppercase" }}>
                    VAT (Included)
                  </Text>
                  <Text
                    size="xs"
                    color="dimmed"
                    style={{ fontStyle: "italic" }}
                  >
                    20% of product total
                  </Text>
                </Box>
                <Text fw={700}>${vat.toLocaleString()}</Text>
              </Flex>
              <Flex justify="space-between" mt="md">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  Grand Total
                </Text>
                <Text fw={700} style={{ color: "#D87D4A" }}>
                  ${grandTotal.toLocaleString()}
                </Text>
              </Flex>
            </Stack>

            {/* Continue & Pay Button */}
            <Button
              fullWidth
              size="md"
              disabled={cartItems.length === 0}
              style={{
                backgroundColor: cartItems.length === 0 ? "#ccc" : "#D87D4A",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
                padding: "13px",
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor:
                      cartItems.length === 0 ? "#ccc" : "#C5663A",
                  },
                },
              }}
              onClick={handleCheckout}
            >
              Continue & Pay
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

      <CheckoutSuccessModal
        opened={successModalOpened}
        onClose={() => setSuccessModalOpened(false)}
      />
    </Container>
  );
};

export default Checkout;
