import  { Box, Container, Grid, Title,Text } from "@mantine/core";
import CTA from "../components/molecules/CTA";
import Hero from "../components/atoms/Hero";
import CategoryCard from "../components/molecules/categoryCard";
import Speakers from "../assets/home/desktop/image-speaker-zx9.png";
import Headphones from "../assets/home/headphones.png";
import Earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import AppButton from "../components/atoms/AppButton";
import Earphine from "../assets/shared/desktop/Earphone.png"
import { useNavigate } from "react-router-dom";

function Earphones() {
  const navigate = useNavigate();
  return  <>
        <Hero>
        <Box
          h="200"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title c={"tertiary.5"} fw={500}>
            EARPHONES
          </Title>
        </Box>
      </Hero>
        <Container size="lg">

<Grid
  gutter="xl"
  justify="center"
  align="center"
  maw={1110}
  style={{ overflow: "hidden" }}
  mt={{ base: 50, md: 100 }}
>
  {/* Image Column - now first on mobile */}
  <Grid.Col
    span={{ base: 12, md: 6 }}
    order={{ base: 1, md: 1 }}
    bg="tertiary.3"
    style={{
      borderRadius: 12,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
    }}
    h={{ base: 320, md: 560 }} // Responsive height
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "var(--mantine-spacing-md)",
      }}
    >
      <img
        src={Earphine}
        alt="White Headphone"
        style={{
          width: "100%",
          maxWidth: 292,
          height: "auto",
          maxHeight: 350,
          borderRadius: 12,
          objectFit: "contain",
        }}
      />
    </div>
  </Grid.Col>

  {/* Content Column - now second on mobile */}
  <Grid.Col
    span={{ base: 12, md: 6 }}
    order={{ base: 2, md: 2 }}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "var(--mantine-spacing-xl)",
    }}
  >
    <div style={{ maxWidth: 445, width: "100%", textAlign: "left" }}>
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
      <Title c="primary.5" fw={500}>
        YX1 WIRELESS
      </Title>
      <Title c="primary.5" fw={500}>
        EARPHONES
      </Title>
      <Text mt="md" c="dimmed" mb={"md"}>
        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
      </Text>
      <Box
        display="flex"
        style={{
          justifyContent: "flex-start",
        }}
      >
        <AppButton color="secondary.5" handleClick={() => navigate("/products/1")}>
          SEE PRODUCT
        </AppButton>
      </Box>
    </div>
  </Grid.Col>
</Grid>
<div style={{height:100
}}></div>
          <Grid justify="center" align="center">
          <Grid.Col
            span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Headphones} title="HEADPHONES" onShopClick={() => { navigate("/products/3") }} />
          </Grid.Col>
          <Grid.Col
             span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Speakers} title="SPEAKERS" onShopClick={() => { navigate("/products/6")}} />
          </Grid.Col>
          <Grid.Col
             span={{ base: 12, md: 6, lg: 4 }}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={Earphone} title="EARPHONES" onShopClick={() => { navigate("/products/1")}} />
          </Grid.Col>
        </Grid>
          <div style={{ height: "100px" }}></div>
          <CTA />
        </Container>
      </>;
}

export default Earphones;
