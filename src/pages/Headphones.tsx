import React from "react";
import CTA from "../components/molecules/CTA";
import { Box, Container, Grid, Title, Text } from "@mantine/core";
import Hero from "../components/atoms/Hero";
import CategoryCard from "../components/molecules/categoryCard";
import Speakers from "../assets/home/desktop/image-speaker-zx9.png";
import headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import WhiteHeadphone from "../assets/shared/desktop/whiteHeadphones.png";
import AppButton from "../components/atoms/AppButton";
import BlackHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import BlackGamingHeadphone from "../assets/shared/desktop/BlackGamingHeadphones.png";

function Headphones() {
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
            HEADPHONES
          </Title>
        </Box>
      </Hero>
      <Container
        size="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
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
              padding: 0, // Explicitly set padding to 0 to allow gutter to work
            }}
          >
            <img
              src={BlackGamingHeadphone}
              alt="White Headphone"
              width={540}
              style={{
                // width: "100%",
                maxWidth: 540,
                height: "auto",
                borderRadius: 12,
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingLeft: "var(--mantine-spacing-xl)", // Ensures gutter spacing
            }}
          >
            <div style={{ maxWidth: 445 }}>
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
                XX99 Mark II
              </Title>
              <Title c="primary.5" fw={500}>
                HEADPHONES
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </Text>
              <AppButton color="secondary.5">SEE PRODUCT</AppButton>
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
        <Grid
          gutter="xl"
          justify="center"
          align="center"
          maw={1110}
          mah={560}
          style={{ overflow: "hidden" }}
        >
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // paddingLeft: "var(--mantine-spacing-xl)", // Ensures gutter spacing
            }}
          >
            <div style={{ maxWidth: 445 }}>
              <Title c="primary.5" fw={500}>
                XX99 Mark I
              </Title>
              <Title c="primary.5" fw={500}>
                HEADPHONES
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </Text>
              <AppButton color="secondary.5">SEE PRODUCT</AppButton>
            </div>
          </Grid.Col>
          <Grid.Col
            span={6}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0, // Explicitly set padding to 0 to allow gutter to work
            }}
          >
            <img
              src={BlackHeadphones}
              alt="White Headphone"
              width={540}
              style={{
                // width: "100%",
                maxWidth: 540,
                height: "auto",
                borderRadius: 12,
                objectFit: "cover",
                objectPosition: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            />
          </Grid.Col>
        </Grid>

        <div style={{ height: "100px" }}></div>
        <Grid
          gutter="xl"
          justify="center"
          align="center"
          maw={1110}
          mah={560}
          style={{ overflow: "hidden" }}
        >
          <Grid.Col
            span={6}
            bg="tertiary.3"
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0, // Explicitly set padding to 0 to allow gutter to work
            }}
          >
            <img
              src={WhiteHeadphone}
              alt="White Headphone"
              width={540}
              style={{
                // width: "100%",
                maxWidth: 540,
                height: "auto",
                borderRadius: 12,
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingLeft: "var(--mantine-spacing-xl)", // Ensures gutter spacing
            }}
          >
            <div style={{ maxWidth: 445 }}>
              <Title c="primary.5" fw={500}>
                XX59
              </Title>
              <Title c="primary.5" fw={500}>
                HEADPHONES
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </Text>
              <AppButton color="secondary.5">SEE PRODUCT</AppButton>
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
        <Grid justify="center" align="center">
          <Grid.Col
            span={4}
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <CategoryCard image={headphones} title="HEADPHONES" />
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
        <div style={{ height: "100px" }}></div>
        <CTA />
      </Container>
    </>
  );
}

export default Headphones;
