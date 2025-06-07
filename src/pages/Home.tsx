import React from "react";
import Hero from "../components/atoms/Hero";
import HomeHero from "../components/molecules/HomeHero";
import CategoryCard from "../components/molecules/categoryCard";
import { Box, Container, Grid, Title, Text } from "@mantine/core";
// import Headphones from "../assets/home/desktop/image-speaker-zx7.jpg";
import Speakers from "../assets/home/desktop/image-speaker-zx9.png";
import Headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import CirclePattern from "../assets/home/desktop/pattern-circles.svg";
import AppButton from "../components/atoms/AppButton";

function Home() {
  return (
    <>
      <Hero>
        <HomeHero />
      </Hero>
      {/* cardcategory section */}
      <Container size={"xl"} mt={60} mb={60}>
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
            <CategoryCard image={Speakers} title="SPEAKERS" />
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
        <div style={{ height: 100 }}></div>
        <Box
          bg="secondary.5"
          // my="xl"
          // mt={120}
          style={{
            borderRadius: 12,
            position: "relative",
            // height: 500,
            paddingTop: 80,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: "translate(-20%, 30%)",
              // opacity: 0.2,
              // zIndex: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={CirclePattern}
              alt="Circle pattern"
              style={{
                // width: "50%",
                // height: "100%",
                objectFit: "cover", // or "contain" depending on your needs
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
              }}
            />
          </div>
          <Grid
            style={{ position: "relative", zIndex: 1 }}
            justify="flex-end"
            align="center"
          >
            <Grid.Col
              span={7}
              style={{
                display: "flex",
                alignItems: "bottom",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <img
                src={Speakers}
                alt=""
                height={411}
                style={{ transform: "translateY(3%)" }}
              />
            </Grid.Col>
            <Grid.Col
              span={5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(-30%)",
              }}
            >
              <div style={{ maxWidth: 350 }}>
                <Title
                  c={"tertiary.1"}
                  style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}
                >
                  ZX9 SPEAKER
                </Title>
                <Text
                  c="tertiary.1"
                  mt="md"
                  style={{ fontSize: 16, marginBottom: 16 }}
                >
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Text>
                <AppButton
                  variant="primary.2"
                  c={"tertiary.5"}
                  style={{ borderRadius: 0 }}
                >
                  SEE PRODUCT
                </AppButton>
              </div>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Home;
