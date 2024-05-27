import { Col, Row } from "antd";

export function Grid() {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={12} sm={9} md={8} lg={6}>
        <div style={{ backgroundColor: "green" }} className="col">
          1
        </div>
      </Col>
      <Col xs={12} sm={9} md={8} lg={6}>
        <div className="col" style={{ backgroundColor: "red" }}>
          2
        </div>
      </Col>
      <Col xs={12} sm={9} md={8} lg={6}>
        <div className="col" style={{ backgroundColor: "blue" }}>
          3
        </div>
      </Col>
      <Col xs={12} sm={9} md={8} lg={6}>
        <div className="col" style={{ backgroundColor: "pink" }}>
          4
        </div>
      </Col>
    </Row>
  );
}
