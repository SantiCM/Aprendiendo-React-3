import { Flex, Typography, List, Image } from "antd";
import { usersPlants } from "../../util/data";

const { Item } = List;
const { Text, Title } = Typography;

export function UsersActivity() {
  return (
    <Flex vertical>
      <Title style={{ color: "#4f6f52", fontSize: "1.5rem" }}>
        Recent Activity
      </Title>
      <Flex vertical gap="large">
        <List
          dataSource={usersPlants}
          renderItem={(user) => (
            <Item>
              <Item.Meta
                avatar={
                  <Image
                    width={40}
                    height={40}
                    style={{ borderRadius: "50px" }}
                    src={user.photo}
                  />
                }
                title={<Text>{user.name}</Text>}
                description={<Text>{user.order}</Text>}
              />
              <Flex style={{ fontWeight: 700 }} gap="middle">
                {user.days} {user.days > 1 ? "days ago" : "day ago"}
              </Flex>
            </Item>
          )}
        ></List>
      </Flex>
    </Flex>
  );
}
