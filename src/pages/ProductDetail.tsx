import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Center,
  Container,
  Grid,
  Group,
  List,
  ListItem,
  Text,
  Title,
  //   useMantineTheme,
} from "@mantine/core";
import CategoryCard from "../components/molecules/categoryCard";
import CTA from "../components/molecules/CTA";
import Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import Headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import AppButton from "../components/atoms/AppButton";
import QuantitySelector from "../components/molecules/QuantityButton";
import ProductCard from "../components/molecules/Card";
import productsData from "../data.json";
import { useMediaQuery } from "@mantine/hooks";

function ProductDetail() {
  const { productId } = useParams(); // Get the product ID from URL
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartUpdated, setCartUpdated] = useState(false);
  //   const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: 400px)`);

  // Find the product with matching ID
  const product = productsData.find((item) => item.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.categoryImage.desktop);

  const handleQuantityChange = (newQuantity: React.SetStateAction<number>) => {
    setSelectedQuantity(newQuantity);
  };

  function getImagePath(path: string) {
    return new URL(`${path}`, import.meta.url).href;
  }

  function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  function setCart(cart: any[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function addToCart(product: any, quantity: number) {
    const cart = getCart();
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.categoryImage.desktop,
        quantity,
      });
    }
    setCart(cart);
    setCartUpdated(true);
    setTimeout(() => setCartUpdated(false), 1500);
  }

  return (
    <>
      <Container size="lg">
        <div style={{ height: 50 }}></div>
        <Grid>
          <Grid.Col span={6}>
            <Text
              size="md"
              fw={500}
              c="dimmed"
              style={{ cursor: "pointer" }}
              component="a"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Text>
          </Grid.Col>
        </Grid>
        <div style={{ height: 0 }}></div>
        <Grid gutter="xl" justify="center" align="stretch" maw={1110} mt={100}>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "var(--mantine-spacing-md)",
              minHeight: "400px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 540,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={getImagePath(product.categoryImage.desktop)}
                alt={product.name}
                style={{
                  width: "100%",
                  maxWidth: 291,
                  height: "auto",
                  borderRadius: 12,
                  objectFit: "contain",
                }}
              />
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            style={{
              display: "flex",
              alignItems: "center",
              //   justifyContent: { base: "center", lg: "flex-end" },
              justifyContent: isMobile ? "center" : "flex-end",
              padding: "var(--mantine-spacing-md)",
            }}
          >
            <div style={{ maxWidth: 445, width: "100%" }}>
              {product.new && (
                <Title
                  fw={500}
                  c={"secondary.5"}
                  size={"sm"}
                  tt="capitalize"
                  style={{ letterSpacing: 10 }}
                  mb={20}
                >
                  NEW PRODUCT
                </Title>
              )}
              <Title
                c="primary.5"
                fw={500}
                //   size={{ base: "lg", md: "xl" }}
                size={isMobile ? "lg" : "xl"}
              >
                {product.name.split(" ")[0]}
              </Title>
              <Title c="primary.5" fw={500} size={isMobile ? "lg" : "xl"}>
                {product.name.split(" ").slice(1).join(" ")}
              </Title>
              <Text mt="md" c="dimmed" mb={"md"} size={isMobile ? "lg" : "xl"}>
                {product.description}
              </Text>
              <Text fw={700} size="xl" mb="md">
                ${product.price.toLocaleString()}
              </Text>
              <Group gap="md" wrap="wrap">
                <QuantitySelector
                  initialValue={1}
                  min={1}
                  max={10}
                  onChange={handleQuantityChange}
                />
                <AppButton
                  color="secondary.5"
                  handleClick={() => addToCart(product, selectedQuantity)}
                  style={{ flexGrow: 1, minWidth: "150px" }}
                >
                  ADD TO CART
                </AppButton>
              </Group>
              {cartUpdated && (
                <Text c="green" mt={10} size="sm">
                  Added to cart!
                </Text>
              )}
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: 100 }}></div>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Title fw={400}>FEATURES</Title>
            {product.features.split("\n").map((paragraph, index) => (
              <Text key={index} c={"dimmed"} mt={index > 0 ? 10 : 0}>
                {paragraph}
              </Text>
            ))}
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 6 }}
            style={{
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "center",
              //   justifyItems: "flex-start",
            }}
          >
            <div style={{ maxWidth: 350, maxHeight: 192 }}>
              <Title fw={400}>IN THE BOX</Title>
              <Text c={"dimmed"}>
                <List listStyleType="none">
                  {product.includes.map((item, index) => (
                    <ListItem key={index} p={10}>
                      <span style={{ color: "orange", paddingRight: 20 }}>
                        {item.quantity}x
                      </span>
                      {item.item}
                    </ListItem>
                  ))}
                </List>
              </Text>
            </div>
          </Grid.Col>
        </Grid>

        <div style={{ height: 100 }}></div>

        <Grid justify="space-between" align="flex-start" maw={1110} gutter="xl">
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            style={{ padding: "0 !important" }}
          >
            <Grid
              justify="space-between"
              align="stretch"
              style={{
                padding: "0 !important",
                marginRight: "0 !important",
                height: "100%",
              }}
            >
              <Grid.Col
                span={12}
                style={{
                  padding: "0 !important",
                  marginBottom: "var(--mantine-spacing-xl)",
                }}
              >
                <img
                  src={getImagePath(product.gallery.first.desktop)}
                  alt={`${product.name} gallery 1`}
                  width="100%"
                  style={{
                    borderRadius: 12,
                    display: "block",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />
              </Grid.Col>
              <Grid.Col span={12} style={{ padding: "0 !important" }}>
                <img
                  src={getImagePath(product.gallery.second.desktop)}
                  alt={`${product.name} gallery 2`}
                  width="100%"
                  style={{
                    borderRadius: 12,
                    display: "block",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            style={{ padding: "0 !important" }}
          >
            <img
              src={getImagePath(product.gallery.third.desktop)}
              alt={`${product.name} gallery 3`}
              width="100%"
              style={{
                borderRadius: 12,
                display: "block",
                aspectRatio: "4/5",
                objectFit: "cover",
                height: "100%",
                minHeight: "300px",
              }}
            />
          </Grid.Col>
        </Grid>
        <div style={{ height: 100 }}></div>
        <Grid>
          <Grid.Col span={12} mb={20}>
            <Title c={"primary.5"} fw={500}>
              <Center>YOU MAY ALSO LIKE</Center>
            </Title>
          </Grid.Col>
          <Grid gutter="xl" justify="space-between">
            {product.others.map((otherProduct, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <ProductCard
                  title={otherProduct.name}
                  image={getImagePath(otherProduct.image.desktop)}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid>

        <div style={{ height: 100 }}></div>

        <Grid justify="center" align="center">
          <Grid.Col
            span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              image={Headphones}
              title="HEADPHONES"
              onShopClick={() => {
                navigate("/products/3");
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              image={Speaker}
              title="SPEAKERS"
              onShopClick={() => {
                navigate("/products/6");
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              image={Earphones}
              title="EARPHONES"
              onShopClick={() => {
                navigate("/products/1");
              }}
            />
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
        <CTA />
      </Container>
    </>
  );
}

export default ProductDetail;
