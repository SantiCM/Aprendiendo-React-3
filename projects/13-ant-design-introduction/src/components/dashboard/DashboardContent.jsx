import { Col, Row } from "antd";
import { Navbar } from "./Navbar";
import { StatisticContent } from "../StatisticContent";
import { Grafhic } from "../Grafhic";

export function DashboardContent() {
  return (
    <div style={{ backgroundColor: "rgb(209 213 219)" }}>
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      <StatisticContent />
      <Row gutter={20}>
        <Col xs={24} md={32}>
          <Grafhic />
        </Col>
      </Row>
    </div>
  );
}
