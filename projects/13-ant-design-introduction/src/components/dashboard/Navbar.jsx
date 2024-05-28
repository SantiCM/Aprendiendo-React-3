import { MenuOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import ReactImg from "../../../public/React.svg";

const { Header } = Layout;

export function Navbar() {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <ul className="left-nav">
        <li>
          <MenuOutlined style={{ color: "white", fontSize: "20px" }} />
        </li>
        <li>
          <span className="name">Santiago</span>
        </li>
      </ul>
      <ul className="right-nav">
        <img src={ReactImg} className="img-nav" />
      </ul>
    </Header>
  );
}
