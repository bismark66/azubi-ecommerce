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
                src={Earphine}
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
               YX1 WIRELESS
              </Title>
              <Title c="primary.5" fw={500}>
                EARPHONES
              </Title>
              <Text mt="md" c="dimmed" mb={"md"}>
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
              </Text>
              <AppButton color="secondary.5" handleClick={() => navigate("/products/1")}>SEE PRODUCT</AppButton>
            </div>
          </Grid.Col>
        </Grid>
<div style={{height:100
}}></div>
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
                      <CategoryCard image={Earphone} title="EARPHONES" />
                    </Grid.Col>
                  </Grid>
          <div style={{ height: "100px" }}></div>
          <CTA />
        </Container>
      </>;
}

export default Earphones;
