import { Box, Container, Grid, Title, Text } from "@mantine/core";
import CTA from "../components/molecules/CTA";
import Hero from "../components/atoms/Hero";
import AppButton from "../components/atoms/AppButton";
import SFSpeaker from "../assets/home/desktop/image-speaker-zx9.png";
import FFSpeaker from "../assets/shared/desktop/FFSpeaker.png";
import CategoryCard from "../components/molecules/categoryCard";
import Headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useNavigate } from "react-router-dom";

function Speakers() {
  const navigate = useNavigate();
  return (
    <>
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
            SPEAKERS
          </Title>
        </Box>
      </Hero>
      <Container size="lg">
        <Grid
          gutter="xl"
          justify="center"
          align="stretch" // Changed from "center" to fill available height
          maw={1110}
          // Remove mah={560} to allow natural height
          style={{ overflow: "visible" }} // Changed from "hidden"
          mt={100}
        >
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              minHeight: 300, // Add minimum height for mobile
            }}
          >
            <div
              style={{
                width: "100%", // Changed from fixed 540
                maxWidth: 540, // Add max-width instead
                height: "auto", // Changed from fixed height
                aspectRatio: "540/560", // Maintain original ratio
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={SFSpeaker}
                alt="White Headphone"
                style={{
                  width: "100%",
                  maxWidth: 292,
                  height: "auto",
                  borderRadius: 12,
                }}
              />
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Changed from "flex-end" for better mobile
              padding: "var(--mantine-spacing-xl)", // Added padding all around
            }}
          >
            <div style={{ maxWidth: 445, width: "100%" }}>
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
                ZX9{" "}
              </Title>
              <Title c="primary.5" fw={500}>
                SPEAKER
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </Text>
              <AppButton
                color="secondary.5"
                handleClick={() => navigate("/products/6")}
              >
                SEE PRODUCT
              </AppButton>
            </div>
          </Grid.Col>
        </Grid>

        <Grid
          gutter="xl"
          justify="center"
          align="center"
          maw={1110}
          style={{ overflow: "hidden" }}
          mt={100}
        >
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            order={{ base: 2, md: 2, lg: 1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--mantine-spacing-xl)",
            }}
          >
            <div style={{ maxWidth: 445, width: "100%" }}>
              <Title c="primary.5" fw={500}>
                ZX7
              </Title>
              <Title c="primary.5" fw={500}>
                SPEAKER
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </Text>
              <AppButton
                color="secondary.5"
                handleClick={() => navigate("/products/5")}
              >
                SEE PRODUCT
              </AppButton>
            </div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 6 }}
            order={{ base: 1, md: 1, lg: 2 }}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              height: "auto", // Changed from fixed height
              minHeight: 400, // Minimum height for mobile
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "var(--mantine-spacing-xl)",
              }}
            >
              <img
                src={FFSpeaker}
                alt="White Headphone"
                style={{
                  width: "100%",
                  maxWidth: 292,
                  height: "auto",
                  borderRadius: 12,
                  objectFit: "contain",
                }}
              />
            </div>
          </Grid.Col>
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
              image={SFSpeaker}
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
        {/* </Grid> */}
        <div style={{ height: "100px" }}></div>
        <CTA />
      </Container>
    </>
  );
}

export default Speakers;
