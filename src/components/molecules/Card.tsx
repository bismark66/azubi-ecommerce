import { Card, Image, Title, Center } from "@mantine/core";
import AppButton from "../atoms/AppButton";

function ProductCard({ title, image }: { title: string; image: string }) {
  return (
    <Card
      // shadow="sm"
      padding="lg"
      radius="md"
      bg={"#f2f2f2"}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <Card.Section
        bg={"tertiary.3"}
        w={350}
        h={318}
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          borderRadius: 12,
        }}
      >
        <Image
          src={
            image ||
            "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          }
          height={172}
          width={143}
          style={{ objectFit: "contain" }}
          alt="Norway"
        />
      </Card.Section>

      {/* <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group> */}
      <Title order={3} fw={400} mt={30} c={"primary.3"}>
        <Center>{title || "xx3"}</Center>
      </Title>

      {/* <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text> */}

      <div style={{ maxWidth: 160, margin: "0 auto" }}>
        <AppButton mt="md">SEE PRODUCT</AppButton>
      </div>
    </Card>
  );
}

export default ProductCard;
