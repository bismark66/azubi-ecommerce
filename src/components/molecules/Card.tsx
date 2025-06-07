import { Box, Image, Text } from "@mantine/core";
import React from "react";

function Card() {
  return (
    <>
      <div style={{ maxWidth: 350, height: 284, margin: "0 auto" }}>
        {/* <Image src="/images/1.jpg" alt="Card" width={300} height={300} /> */}
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            radius="md"
            h={80}
            w="auto"
            fit="contain"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
            alt="Card"
          />
        </div>
        <Box bg="gray.3" style={{ width: "100%" }} pt={16} pb={16}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
            Card title
          </div>
          <Text>Card description</Text>
        </Box>
      </div>
    </>
  );
}

export default Card;
