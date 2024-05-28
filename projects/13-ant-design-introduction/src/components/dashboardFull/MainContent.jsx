import { Flex } from "antd";
import { Banner } from "./Banner";
import { ProductsList } from "./ProductsList";

export function MainContent() {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical>
        <Banner />
        <ProductsList />
      </Flex>
    </div>
  );
}
