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
  Rate,
  Image,
} from "antd";

// import "./fonts/Montserrat/Montserrat-Bold.ttf";
// import "./fonts/Montserrat/Montserrat-Medium.ttf";
// import "./fonts/Montserrat/Montserrat-Regular.ttf";
// import "./fonts/Montserrat/Montserrat-SemiBold.ttf";

import "./app.css";
import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
} from "@ant-design/icons";

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
  const [likedItem, setLikedItem] = useState(false);

  const handleLikeItems = () => {
    setLikedItem(!likedItem);
    console.log(likedItem);
  };
  return (
    <div>
      <Row>
        <Col span={13}>
          <Row gutter={[0, 32]}>
            {/* Category Menu */}
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

            {/* Sort Bar */}
            <Col
              style={{
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

            {/* Search Result*/}
            <Col
              span={24}
              className="search-result-container"
              style={{ display: "flex" }}
            >
              <Image
                preview={false}
                src={hotelIstanbul1}
                style={{ width: "300px", height: "100%" }}
              >
                Image
              </Image>

              <Row className="search-result-info-container" gutter={[0, 24]}>
                {/* Description Info */}
                <Col span={24}>
                  <Row gutter={24}>
                    <Col span={18}>
                      <div>
                        <Row gutter={[0, 16]}>
                          <Col span={24}>
                            <Title
                              className="title-font"
                              style={{
                                margin: "0",
                              }}
                              level={3}
                            >
                              CVK Park Bosphorus Hotel Istanbul
                            </Title>
                          </Col>
                          <Col
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                            }}
                            span={24}
                          >
                            <Text
                              className="items-info-text"
                              style={{ opacity: "0.75" }}
                            >
                              <EnvironmentFilled />
                              &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul
                              34437
                            </Text>
                            <div>
                              <Rate
                                style={{ fontSize: "15px" }}
                                disabled
                                defaultValue={5}
                              />
                              &nbsp;
                              <Text className="items-info-text">
                                5 Star Hotel
                              </Text>
                              <Text
                                className="items-info-text"
                                style={{ marginLeft: "32px" }}
                              >
                                20+ Aminities
                              </Text>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              {" "}
                              <Button className="small-button-for-text">
                                <Text className="button-small-text">4.2</Text>
                              </Button>
                              <Text
                                className="items-info-text"
                                style={{ fontWeight: "700" }}
                              >
                                Very Good
                              </Text>
                              <Text className="items-info-text">
                                371 reviews
                              </Text>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div>
                        <Text className="pricebox-text">starting from</Text>
                        <br />
                        <span className="pricebox-highlight-title">$240</span>
                        <span className="pricebox-highlight-text">/night</span>
                        <Text
                          className="pricebox-text"
                          style={{ textAlign: "right", display: "block" }}
                        >
                          excl.tax
                        </Text>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Divider style={{ margin: "0" }} />

                {/* Button */}
                <Col span={24} style={{ display: "flex", gap: "16px" }}>
                  <Button
                    className="button-for-icons"
                    onClick={handleLikeItems}
                  >
                    {likedItem ? (
                      <HeartFilled style={{ fontSize: "20px" }} />
                    ) : (
                      <HeartOutlined style={{ fontSize: "20px" }} />
                    )}
                  </Button>
                  <Button className="large-button-background-filled">
                    <Text className="button-text">View Place</Text>
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
