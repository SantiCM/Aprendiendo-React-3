import { Card, Flex, Typography, Image } from "antd";
import ImageSide from "../../../public/planta-side.jpeg";

export function OfertContent() {
  return (
    <Card className="card-side">
      <Flex gap="large">
        <Image
          src={ImageSide}
          width={150}
          height={150}
          style={{
            position: "absolute",
            top: 30,
            right: 8,
            borderRadius: "10px",
          }}
        />
        <Flex vertical>
          <Typography.Title level={5} strong>
            Today 5 days
          </Typography.Title>
          <Typography.Title level={5} strong>
            This month <br />
            24 orders
          </Typography.Title>
        </Flex>
      </Flex>
    </Card>
  );
}
