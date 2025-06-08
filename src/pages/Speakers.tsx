import React from "react";
import { Box, Container, Grid, Title, Text } from "@mantine/core";
import CTA from "../components/molecules/CTA";
import Hero from "../components/atoms/Hero";
import AppButton from "../components/atoms/AppButton";
import SFSpeaker from "../assets/home/desktop/image-speaker-zx9.png";
import FFSpeaker from "../assets/shared/desktop/FFSpeaker.png";
import CategoryCard from "../components/molecules/categoryCard";
import Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import Headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Speakers() {
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
                src={SFSpeaker}
                alt="White Headphone"
                width={291}
                style={{
                  // width: "100%",
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
              <AppButton color="secondary.5">SEE PRODUCT</AppButton>
            </div>
          </Grid.Col>
        </Grid>

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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // paddingLeft: "var(--mantine-spacing-xl)", // Ensures gutter spacing
            }}
          >
            <div style={{ maxWidth: 445 }}>
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
                src={FFSpeaker}
                alt="White Headphone"
                width={291}
                style={{
                  // width: "100%",
                  maxWidth: 292,
                  height: "350",
                  borderRadius: 12,
                }}
              />
            </div>
          </Grid.Col>
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

export default Speakers;
