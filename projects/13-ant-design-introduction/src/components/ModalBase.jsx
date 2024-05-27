import { Flex, Modal, Typography, Button } from "antd";
import { useState } from "react";

export function ModalBase() {
  const { Title } = Typography;
  const [modal, setModal] = useState(false);
  return (
    <>
      <Flex justify="center" align="center" style={{ marginTop: "1.5rem" }}>
        <Button type="primary" onClick={() => setModal(true)}>
          Open Modal
        </Button>
      </Flex>
      <Modal
        title="Modal"
        onCancel={() => setModal(false)}
        open={modal}
        onOk={() => setModal(false)}
      >
        <Title level={4}>Esto es un modal</Title>
      </Modal>
    </>
  );
}
