import CTA from "../components/molecules/CTA";
import {
  Box,
  Container,
  Grid,
  Title,
  Text,
  // useMantineTheme,
} from "@mantine/core";
import Hero from "../components/atoms/Hero";
import CategoryCard from "../components/molecules/categoryCard";
import Speakers from "../assets/home/desktop/image-speaker-zx9.png";
import headphones from "../assets/home/headphones.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import WhiteHeadphone from "../assets/shared/desktop/whiteHeadphones.png";
import AppButton from "../components/atoms/AppButton";
import BlackHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import BlackGamingHeadphone from "../assets/shared/desktop/BlackGamingHeadphones.png";
import { useNavigate } from "react-router-dom";

function Headphones() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const theme = useMantineTheme();
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
          style={{ overflow: "hidden" }}
          mt={{ base: 50, md: 100 }}
        >
          {/* Image Column - first on mobile */}
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 1, lg: 1 }}
            bg="tertiary.3"
            h={{ base: 320, lg: 560 }}
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <img
              src={BlackGamingHeadphone}
              alt="Black Gaming Headphone"
              style={{
                width: "100%",
                maxWidth: 540,
                height: "auto",
                maxHeight: "100%",
                borderRadius: 12,
                objectFit: "contain",
                padding: "var(--mantine-spacing-md)",
              }}
            />
          </Grid.Col>

          {/* Content Column - second on mobile */}
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 2, lg: 2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: window.innerWidth >= 992 ? "flex-end" : "center",
              padding: "var(--mantine-spacing-xl)",
            }}
          >
            <div
              style={{
                maxWidth: 445,
                width: "100%",
                textAlign: "center",
              }}
            >
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
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AppButton
                  color="secondary.5"
                  handleClick={() => navigate("/products/4")}
                >
                  SEE PRODUCT
                </AppButton>
              </Box>
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
        <Grid
          gutter="xl"
          justify="center"
          align="center"
          maw={1110}
          style={{ overflow: "hidden" }}
          mt={{ base: 50, md: 100 }}
        >
          {/* Content Column - first on mobile */}
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 2, lg: 1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:
                window.innerWidth >= 992 ? "flex-start" : "center",
              padding: "var(--mantine-spacing-xl)",
            }}
          >
            <div
              style={{
                maxWidth: 445,
                width: "100%",
                textAlign: "center",
                // Responsive textAlign for large screens
                ...(window.innerWidth >= 992 && { textAlign: "left" }),
              }}
            >
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
              <Box
                style={{
                  display: "flex",
                  justifyContent:
                    window.innerWidth >= 992 ? "flex-start" : "center",
                }}
              >
                <AppButton
                  color="secondary.5"
                  handleClick={() => navigate("/products/3")}
                >
                  SEE PRODUCT
                </AppButton>
              </Box>
            </div>
          </Grid.Col>

          {/* Image Column - second on mobile */}
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 1, lg: 2 }}
            bg="tertiary.3"
            h={{ base: 320, lg: 560 }}
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <img
              src={BlackHeadphones}
              alt="Black Headphones"
              style={{
                width: "100%",
                maxWidth: 540,
                height: "auto",
                maxHeight: "100%",
                borderRadius: 12,
                objectFit: "cover",
                objectPosition: "center",
                padding: "var(--mantine-spacing-md)",
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
          style={{ overflow: "hidden" }}
          mt={{ base: 50, md: 100 }}
        >
          {/* Image Column - now first on mobile */}
          <Grid.Col
            span={{ base: 12, md: 6 }}
            order={{ base: 1, md: 1 }}
            bg="tertiary.3"
            h={{ base: 320, md: 560 }}
            style={{
              borderRadius: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <img
              src={WhiteHeadphone}
              alt="White Headphone"
              style={{
                width: "100%",
                maxWidth: 540,
                height: "auto",
                maxHeight: "100%",
                borderRadius: 12,
                objectFit: "contain",
                padding: "var(--mantine-spacing-md)",
              }}
            />
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
            <div
              style={{
                maxWidth: 445,
                width: "100%",
                textAlign: "left",
              }}
            >
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
              <Box
                style={{
                  display: "flex",
                  justifyContent:
                    window.innerWidth >= 992 ? "flex-start" : "center",
                }}
              >
                <AppButton
                  color="secondary.5"
                  handleClick={() => navigate("/products/2")}
                >
                  SEE PRODUCT
                </AppButton>
              </Box>
            </div>
          </Grid.Col>
        </Grid>
        <div style={{ height: "100px" }}></div>
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
              image={headphones}
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
              image={Speakers}
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

export default Headphones;
