import { Line } from "@ant-design/charts";
import { Typography } from "antd";

export function Grafhic() {
  const { Title } = Typography;

  const data = [
    { season: "2009/2010", scores: 33 },
    { season: "2010/2011", scores: 53 },
    { season: "2011/2012", scores: 60 },
    { season: "2012/2013", scores: 55 },
    { season: "2013/2014", scores: 51 },
    { season: "2014/2015", scores: 61 },
    { season: "2015/2016", scores: 51 },
    { season: "2016/2017", scores: 42 },
    { season: "2017/2018", scores: 44 },
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: "Goles de Cristiano Ronaldo con el Real Madrid",
    },
    height: 400,
    xField: "season",
    yField: "scores",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  return (
    <>
      <Title level={1} style={{ fontWeight: 800, textAlign: "center" }}>
        Goles de Cristiano Ronaldo en el Real Madrid
      </Title>
      <Line {...config} />
    </>
  );
}
