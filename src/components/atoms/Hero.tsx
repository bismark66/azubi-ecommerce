import { Container } from "@mantine/core";
import React from "react";
import classes from "../../styles/AppHero.module.css";

function Hero({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container fluid className={classes.hero}>
        {children}
      </Container>
    </>
  );
}

export default Hero;
