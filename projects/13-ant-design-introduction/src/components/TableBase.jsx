import { Button, Flex, Table } from "antd";
import { data } from "../util/data";

export const columnsArray = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Edad",
    dataIndex: "edad",
    key: "edad",
    render: (fila) => (fila > 18 ? <b>{fila}</b> : <i>{fila}</i>),
  },
  {
    title: "Sexo",
    dataIndex: "sexo",
    key: "sexo",
    render: (fila) =>
      fila.startsWith("M") ? (
        <b style={{ color: "blue" }}>{fila}</b>
      ) : (
        <b style={{ color: "pink" }}>{fila}</b>
      ),
  },
  {
    title: "Puesto",
    dataIndex: "puesto",
    key: "puesto",
  },
  {
    title: "Acciones",
    dataIndex: "acciones",
    key: "acciones",
    render: (fila) => (
      <Flex gap="middle">
        <Button type="primary">Editar</Button>
        <Button type="default" danger>
          Eliminar
        </Button>
      </Flex>
    ),
  },
];

export function TableBase() {
  return <Table dataSource={data} columns={columnsArray} />;
}
