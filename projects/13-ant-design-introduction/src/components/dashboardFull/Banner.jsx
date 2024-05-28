import { Button, Card, Flex, Typography } from "antd";

export const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "5px" }}>
      <Flex vertical gap="20px">
        <Flex vertical justify="flex-start">
          <Typography.Title level={2} strong>
            Create and sell products
          </Typography.Title>
          <Typography.Text>
            Dolore reprehenderit minim cupidatat cillum eiusmod deserunt eiusmod
            non nostrud. Ex id nisi dolore tempor ullamco id et velit non
          </Typography.Text>
        </Flex>
        <Flex gap="middle">
          <Button type="primary" size="large">
            Explore Me
          </Button>
          <Button size="large">Top Seliers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};
