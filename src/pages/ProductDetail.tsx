import React, { useState } from "react";
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
} from "@mantine/core";
import CategoryCard from "../components/molecules/categoryCard";
import CTA from "../components/molecules/CTA";
import Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import Headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import AppButton from "../components/atoms/AppButton";
import QuantitySelector from "../components/molecules/QuantityButton";
import ProductCard from "../components/molecules/Card";
import WhiteHeadphone from "../assets/shared/desktop/whiteHeadphones.png";
import productsData from "../data.json"; // Import your JSON data
import imgs from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
function ProductDetail() {
  const { productId } = useParams(); // Get the product ID from URL
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  //   console.log(id);
  console.log(productsData.find((item) => item.id === Number(2)));
  // Find the product with matching ID
  const product = productsData.find((item) => item.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.categoryImage.desktop);

  const handleQuantityChange = (newQuantity: React.SetStateAction<number>) => {
    setSelectedQuantity(newQuantity);
    console.log("Quantity changed to:", newQuantity);
  };

  function getImagePath(path: string) {
    return new URL(`${path}`, import.meta.url).href;
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
        <Grid
          gutter="xl"
          justify="center"
          align="center"
          maw={1110}
          mah={560}
          style={{ overflow: "hidden" }}
          mt={100}
        >
          <Grid.Col
            span={6}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <div
              style={{
                width: 540,
                height: "560px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={getImagePath(product.categoryImage.desktop)} // Use the product image from data
                alt={product.name}
                width={291}
                style={{
                  maxWidth: 292,
                  height: "350",
                  borderRadius: 12,
                }}
              />
            </div>
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingLeft: "var(--mantine-spacing-xl)",
            }}
          >
            <div style={{ maxWidth: 445 }}>
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
              <Title c="primary.5" fw={500}>
                {product.name.split(" ")[0]}
              </Title>
              <Title c="primary.5" fw={500}>
                {product.name.split(" ").slice(1).join(" ")}
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                {product.description}
              </Text>
              <Text fw={700} size="xl" mb="md">
                ${product.price.toLocaleString()}
              </Text>
              <Group>
                <QuantitySelector
                  initialValue={1}
                  min={1}
                  max={10}
                  onChange={handleQuantityChange}
                />
                <AppButton color="secondary.5">ADD TO CART</AppButton>
              </Group>
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: 100 }}></div>
        <Grid>
          <Grid.Col span={6}>
            <Title fw={400}>FEATURES</Title>
            {product.features.split("\n").map((paragraph, index) => (
              <Text key={index} c={"dimmed"} mt={index > 0 ? 10 : 0}>
                {paragraph}
              </Text>
            ))}
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{ display: "flex", justifyContent: "center" }}
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

        <Grid
          justify="space-between"
          align="center"
          maw={1110}
          mah={592}
          gutter={"xl"}
        >
          <Grid.Col span={6} style={{ padding: "0 !important" }}>
            <Grid
              mah={"100%"}
              justify="space-between"
              align="space-between"
              style={{ padding: "0 !important", marginRight: "0 !important" }}
            >
              <Grid.Col span={12} h={280} style={{ padding: "0 !important" }}>
                <img
                  src={getImagePath(product.gallery.first.desktop)}
                  alt={`${product.name} gallery 1`}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: 12,
                  }}
                />
              </Grid.Col>
              <Grid.Col span={12} h={280} style={{ padding: "0 !important" }}>
                <img
                  src={getImagePath(product.gallery.second.desktop)}
                  alt={`${product.name} gallery 2`}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: 12,
                  }}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={6} w={635}>
            <img
              src={getImagePath(product.gallery.third.desktop)}
              alt={`${product.name} gallery 3`}
              width={"100%"}
              height={592}
              style={{
                borderRadius: 12,
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
              <Grid.Col key={index} span={4}>
                <ProductCard
                  title={otherProduct.name}
                  image={getImagePath(otherProduct.image.desktop)}
                  slug={otherProduct.slug}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid>

        <div style={{ height: 100 }}></div>

        <Grid justify="center" align="center">
          <Grid.Col
            span={4}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Headphones} title="HEADPHONES" />
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Speaker} title="SPEAKERS" />
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Earphones} title="EARPHONES" />
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
        <CTA />
      </Container>
    </>
  );
}

export default ProductDetail;
