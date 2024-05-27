import { Flex } from "antd";
import {
  First,
  FormBase,
  InputBase,
  MessageBase,
  SelectBase,
  Grid,
  TableBase,
  Grafhic,
} from "./components";
import { ModalBase } from "./components/ModalBase";

function App() {
  return (
    <>
      <Flex vertical justify="center" gap="middle" align="center">
        <First />
        <FormBase />
        <InputBase />
        <SelectBase />
        <MessageBase />
      </Flex>
      <Flex justify="center" align="center" style={{ marginTop: "2rem" }}>
        <Grid />
      </Flex>
      <ModalBase />
      <TableBase />
      <Grafhic />
    </>
  );
}

export default App;
