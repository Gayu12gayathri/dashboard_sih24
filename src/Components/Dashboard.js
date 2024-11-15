import React, { useState } from "react";
import { Layout, Card, Row, Col, Typography, Modal } from "antd";
import { BatteryFull, Thermometer, Drop } from "phosphor-react";
import { AlertTwoTone } from "@ant-design/icons";
import GraphComponent from "./GraphComponent";

const { Header, Content } = Layout;
const { Text } = Typography;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const showGraphModal = (title) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      {/* Header */}
      <Header style={{ backgroundColor: "#001529" }}>
        <div
          className="logo"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </div>
      </Header>

      {/* Content */}
      <Layout>
        <Content style={{ padding: "24px" }}>
          {/* Metrics Section */}
          <Row gutter={16}>
            <Col span={6}>
              <Card
                title="Battery Level"
                bordered={false}
                style={{
                  backgroundColor: "#e8f5e9",
                  borderRadius: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BatteryFull size={32} color="#4caf50" weight="bold" />
                  <Text
                    style={{
                      marginLeft: "12px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    85%
                  </Text>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Temperature"
                bordered={false}
                style={{ backgroundColor: "#fff8e1", borderRadius: "10px" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Thermometer size={32} color="#ffa726" weight="bold" />
                  <Text
                    style={{
                      marginLeft: "12px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    22°C
                  </Text>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Humidity"
                bordered={false}
                style={{ backgroundColor: "#e3f2fd", borderRadius: "10px" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Drop size={32} color="#42a5f5" weight="bold" />
                  <Text
                    style={{
                      marginLeft: "12px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    60%
                  </Text>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Vibration"
                bordered={false}
                style={{ backgroundColor: "#ffebee", borderRadius: "10px" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AlertTwoTone size={32} color="#ef5350" weight="bold" />
                  <Text
                    style={{
                      marginLeft: "12px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Low
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "24px" }}>
            <Col span={24}>
              <Card
                title="Attention Required"
                bordered={false}
                style={{
                  backgroundColor: "#fff3e0",
                  borderLeft: "4px solid #ff9800",
                  borderRadius: "10px",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#e65100",
                    fontWeight: "bold",
                  }}
                >
                  Something is missing! Please ensure all sensors are properly
                  connected.
                </Text>
              </Card>
            </Col>
          </Row>

          {/* Graph Section */}
          <Row gutter={16} style={{ marginTop: "24px" }}>
            <Col span={12}>
              <Card
                title="Current Prediction"
                bordered={false}
                style={{ borderRadius: "10px", cursor: "pointer" }}
                onClick={() => showGraphModal("Current Prediction")}
              >
                <GraphComponent title="Current Prediction Graph" />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Upcoming Prediction"
                bordered={false}
                style={{ borderRadius: "10px", cursor: "pointer" }}
                onClick={() => showGraphModal("Upcoming Prediction")}
              >
                <GraphComponent title="Upcoming Prediction Graph" />
              </Card>
            </Col>
          </Row>
          {/* Warning Section */}

          {/* Modal for Graph */}
          <Modal
            title={modalTitle}
            visible={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
            width={800}
          >
            <GraphComponent title={modalTitle} />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
