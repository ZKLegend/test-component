import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Collapse,
  Slider,
  Checkbox,
  ConfigProvider,
  Typography,
  Segmented,
  Select,
  Dropdown,
  Divider,
  Space,
} from "antd";

import "./style.css";
import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

import hotelIstanbul1 from "../assets/hotel-istanbul-1.png";

const { Title, Text } = Typography;

const dropdownItems = [
  { label: "Lowest Recommend", value: "lowest Recommend" },
  { label: "Highest Reccomend", value: "highest Reccomend" },
  { label: "Lowest Rating", value: "lowest Rating" },
  { label: "Highest Rating", value: "highest Rating" },
  { label: "Lowest Price", value: "lowest Price" },
  { label: "Highest Price", value: "highest Price" },
];

const category = [
  { name: "Hotels", placeAmounts: "257" },
  { name: "Motels", placeAmounts: "51" },
  { name: "Resorts", placeAmounts: "72" },
];

const LabelItems = ({ name, placeAmounts }) => {
  return (
    <>
      <Title level={5} style={{ margin: "0" }}>
        {name}
      </Title>
      <Text style={{ color: "#112211", opacity: "0.4" }}>
        {placeAmounts} places
      </Text>
    </>
  );
};

const TestComponent = () => {
  return (
    <div>
      <Row>
        <Col span={13}>
          <Row gutter={[0, 32]}>
            <Col
              span={24}
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
                borderRadius: "16px",
              }}
            >
              <Segmented
                size="large"
                style={{ padding: "16px 24px", backgroundColor: "white" }}
                block
                options={[
                  {
                    label: (
                      <LabelItems
                        name={category[0].name}
                        placeAmounts={category[0].placeAmounts}
                      />
                    ),
                    value: "hotels",
                  },
                  {
                    label: (
                      <LabelItems
                        name={category[1].name}
                        placeAmounts={category[1].placeAmounts}
                      />
                    ),
                    value: "motels",
                  },
                  {
                    label: (
                      <LabelItems
                        name={category[2].name}
                        placeAmounts={category[2].placeAmounts}
                      />
                    ),
                    value: "resorts",
                  },
                ]}
              />
            </Col>

            <Col
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              span={24}
            >
              <div>Showing 4 of 257 places</div>
              <div>
                Sort by{" "}
                <Select
                  options={dropdownItems}
                  bordered={false}
                  defaultValue={dropdownItems[0].label}
                />
              </div>
            </Col>

            {/* Search Result */}
            <Col
              style={{ border: "1px solid black", display: "flex" }}
              span={24}
            >
              <img
                style={{ maxHeight: "300px" }}
                alt="error"
                src={hotelIstanbul1}
              />

              {/* Description Section */}
              <Row
                justify="space-between"
                style={{
                  width: "100%",
                  padding: "24px",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Col
                  style={{ backgroundColor: "red", maxWidth: "100%" }}
                  span={12}
                >
                  <Row gutter={24} justify="space-between">
                    {/* Description Info */}
                    <Col span={18}>
                      {/* Line 1 */}
                      <Title level={3} style={{ margin: "0" }}>
                        CVK Park Bosphorus Hotel Istanbul
                      </Title>

                      {/* Line 2 */}
                      <Text>
                        <EnvironmentFilled />
                        &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                      </Text>

                      {/* Line 3 */}
                      <Row gutter={32}>
                        <Col>Star Rating</Col>
                        <Col>Aminities</Col>
                      </Row>

                      {/* Line 4 */}
                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          {" "}
                          <Button
                            style={{
                              width: "40px",
                              height: "32px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            4.2
                          </Button>
                          <Text>Very good</Text>
                          <Text>371 reviews</Text>
                        </Col>
                      </Row>
                    </Col>

                    {/* Price */}
                    <Col span={6}>
                      <div style={{ border: "1px solid black" }}>
                        <Text
                          style={{
                            color: "#FF8682",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontWeight: "500",
                            fontStyle: "normal",
                            lineHeight: "15px",
                          }}
                        >
                          starting from
                        </Text>
                        <br />
                        <Text
                          style={{
                            color: "#FF8682",
                            fontFamily: "Montserrat",
                            fontSize: "14px",
                            fontWeight: "700",
                            fontStyle: "normal",
                            lineHeight: "29px",
                          }}
                        >
                          <Title
                            level={3}
                            style={{
                              margin: "0",
                              display: "inline",
                              color: "#FF8682",
                            }}
                          >
                            $240
                          </Title>
                          <span>/night</span>
                        </Text>
                        <br />
                        <Text
                          style={{
                            display: "block",
                            color: "#FF8682",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontWeight: "500",
                            fontStyle: "normal",
                            lineHeight: "15px",
                            textAlign: "right",
                          }}
                        >
                          excl.tax
                        </Text>
                      </div>
                    </Col>
                  </Row>
                </Col>

                {/* Divider Slash */}
                <Col>
                  <Divider style={{ margin: "0" }} />
                </Col>

                {/* Button  */}
                <Col
                  style={{
                    maxHeight: "48px",
                    maxWidth: "100%",
                    display: "flex",
                  }}
                  span={12}
                >
                  <Button
                    style={{
                      padding: "0",
                      minWidth: "48px",
                      height: "100%",
                    }}
                  >
                    <HeartFilled style={{ fontSize: "20px" }} />
                  </Button>
                  <Button
                    style={{
                      width: "100%",
                      fontWeight: "600",
                      backgroundColor: "#8DD3BB",
                      height: "100%",
                      marginLeft: "16px",
                    }}
                  >
                    View Place
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TestComponent;
