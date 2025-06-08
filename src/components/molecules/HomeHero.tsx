import { Container, Group, Text, Title } from "@mantine/core";
import classes from "../../styles/HomeHero.module.css";
import AppButton from "../atoms/AppButton";

export default function HomeHero() {
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
              XX99 <span className={classes.highlight}>MARK</span> || <br />{" "}
              HEADPHONES
            </Title>
            <Text c="dimmed" mt="md" style={{ maxWidth: 349 }}>
              {/* Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation */}
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>

            {/* <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List> */}

            <Group mt={30}>
              <AppButton size="lg" color="secondary.2">
                See product
              </AppButton>
              {/* <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button> */}
              {/* <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button> */}
            </Group>
          </div>

          {/* <Image src={HeroImage} className={classes.image} /> */}
        </div>
      </Container>
    </Container>
  );
}
