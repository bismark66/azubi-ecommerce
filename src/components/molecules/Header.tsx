import { IconShoppingCart } from "@tabler/icons-react";
import {
  Badge,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Image,
  Menu,
  Paper,
  ScrollArea,
  Stack,
  Text,
  //   useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "../../styles/Header.module.css";
// import CheckoutSuccessModal from "../organisms/CheckoutModal";
import { useNavigate } from "react-router-dom";

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
  //   const theme = useMantineTheme();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  //   const [cartOpened, setCartOpened] = useState(false);
  //   const [successModalOpened, setSuccessModalOpened] = useState(false);

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedItems =
      newQuantity === 0
        ? cartItems.filter((item) => item.id !== id)
        : cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleRemoveAll = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const handleCheckout = () => {
    // setCartOpened(true);
    // setSuccessModalOpened(true);
    // setCartItems([]);
    // localStorage.setItem("cart", JSON.stringify([]));
    navigate("/checkout");
  };

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
    }
  };

  useEffect(() => {
    loadCartItems();
  }, []);
  //   useEffect(() => {
  //     if (cartOpened) {
  //       try {
  //         const storedCart = localStorage.getItem("cart");
  //         if (storedCart) {
  //           const parsedCart = JSON.parse(storedCart);
  //           if (Array.isArray(parsedCart)) {
  //             setCartItems(parsedCart);
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Failed to parse cart items from localStorage", error);
  //       }
  //     }
  //   }, [cartOpened]);

  return (
    <Container fluid className={classes.wrapper}>
      <Container size={"lg"} className={classes.header}>
        <Group justify="space-between" h="100%" wrap="nowrap">
          {/* Logo - takes 20% width */}
          <Box className={classes.logoContainer}>
            <Text fw={700} size="xl">
              audiophile
            </Text>
          </Box>

          {/* Desktop navigation - takes 60% width */}
          <Group className={classes.navContainer} visibleFrom="sm">
            <NavLink to="/" className={classes.link}>
              Home
            </NavLink>
            <NavLink to="/headphones" className={classes.link}>
              Headphones
            </NavLink>
            <NavLink to="/speakers" className={classes.link}>
              Speakers
            </NavLink>
            <NavLink to="/earphones" className={classes.link}>
              Earphones
            </NavLink>
          </Group>

          {/* Mobile burger menu - left aligned */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
            className={classes.burger}
          />

          {/* Cart icon with Menu dropdown */}
          <Box className={classes.cartContainer}>
            <Menu
              width={400}
              position="bottom-end"
              shadow="md"
              withinPortal
              offset={10}
              onOpen={loadCartItems}
            >
              <Menu.Target>
                <Button variant="transparent" p={0} pos="relative">
                  <IconShoppingCart color="white" />
                  {cartItemCount > 0 && (
                    <Badge
                      circle
                      size="xs"
                      color="orange"
                      pos="absolute"
                      top={-5}
                      right={-5}
                      variant="filled"
                    >
                      {cartItemCount}
                    </Badge>
                  )}
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Paper p="md" style={{ width: "100%" }}>
                  <Group justify="space-between" mb="lg">
                    <Text size="lg" fw={700}>
                      CART ({cartItemCount})
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
                        // onClick={() => navigate("/checkout")}
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
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="audiophile"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
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
        </ScrollArea>
      </Drawer>

      {/* <CheckoutSuccessModal
        opened={successModalOpened}
        onClose={() => setSuccessModalOpened(false)}
      /> */}
    </Container>
  );
}