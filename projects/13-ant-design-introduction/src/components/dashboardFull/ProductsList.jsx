import { Card, Flex, Image, Typography } from "antd";
import { dataPlants } from "../../util/data";

export function ProductsList() {
  return (
    <Flex vertical>
      <Typography.Title style={{ color: "#4f6f52", fontSize: "1.5rem" }}>
        My Listining
      </Typography.Title>
      <Flex gap="large">
        {dataPlants.map((text) => (
          <Card
            key={text.key}
            hoverable
            style={{ padding: "5px", textAlign: "center" }}
          >
            <Image
              src={text.photo}
              width={200}
              height={200}
              style={{ borderRadius: "15px" }}
            />
            <Card.Meta title={text.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
