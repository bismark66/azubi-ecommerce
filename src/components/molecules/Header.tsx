import { IconShoppingCart } from "@tabler/icons-react";
import {
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  Paper,
  Popover,
  ScrollArea,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "../../styles/Header.module.css";
import CheckoutSuccessModal from "../organisms/CheckoutModal";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartItemProps = {
  item: CartItem;
  onQuantityChange: (id: number, newQuantity: number) => void;
};

function CartItem({ item, onQuantityChange }: CartItemProps) {
  return (
    <Group justify="space-between" align="center" wrap="nowrap">
      <Group gap="md" wrap="nowrap">
        <Image
          src={item.image}
          alt={item.name}
          w={64}
          h={64}
          radius="md"
          fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='%23ddd'%3E%3Crect width='64' height='64'/%3E%3C/svg%3E"
        />
        <Stack gap={4}>
          <Text size="sm" fw={700} c="dark">
            {item.name}
          </Text>
          <Text size="sm" c="dimmed">
            $ {item.price.toLocaleString()}
          </Text>
        </Stack>
      </Group>

      <Group gap="xs" wrap="nowrap">
        <Button
          variant="light"
          size="xs"
          w={32}
          h={32}
          p={0}
          color="gray"
          onClick={() =>
            onQuantityChange(item.id, Math.max(0, item.quantity - 1))
          }
        >
          -
        </Button>
        <Text size="sm" fw={700} miw={20} ta="center">
          {item.quantity}
        </Text>
        <Button
          variant="light"
          size="xs"
          w={32}
          h={32}
          p={0}
          color="gray"
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </Group>
    </Group>
  );
}

export default function AppHeader() {
  const theme = useMantineTheme();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [successModalOpened, setSuccessModalOpened] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const loadCartItems = () => {
      try {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart)) {
            setCartItems(parsedCart);
          }
        }
      } catch (error) {
        console.error("Failed to parse cart items from localStorage", error);
        // Clear invalid cart data
        // localStorage.removeItem("cart");
      }
    };

    loadCartItems();
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage", error);
    }
  }, [cartItems]);

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedItems =
      newQuantity === 0
        ? cartItems.filter((item) => item.id !== id)
        : cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          );

    setCartItems(updatedItems);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    setCartOpened(false);
    setSuccessModalOpened(true);
    // setCartItems([]); // Clear cart after checkout
  };

  useEffect(() => {
    if (cartOpened) {
      // Always reload cart from localStorage when cart is opened
      try {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart)) {
            setCartItems(parsedCart);
          }
        }
      } catch (error) {
        console.error("Failed to parse cart items from localStorage", error);
        // localStorage.removeItem("cart");
      }
    }
  }, [cartOpened]);

  return (
    <Container fluid className={classes.wrapper}>
      <Container size={"lg"} className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* Header content */}
          <Text fw={700} size="xl">
            audiophile
          </Text>

          {/* Navigation links */}
          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/headphones"
              className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
              }
            >
              Headphones
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
              }
            >
              Speakers
            </NavLink>
            <NavLink
              to="/earphones"
              className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
              }
            >
              Earphones
            </NavLink>
          </Group>

          {/* Cart button and popover */}
          <Group visibleFrom="sm">
            <Popover
              width={400}
              position="bottom-end"
              shadow="md"
              opened={cartOpened}
              onChange={setCartOpened}
            >
              <Popover.Target>
                <Button
                  variant="transparent"
                  onClick={() => setCartOpened((o) => !o)}
                  p={0}
                >
                  <IconShoppingCart color={theme.colors.dark[0]} />
                  {cartItems.length > 0 && (
                    <Text size="xs" c="orange" ml={4}>
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </Text>
                  )}
                </Button>
              </Popover.Target>

              <Popover.Dropdown>
                <Paper p="md" style={{ width: "100%" }}>
                  <Group justify="space-between" mb="lg">
                    <Text size="lg" fw={700}>
                      CART (
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </Text>
                    {cartItems.length > 0 && (
                      <Button
                        variant="subtle"
                        size="sm"
                        color="gray"
                        onClick={handleRemoveAll}
                        styles={{
                          root: {
                            textDecoration: "underline",
                            fontWeight: 500,
                          },
                        }}
                      >
                        Remove all
                      </Button>
                    )}
                  </Group>

                  <Box style={{ flex: 1 }}>
                    {cartItems.length === 0 ? (
                      <Text c="dimmed" ta="center" py="xl">
                        Your cart is empty
                      </Text>
                    ) : (
                      <Stack gap="lg" mb="xl">
                        {cartItems.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            onQuantityChange={handleQuantityChange}
                          />
                        ))}
                      </Stack>
                    )}
                  </Box>

                  {cartItems.length > 0 && (
                    <>
                      <Group justify="space-between" mb="lg">
                        <Text size="sm" tt="uppercase" c="dimmed">
                          Total
                        </Text>
                        <Text size="lg" fw={700}>
                          $ {total.toLocaleString()}
                        </Text>
                      </Group>

                      <Button
                        fullWidth
                        size="md"
                        color="orange"
                        onClick={handleCheckout}
                        styles={{
                          root: {
                            backgroundColor: "#D87D4A",
                            "&:hover": {
                              backgroundColor: "#FBAF85",
                            },
                          },
                        }}
                      >
                        CHECKOUT
                      </Button>
                    </>
                  )}
                </Paper>
              </Popover.Dropdown>
            </Popover>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          {/* Mobile navigation links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            onClick={closeDrawer}
          >
            Home
          </NavLink>
          <NavLink
            to="/headphones"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            onClick={closeDrawer}
          >
            Headphones
          </NavLink>
          <NavLink
            to="/speakers"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            onClick={closeDrawer}
          >
            Speakers
          </NavLink>
          <NavLink
            to="/earphones"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            onClick={closeDrawer}
          >
            Earphones
          </NavLink>

          <Button
            variant="transparent"
            fullWidth
            leftSection={<IconShoppingCart />}
          >
            Cart
          </Button>
        </ScrollArea>
      </Drawer>

      {/* Checkout success modal */}
      <CheckoutSuccessModal
        opened={successModalOpened}
        onClose={() => setSuccessModalOpened(false)}
      />
    </Container>
  );
}