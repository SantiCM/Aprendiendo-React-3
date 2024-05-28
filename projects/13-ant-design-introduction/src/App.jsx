import { Flex } from "antd";
import {
  First,
  FormBase,
  InputBase,
  MessageBase,
  SelectBase,
  Grid,
  TableBase,
} from "./components";
import { ModalBase } from "./components/ModalBase";
import { DashboardContent } from "./components/dashboard/DashboardContent";
import { DashboardFull } from "./components/dashboardFull/DashboardFull";

function App() {
  return (
    <>
      <DashboardFull />
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
      <DashboardContent />
    </>
  );
}

export default App;
