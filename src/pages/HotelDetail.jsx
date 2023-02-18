import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Typography,
  Select,
  Divider,
  Rate,
  Image,
  Tabs,
  Breadcrumb,
} from "antd";

import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
  ShareAltOutlined,
} from "@ant-design/icons";

import hotelIstanbul1 from "../../assets/images/hotel-istanbul-1.png";
import hotelIstanbul2 from "../../assets/images/hotel-istanbul-2.png";
import hotelIstanbul3 from "../../assets/images/hotel-istanbul-3.png";
import hotelIstanbul4 from "../../assets/images/hotel-istanbul-4.png";
import hotelIstanbul5 from "../../assets/images/hotel-istanbul-5.png";

import "./index.css";

const { Text, Paragraph } = Typography;

const hotelFeatures = [
  "Near park",
  "Near nightlife",
  "Near theater",
  "Clean hotel",
];

const HotelDetail = () => {
  return (
    <div>
      {/* Hotel General Information Section */}
      <Row>
        <Col span={24}>
          <Row gutter={[0, 32]}>
            {/* Breadcrumb Part */}
            <Col span={24}>
              <Breadcrumb separator=">">
                <Breadcrumb.Item className="montserrat-regular-slamon">
                  Turkey
                </Breadcrumb.Item>
                <Breadcrumb.Item className="montserrat-regular-slamon">
                  Istanbul
                </Breadcrumb.Item>
                <Breadcrumb.Item className="montserrat-regular">
                  Hotel Name
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>

            {/* General Information Part */}
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              span={24}
            >
              {/* Hotel Name and Address */}
              <Row
                gutter={[0, 16]}
                justify="space-between"
                style={{
                  flexDirection: "column",
                }}
              >
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <Text className="trade-gothic-bold">
                    CVK Park Bosphorus Hotel Istanbul
                  </Text>
                  <div>
                    <Rate
                      style={{ fontSize: "16px", color: "#ff8682" }}
                      disabled
                      defaultValue={5}
                    />
                    &nbsp;
                    <Text className="montserrat-regular-12px">
                      5 Star Hotel
                    </Text>
                  </div>
                </Col>

                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    className="montserrat-regular-12px"
                    style={{ opacity: "0.75" }}
                  >
                    <EnvironmentFilled />
                    &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {" "}
                    <Button className="small-button">
                      <Text className="montserrat-regular-12px">4.2</Text>
                    </Button>
                    <Text className="montserrat-bold-12px">Very Good</Text>
                    <Text className="montserrat-regular-12px">371 reviews</Text>
                  </div>
                </Col>
              </Row>

              {/* Price and Button */}
              <Row gutter={[0, 16]} style={{ width: "276px" }}>
                <Col span={24}>
                  <Text
                    className="montserrat-bold-slamon"
                    style={{
                      fontSize: "32px",
                      display: "block",
                      textAlign: "right",
                      lineHeight: "40px",
                    }}
                  >
                    $240
                    <Text className="montserrat-bold-slamon">/night</Text>
                  </Text>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "15px",
                  }}
                  span={24}
                >
                  <Button className="button-for-icons">
                    <HeartOutlined style={{ fontSize: "20px" }} />
                  </Button>
                  <Button className="button-for-icons">
                    <ShareAltOutlined style={{ fontSize: "20px" }} />
                  </Button>
                  <Button className="large-button-background-filled">
                    <Text className="montserrat-semibold">Book now</Text>
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* Image Part */}
            <Col
              style={{
                borderRadius: "16px",
                display: "flex",
                gap: "8px",
              }}
              span={24}
            >
              <img
                src={hotelIstanbul1}
                alt="error-image"
                style={{ display: "block" }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  position: "relative",
                }}
              >
                <img src={hotelIstanbul2} style={{ display: "block" }} />
                <img src={hotelIstanbul4} style={{ display: "block" }} />
                <img src={hotelIstanbul3} style={{ display: "block" }} />
                <img src={hotelIstanbul5} style={{ display: "block" }} />
                <Button
                  className="large-button-background-filled"
                  style={{
                    position: "absolute",
                    right: "16px",
                    bottom: "16px",
                    width: "25%",
                  }}
                >
                  <Text className="montserrat-semibold">View all photos</Text>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Divider */}
      <Row>
        <Col span={24}>
          <Divider style={{ margin: " 64px 0" }} />
        </Col>
      </Row>

      {/* Hotel Detail Infomartion Section */}
      <Row gutter={[0, 64]}>
        {/* Hotel Overview Part */}
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
          span={24}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Text className="trade-gothic-bold" style={{ fontSize: "20px" }}>
              Overview
            </Text>
            <Paragraph
              className="montserrat-regular"
              style={{ fontSize: "16px" }}
            >
              Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
              Bosphorus Hotel Istanbul has risen from the ashes of the historic
              Park Hotel, which also served as Foreign Affairs Palace 120 years
              ago and is hosting its guests by assuming this hospitality
              mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
              fitness area, 18 meeting rooms including 4 dividable ones and 3
              terraces with Bosphorus view, Istanbuls largest terrace with
              Bosphorus view (4500 m2) and latest technology infrastructure, CVK
              Park Bosphorus Hotel Istanbul is destined to be the popular
              attraction point of the city. Room and suite categories at various
              sizes with city and Bosphorus view, as well as 68 separate luxury
              suites, are offered to its special guests as a wide variety of
              selection.
            </Paragraph>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              className="feature-container"
              style={{
                backgroundColor: "#8DD3BB",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  fontSize: "32px",
                  lineHeight: "40px",
                }}
                className="trade-gothic-bold"
              >
                4.2
              </Text>
              <Text className="montserrat-bold-16px">Very good</Text>
              <Text className="montserrat-regular">371 reviews</Text>
            </div>
            {hotelFeatures.map((element) => {
              return (
                <>
                  {" "}
                  <div
                    className="feature-container"
                    style={{ justifyContent: "space-between" }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_48_5001)">
                        <path
                          d="M12.9999 31.9999C12.6839 32.0016 12.3749 31.9067 12.1142 31.728C11.8535 31.5493 11.6536 31.2953 11.5411 30.9999L9.05113 24.5249C9.0007 24.3945 8.92355 24.276 8.82464 24.1771C8.72573 24.0781 8.60723 24.001 8.47676 23.9506L1.99988 21.4587C1.70485 21.3455 1.45108 21.1454 1.27208 20.885C1.09308 20.6246 0.997252 20.316 0.997252 19.9999C0.997252 19.6839 1.09308 19.3753 1.27208 19.1149C1.45108 18.8545 1.70485 18.6544 1.99988 18.5412L8.47488 16.0512C8.60536 16.0008 8.72385 15.9236 8.82277 15.8247C8.92168 15.7258 8.99883 15.6073 9.04926 15.4768L11.5411 8.99995C11.6544 8.70491 11.8544 8.45115 12.1148 8.27215C12.3753 8.09314 12.6839 7.99732 12.9999 7.99732C13.3159 7.99732 13.6245 8.09314 13.8849 8.27215C14.1454 8.45115 14.3454 8.70491 14.4586 8.99995L16.9486 15.4749C16.9991 15.6054 17.0762 15.7239 17.1751 15.8228C17.274 15.9217 17.3925 15.9989 17.523 16.0493L23.9605 18.5262C24.2676 18.64 24.5321 18.8457 24.7181 19.1152C24.904 19.3847 25.0024 19.705 24.9999 20.0324C24.9951 20.343 24.8973 20.6449 24.719 20.8992C24.5407 21.1535 24.2902 21.3484 23.9999 21.4587L17.5249 23.9487C17.3944 23.9991 17.2759 24.0763 17.177 24.1752C17.0781 24.2741 17.0009 24.3926 16.9505 24.5231L14.4586 30.9999C14.3462 31.2953 14.1462 31.5493 13.8856 31.728C13.6249 31.9067 13.3159 32.0016 12.9999 31.9999ZM5.49988 10.9999C5.3146 10.9999 5.13368 10.9438 4.98094 10.8389C4.8282 10.734 4.71082 10.5854 4.64426 10.4124L3.59051 7.67245C3.56767 7.61252 3.53242 7.5581 3.48707 7.51276C3.44173 7.46741 3.38731 7.43216 3.32738 7.40932L0.587382 6.35557C0.414494 6.289 0.26583 6.17161 0.160977 6.01887C0.0561237 5.86613 0 5.68521 0 5.49995C0 5.31468 0.0561237 5.13377 0.160977 4.98103C0.26583 4.82829 0.414494 4.7109 0.587382 4.64432L3.32738 3.59057C3.38725 3.56763 3.44161 3.53235 3.48695 3.48701C3.53228 3.44168 3.56756 3.38731 3.59051 3.32745L4.63488 0.611824C4.69378 0.451951 4.79513 0.31115 4.92805 0.204555C5.06096 0.0979598 5.22041 0.0296006 5.38926 0.00682422C5.59197 -0.0178194 5.79712 0.0259172 5.97216 0.131099C6.14719 0.23628 6.28211 0.396886 6.35551 0.587449L7.40926 3.32745C7.4322 3.38731 7.46748 3.44168 7.51282 3.48701C7.55815 3.53235 7.61252 3.56763 7.67238 3.59057L10.4124 4.64432C10.5853 4.7109 10.7339 4.82829 10.8388 4.98103C10.9436 5.13377 10.9998 5.31468 10.9998 5.49995C10.9998 5.68521 10.9436 5.86613 10.8388 6.01887C10.7339 6.17161 10.5853 6.289 10.4124 6.35557L7.67238 7.40932C7.61246 7.43216 7.55804 7.46741 7.51269 7.51276C7.46734 7.5581 7.4321 7.61252 7.40926 7.67245L6.35551 10.4124C6.28895 10.5854 6.17157 10.734 6.01883 10.8389C5.86609 10.9438 5.68516 10.9999 5.49988 10.9999ZM24.9999 15.9999C24.7978 15.9999 24.6004 15.9386 24.4338 15.8241C24.2672 15.7096 24.1393 15.5474 24.0668 15.3587L22.6393 11.6481C22.6141 11.5827 22.5756 11.5233 22.526 11.4738C22.4765 11.4243 22.4171 11.3857 22.3518 11.3606L18.6411 9.93307C18.4526 9.86043 18.2905 9.7324 18.1762 9.56583C18.0619 9.39926 18.0007 9.20198 18.0007 8.99995C18.0007 8.79792 18.0619 8.60063 18.1762 8.43406C18.2905 8.2675 18.4526 8.13946 18.6411 8.06682L22.3518 6.63932C22.4171 6.61421 22.4765 6.57564 22.526 6.52612C22.5756 6.47659 22.6141 6.41721 22.6393 6.35182L24.0561 2.66745C24.1208 2.49322 24.2315 2.33978 24.3765 2.22345C24.5214 2.10713 24.6952 2.03226 24.8793 2.00682C25.1005 1.98005 25.3243 2.02792 25.5152 2.14285C25.7061 2.25777 25.8531 2.43317 25.933 2.6412L27.3605 6.35182C27.3856 6.41721 27.4242 6.47659 27.4737 6.52612C27.5232 6.57564 27.5826 6.61421 27.648 6.63932L31.3586 8.06682C31.5471 8.13946 31.7092 8.2675 31.8236 8.43406C31.9379 8.60063 31.9991 8.79792 31.9991 8.99995C31.9991 9.20198 31.9379 9.39926 31.8236 9.56583C31.7092 9.7324 31.5471 9.86043 31.3586 9.93307L27.648 11.3606C27.5826 11.3857 27.5232 11.4243 27.4737 11.4738C27.4242 11.5233 27.3856 11.5827 27.3605 11.6481L25.933 15.3587C25.8605 15.5474 25.7325 15.7096 25.5659 15.8241C25.3994 15.9386 25.202 15.9999 24.9999 15.9999Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_5001">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Text>{element}</Text>
                  </div>
                </>
              );
            })}
          </div>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Available Rooms Part */}
        <Col
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
          span={24}
        >
          <Text className="trade-gothic-bold" style={{ fontSize: "20px" }}>
            Available Rooms
          </Text>
          <Row gutter={[0, 8]}>
            <Col
              span={24}
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Room Name */}
              <div
                style={{
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <img
                  src={hotelIstanbul2}
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "block",
                    borderRadius: "4px",
                  }}
                />
                <Text className="montserrat-medium-16px">
                  Superior room - 1 double bed or 2 twin beds
                </Text>
              </div>

              {/* Price and Button */}
              <div
                style={{
                  border: "1px solid black",
                  display: "flex",
                  gap: "64px",
                  alignItems: "center",
                }}
              >
                <Text className="montserrat-semibold-24px">
                  $240<Text className="montserrat-semibold">/night</Text>
                </Text>
                <Button
                  className="large-button-background-filled"
                  style={{ width: "150px" }}
                >
                  <Text className="montserrat-semibold">Book now</Text>
                </Button>
              </div>
            </Col>
            <Divider style={{ margin: "0" }} />
            <Col span={24} style={{ border: "1px solid black" }}>
              Room 1
            </Col>
            <Divider style={{ margin: "0" }} />
            <Col span={24} style={{ border: "1px solid black" }}>
              Room 1
            </Col>
            <Divider style={{ margin: "0" }} />
            <Col span={24} style={{ border: "1px solid black" }}>
              Room 1
            </Col>
          </Row>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Location/Maps Part */}
        <Col style={{ border: "1px solid black" }} span={24}>
          Location/Maps
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Amenities Part */}
        <Col style={{ border: "1px solid black" }} span={24}>
          Amenities
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Reviews Part */}
        <Col style={{ border: "1px solid black" }} span={24}>
          Reviews
        </Col>
      </Row>
    </div>
  );
};

export default HotelDetail;
