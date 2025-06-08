import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "../../styles/Footer.module.css";

const footerLinks = [
  { title: "Home", link: "#" },
  { title: "Headphones", link: "#" },
  { title: "Speakers", link: "#" },
  { title: "Earphones", link: "#" },
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Text
              size="md"
              c="tertiary.0"
              fw={700}
              className={classes.description}
            >
              audiophile
            </Text>
            <Text size="xs" c="dimmed" ta={"left"} mt={10}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </Text>
          </div>
        </div>

        <div className={classes.groups}>
          {footerLinks.map((item) => (
            <div className={classes.wrapper} key={item.title}>
              <Text
                className={classes.title}
                component="a"
                href={item.link}
                onClick={(e) => e.preventDefault()}
              >
                {item.title}
              </Text>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              justifyItems: "flex-end",
              justifySelf: "flex-end",
              width: "100%",
            }}
          >
            <Group
              gap={0}
              className={classes.social}
              justify="flex-end"
              wrap="nowrap"
            >
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                component="a"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Twitter"
              >
                <IconBrandTwitter size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                component="a"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
              >
                <IconBrandYoutube size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                component="a"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
        </div>
      </Container>

      <Container size="lg" className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {currentYear} Audiophile. All rights reserved.
        </Text>

        {/* <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label="Twitter"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label="YouTube"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label="Instagram"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}
