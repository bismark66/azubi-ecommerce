import React, { useState } from "react";
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
  Group,
  Flex,
  Box,
  Divider,
  Avatar,
} from "@mantine/core";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  const orderItems = [
    {
      id: 1,
      name: "XX99 MK II",
      price: 2999,
      quantity: 1,
      image: "🎧",
    },
    {
      id: 2,
      name: "XX59",
      price: 899,
      quantity: 2,
      image: "🎧",
    },
    {
      id: 3,
      name: "YX1",
      price: 599,
      quantity: 1,
      image: "🎧",
    },
  ];

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  return (
    <Container
      size="xl"
      py="xl"
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
        <Grid.Col span={8}>
          <Card padding="xl" radius="md" style={{ backgroundColor: "white" }}>
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
                weight={700}
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
                <Grid.Col span={6}>
                  <TextInput
                    label="Name"
                    placeholder="Alexei Ward"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Email Address"
                    placeholder="alexei@mail.com"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
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
                weight={700}
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
                <Grid.Col span={6}>
                  <TextInput
                    label="ZIP Code"
                    placeholder="10001"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="City"
                    placeholder="New York"
                    styles={{
                      label: { fontWeight: 700, marginBottom: 8 },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
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
                weight={700}
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
                <Grid.Col span={6}>
                  <Text weight={700} size="sm" mb="sm">
                    Payment Method
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Stack spacing="xs">
                    <Radio
                      value="e-money"
                      label="e-Money"
                      checked={paymentMethod === "e-money"}
                      onChange={(event) =>
                        setPaymentMethod(event.currentTarget.value)
                      }
                      styles={{
                        radio: { borderColor: "#D87D4A" },
                        label: { fontWeight: 700 },
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
                        radio: { borderColor: "#D87D4A" },
                        label: { fontWeight: 700 },
                      }}
                    />
                  </Stack>
                </Grid.Col>

                {paymentMethod === "e-money" && (
                  <>
                    <Grid.Col span={6}>
                      <TextInput
                        label="e-Money Number"
                        placeholder="238521993"
                        styles={{
                          label: { fontWeight: 700, marginBottom: 8 },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
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
        <Grid.Col span={4}>
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
            <Stack spacing="md" mb="xl">
              {orderItems.map((item) => (
                <Flex key={item.id} justify="space-between" align="center">
                  <Flex align="center" gap="md">
                    <Box
                      style={{
                        width: 64,
                        height: 64,
                        backgroundColor: "#F1F1F1",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                      }}
                    >
                      {item.image}
                    </Box>
                    <Box>
                      <Text weight={700} size="sm">
                        {item.name}
                      </Text>
                      <Text size="sm" color="dimmed">
                        ${item.price.toLocaleString()}
                      </Text>
                    </Box>
                  </Flex>
                  <Text weight={700} size="sm" color="dimmed">
                    x{item.quantity}
                  </Text>
                </Flex>
              ))}
            </Stack>

            {/* Price Breakdown */}
            <Stack spacing="xs" mb="xl">
              <Flex justify="space-between">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  Total
                </Text>
                <Text weight={700}>${total.toLocaleString()}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  Shipping
                </Text>
                <Text weight={700}>${shipping}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  VAT (Included)
                </Text>
                <Text weight={700}>${vat.toLocaleString()}</Text>
              </Flex>
              <Flex justify="space-between" mt="md">
                <Text size="sm" style={{ textTransform: "uppercase" }}>
                  Grand Total
                </Text>
                <Text weight={700} style={{ color: "#D87D4A" }}>
                  ${grandTotal.toLocaleString()}
                </Text>
              </Flex>
            </Stack>

            {/* Continue & Pay Button */}
            <Button
              fullWidth
              size="md"
              style={{
                backgroundColor: "#D87D4A",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
                padding: "16px",
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: "#C5663A",
                  },
                },
              }}
            >
              Continue & Pay
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Checkout;
