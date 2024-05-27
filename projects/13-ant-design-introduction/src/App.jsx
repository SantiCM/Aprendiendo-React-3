import { Flex } from "antd";
import { Line } from "@ant-design/charts";
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
import { dataGrafichs } from "./util/data";

function App() {
  const config = {
    dataGrafichs,
    title: {
      visible: true,
      text: "Goles de Cristiano Ronaldo en el Real Madrid",
    },
    xField: "season",
    yField: "scores",
    color: "#2593fc",
    point: {
      visible: true,
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#2593fc",
        lineWidth: 2,
      },
    },
  };

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
      <Line data={config} xField="season" yField="scores" />
    </>
  );
}

export default App;
