import React from "react";
import { Box, Grid, Title, Text } from "@mantine/core";
import GuyWithGear from "../../assets/shared/desktop/image-best-gear.jpg";
function CTA() {
  return (
    <>
      <Box>
        <Grid gutter={"xl"}>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              // backgroundColor: "#979797",
              // maxWidth: 540,
              borderRadius: 12,
              padding: "40px",
            }}
          >
            <div style={{ maxWidth: 445 }}>
              <Title
                style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}
              >
                BRINGING YOU THE <br />{" "}
                <span style={{ color: "#D87D4A" }}> BEST</span> AUDIO GEAR
              </Title>
              <Text c="dimmed" mt="md" style={{ maxWidth: 445 }}>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              // maxWidth: 540,
              padding: 0,
              borderRadius: 12,
            }}
          >
            <img
              src={GuyWithGear}
              alt="YX1 Earphones"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

export default CTA;
