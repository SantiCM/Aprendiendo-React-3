import { Col, Flex, Row, Statistic } from "antd";
import { dataDashboard } from "../util/data";

export function StatisticContent() {
  return (
    <Flex justify="center" align="center" gap="middle">
      <Row gutter={30}>
        <Col lg={6} xs={24} sm={12}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            {dataDashboard.map((text) => (
              <div style={{ textAlign: "center" }} key={text.id}>
                <Statistic
                  style={{
                    backgroundColor: `${text.background}`,
                    padding: "15px",
                    width: "250px",
                    borderRadius: "15px",
                  }}
                  title={text.team}
                  value={text.scores}
                  valueStyle={{ color: "white" }}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Flex>
  );
}
