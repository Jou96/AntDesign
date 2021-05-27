import logo from "./logo.svg";
import "./App.css";
import Boton from "./contenedores/Boton";
import {
  Row,
  Col,
  Divider,
  DatePicker,
  Typography,
  Space,
  Input,
  Select,
  message,
  Button,
} from "antd";

import "antd/dist/antd.css";
import { GroupOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;
const mensajeSuccess = () => {
  message.success("Mensaje Success");
};
const mensajeError = () => {
  message.error("Mensaje Error");
};
const mensajeInfo = () => {
  message.info("Mensaje Info");
};
const mensajeWarning = () => {
  message.warning("Mensaje Warning");
};
const mensajeLoading = () => {
  message.loading("Mensaje Loading");
};
function App() {
  return (
    <div className="App">
      <br></br>
      <GroupOutlined style={{ fontSize: "90px", color: "blue" }} spin={true} />
      <Title>H1 </Title>
      <Title level={2}>H2 </Title>
      <Title level={3}>H3 </Title>
      <Title level={4}>H4 </Title>
      <Title level={5}>H5 </Title>
      <Space direction="vertical">
        <Text> default</Text>
        <Text type="secondary"> Secondary</Text>
        <Text type="success"> Success</Text>
        <Text type="warning"> Warning</Text>
        <Text type="danger"> danger</Text>
      </Space>
      <br /> <br />
      <Select placeholder="Seleccione un pais">
        <Option value="1">Ecuador</Option>
        <Option value="2">Argentina</Option>
        <Option value="3">Brasil</Option>
      </Select>
      <Button onClick={mensajeSuccess}>Mensaje Success </Button>{" "}
      <Button onClick={mensajeError}>Mensaje Error </Button>{" "}
      <Button onClick={mensajeInfo}>Mensaje Info </Button>{" "}
      <Button onClick={mensajeWarning}>Mensaje Warning </Button>{" "}
      <Button onClick={mensajeLoading}>Mensaje Loading </Button>{" "}
      <GroupOutlined />
      <Boton />
      <Input />
      <Divider> 1 columna (24c/u) </Divider>
      <Row>
        <Col span={24} style={{ background: "green", color: "white" }}>
          Columna
        </Col>
      </Row>
      <Divider> 2 columna (12c/u) </Divider>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={12}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
      </Row>
      <Divider> 3 columna (8) </Divider>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={8}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={8}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
      </Row>
      <Divider> 4 columna (6) </Divider>
      <Row gutter={[32, 32]}>
        <Col span={6}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "green", color: "white" }}>Columna</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
