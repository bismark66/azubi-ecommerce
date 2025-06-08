import React from "react";
import CTA from "../components/molecules/CTA";
import { Box, Center, Container, Grid, Title } from "@mantine/core";
import Hero from "../components/atoms/Hero";
import CategoryCard from "../components/molecules/categoryCard";
import Speakers from "../assets/home/desktop/image-speaker-zx9.png";
import headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

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
      <Container size="xl">
        <Grid justify="center" align="center">
          <Grid.Col span={6}>&nbsp;</Grid.Col>
          <Grid.Col span={6}>&nbsp;</Grid.Col>
        </Grid>

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
