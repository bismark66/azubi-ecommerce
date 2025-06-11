import { Container, Group, Text, Title } from "@mantine/core";
import classes from "../../styles/HomeHero.module.css";
import AppButton from "../atoms/AppButton";

type HomeHeroProps = {
  handleClick?: () => void;
};

export default function HomeHero({ handleClick }: HomeHeroProps) {
  return (
    <Container fluid className={classes.hero}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title
              fw={500}
              c={"dimmed"}
              size={"sm"}
              tt="capitalize"
              style={{ letterSpacing: 10 }}
              mb={20}
            >
              NEW PRODUCT
            </Title>
            <Title className={classes.title}>
              XX99 MARK II
              {/* <span className={classes.highlight}> */}
              <br /> HEADPHONES
            </Title>
            <Text c="dimmed" mt="md" style={{ maxWidth: 349 }}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>

            <Group mt={30}>
              <AppButton
                size="lg"
                color="secondary.2"
                handleClick={handleClick}
              >
                See product
              </AppButton>
            </Group>
          </div>
        </div>
      </Container>
    </Container>
  );
}
