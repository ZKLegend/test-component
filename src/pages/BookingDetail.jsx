import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Row, Col, Typography, Divider, Breadcrumb, Input, Button } from "antd";
import {
  EnvironmentFilled,
  LineOutlined,
  MailFilled,
  PlusCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import hotelIstanbul6 from "../../assets/images/hotel-istanbul-6.png";
import hotelLogo from "../../assets/images/hotel-logo.png";
import visaImage from "../../assets/images/Visa.png";

import "./index.css";

const { Title, Text, Paragraph } = Typography;

const BookingDetail = () => {
  const [radioSelected, setRadioSelected] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cancelBox = () => {
    console.log("Test");
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const changeInputStyle = (event) => {
    console.log(event.target.value);
    setRadioSelected(event.target.id);
  };
  console.log(radioSelected);
  return (
    <div className="booking-detail">
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

      <Row gutter={40} style={{ marginTop: "32px" }}>
        {/* Left Content */}
        <Col>
          <div className="flex-column" style={{ width: "790px", gap: "40px" }}>
            {/* Booking Information */}
            <div
              className="flex-column content-border-box"
              style={{
                gap: "32px",
              }}
            >
              <div
                className="flex-space-between-align-center"
                style={{ gap: "124px" }}
              >
                <Text
                  style={{ width: "491px" }}
                  className="trade-gothic-lt-extended-bold-24px"
                >
                  Superior room - 1 double bed or 2 twin beds
                </Text>
                <Text
                  className="montserrat-bold-slamon"
                  style={{ fontSize: "32px" }}
                >
                  $240<Text className="montserrat-bold-slamon">/night</Text>
                </Text>
              </div>

              <div
                className="content-green-border-box flex-align-center "
                style={{ gap: "24px" }}
              >
                <img alt="hotel-logo" src={hotelLogo} />
                <div className="flex-column" style={{ gap: "8px" }}>
                  <Text className="montserrat-semibold-24px">
                    CVK Park Bosphorus Hotel Istanbul
                  </Text>{" "}
                  <Text
                    className="montserrat-medium"
                    style={{ opacity: "0.75" }}
                  >
                    <EnvironmentFilled />
                    &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </Text>
                </div>
              </div>

              <div className="flex-space-between-align-center">
                <div className="flex-column" style={{ gap: "8px" }}>
                  <Text className="montserrat-semibold-20px">
                    Thurday, Dec 8
                  </Text>
                  <Text
                    className="montserrat-medium"
                    style={{ opacity: "0.6" }}
                  >
                    Check-In
                  </Text>
                </div>
                <div className="flex-align-center">
                  <LineOutlined style={{ fontSize: "36px" }} />
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.5 17L30 17L30 6.5C30 5.30653 29.5259 4.16193 28.682 3.31802C27.8381 2.47411 26.6935 2 25.5 2L7.5 2C6.30653 2 5.16193 2.47411 4.31802 3.31802C3.47411 4.16193 3 5.30653 3 6.5L3 45.5C3 45.8978 3.15804 46.2794 3.43934 46.5607C3.72064 46.842 4.10218 47 4.5 47H14.25C14.4489 47 14.6397 46.921 14.7803 46.7803C14.921 46.6397 15 46.4489 15 46.25L15 39.5422C15 38.735 15.6206 38.0422 16.4278 38.0019C16.6306 37.9921 16.8333 38.0236 17.0236 38.0945C17.2139 38.1654 17.3878 38.2741 17.5348 38.4142C17.6818 38.5543 17.7988 38.7227 17.8788 38.9094C17.9587 39.096 18 39.297 18 39.5L18 46.25C18 46.4489 18.079 46.6397 18.2197 46.7803C18.3603 46.921 18.5511 47 18.75 47L43.5 47C43.8978 47 44.2794 46.842 44.5607 46.5607C44.842 46.2794 45 45.8978 45 45.5L45 21.5C45 20.3065 44.5259 19.1619 43.682 18.318C42.8381 17.4741 41.6935 17 40.5 17ZM9.195 40.9878C8.88434 41.0284 8.56875 40.9708 8.29254 40.8229C8.01632 40.675 7.79334 40.4444 7.65489 40.1633C7.51644 39.8823 7.46946 39.5649 7.52057 39.2558C7.57167 38.9467 7.71828 38.6614 7.93982 38.4398C8.16136 38.2183 8.44671 38.0717 8.75582 38.0206C9.06493 37.9695 9.38228 38.0164 9.66334 38.1549C9.94439 38.2933 10.175 38.5163 10.3229 38.7925C10.4708 39.0688 10.5284 39.3843 10.4878 39.695C10.4449 40.0228 10.2949 40.3273 10.0611 40.5611C9.82734 40.7949 9.52285 40.9449 9.195 40.9878ZM9.195 33.4878C8.88434 33.5284 8.56875 33.4708 8.29254 33.3229C8.01632 33.175 7.79334 32.9444 7.65489 32.6633C7.51644 32.3823 7.46946 32.0649 7.52057 31.7558C7.57167 31.4467 7.71828 31.1614 7.93982 30.9398C8.16136 30.7183 8.44671 30.5717 8.75582 30.5206C9.06493 30.4695 9.38228 30.5164 9.66334 30.6549C9.94439 30.7933 10.175 31.0163 10.3229 31.2925C10.4708 31.5688 10.5284 31.8843 10.4878 32.195C10.4449 32.5228 10.2949 32.8273 10.0611 33.0611C9.82734 33.2949 9.52285 33.4449 9.195 33.4878ZM9.195 25.9878C8.88434 26.0284 8.56875 25.9708 8.29254 25.8229C8.01632 25.675 7.79334 25.4444 7.65489 25.1633C7.51644 24.8823 7.46946 24.5649 7.52057 24.2558C7.57167 23.9467 7.71828 23.6614 7.93982 23.4398C8.16136 23.2183 8.44671 23.0717 8.75582 23.0206C9.06493 22.9695 9.38228 23.0164 9.66334 23.1549C9.94439 23.2933 10.175 23.5163 10.3229 23.7925C10.4708 24.0688 10.5284 24.3843 10.4878 24.695C10.4449 25.0228 10.2949 25.3273 10.0611 25.5611C9.82734 25.7949 9.52285 25.9449 9.195 25.9878ZM9.195 18.4878C8.88434 18.5284 8.56875 18.4708 8.29254 18.3229C8.01632 18.175 7.79334 17.9444 7.65489 17.6633C7.51644 17.3823 7.46946 17.0649 7.52057 16.7558C7.57167 16.4467 7.71828 16.1614 7.93982 15.9398C8.16136 15.7183 8.44671 15.5717 8.75582 15.5206C9.06493 15.4695 9.38228 15.5164 9.66334 15.6549C9.94439 15.7933 10.175 16.0163 10.3229 16.2925C10.4708 16.5688 10.5284 16.8843 10.4878 17.195C10.4449 17.5228 10.2949 17.8273 10.0611 18.0611C9.82734 18.2949 9.52285 18.4449 9.195 18.4878ZM9.195 10.9878C8.88434 11.0284 8.56875 10.9708 8.29254 10.8229C8.01632 10.675 7.79334 10.4444 7.65489 10.1633C7.51644 9.88228 7.46946 9.56493 7.52057 9.25582C7.57167 8.94671 7.71828 8.66136 7.93982 8.43982C8.16136 8.21828 8.44671 8.07167 8.75582 8.02057C9.06493 7.96946 9.38228 8.01644 9.66334 8.15489C9.94439 8.29334 10.175 8.51632 10.3229 8.79254C10.4708 9.06875 10.5284 9.38434 10.4878 9.695C10.4449 10.0228 10.2949 10.3273 10.0611 10.5611C9.82734 10.7949 9.52285 10.9449 9.195 10.9878ZM16.695 33.4878C16.3843 33.5284 16.0688 33.4708 15.7925 33.3229C15.5163 33.175 15.2933 32.9444 15.1549 32.6633C15.0164 32.3823 14.9695 32.0649 15.0206 31.7558C15.0717 31.4467 15.2183 31.1614 15.4398 30.9398C15.6614 30.7183 15.9467 30.5717 16.2558 30.5206C16.5649 30.4695 16.8823 30.5164 17.1633 30.6549C17.4444 30.7933 17.675 31.0163 17.8229 31.2925C17.9708 31.5688 18.0284 31.8843 17.9878 32.195C17.9449 32.5228 17.7949 32.8273 17.5611 33.0611C17.3273 33.2949 17.0228 33.4449 16.695 33.4878ZM16.695 25.9878C16.3843 26.0284 16.0688 25.9708 15.7925 25.8229C15.5163 25.675 15.2933 25.4444 15.1549 25.1633C15.0164 24.8823 14.9695 24.5649 15.0206 24.2558C15.0717 23.9467 15.2183 23.6614 15.4398 23.4398C15.6614 23.2183 15.9467 23.0717 16.2558 23.0206C16.5649 22.9695 16.8823 23.0164 17.1633 23.1549C17.4444 23.2933 17.675 23.5163 17.8229 23.7925C17.9708 24.0688 18.0284 24.3843 17.9878 24.695C17.9449 25.0228 17.7949 25.3273 17.5611 25.5611C17.3273 25.7949 17.0228 25.9449 16.695 25.9878ZM16.695 18.4878C16.3843 18.5284 16.0688 18.4708 15.7925 18.3229C15.5163 18.175 15.2933 17.9444 15.1549 17.6633C15.0164 17.3823 14.9695 17.0649 15.0206 16.7558C15.0717 16.4467 15.2183 16.1614 15.4398 15.9398C15.6614 15.7183 15.9467 15.5717 16.2558 15.5206C16.5649 15.4695 16.8823 15.5164 17.1633 15.6549C17.4444 15.7933 17.675 16.0163 17.8229 16.2925C17.9708 16.5688 18.0284 16.8843 17.9878 17.195C17.9449 17.5228 17.7949 17.8273 17.5611 18.0611C17.3273 18.2949 17.0228 18.4449 16.695 18.4878ZM16.695 10.9878C16.3843 11.0284 16.0688 10.9708 15.7925 10.8229C15.5163 10.675 15.2933 10.4444 15.1549 10.1633C15.0164 9.88228 14.9695 9.56493 15.0206 9.25582C15.0717 8.94671 15.2183 8.66136 15.4398 8.43982C15.6614 8.21828 15.9467 8.07167 16.2558 8.02057C16.5649 7.96946 16.8823 8.01644 17.1633 8.15489C17.4444 8.29334 17.675 8.51632 17.8229 8.79254C17.9708 9.06875 18.0284 9.38434 17.9878 9.695C17.9449 10.0228 17.7949 10.3273 17.5611 10.5611C17.3273 10.7949 17.0228 10.9449 16.695 10.9878ZM24.195 40.9878C23.8843 41.0284 23.5688 40.9708 23.2925 40.8229C23.0163 40.675 22.7933 40.4444 22.6549 40.1633C22.5164 39.8823 22.4695 39.5649 22.5206 39.2558C22.5717 38.9467 22.7183 38.6614 22.9398 38.4398C23.1614 38.2183 23.4467 38.0717 23.7558 38.0206C24.0649 37.9695 24.3823 38.0164 24.6633 38.1549C24.9444 38.2933 25.175 38.5163 25.3229 38.7925C25.4708 39.0688 25.5284 39.3843 25.4878 39.695C25.4449 40.0228 25.2949 40.3273 25.0611 40.5611C24.8273 40.7949 24.5228 40.9449 24.195 40.9878ZM24.195 33.4878C23.8843 33.5284 23.5688 33.4708 23.2925 33.3229C23.0163 33.175 22.7933 32.9444 22.6549 32.6633C22.5164 32.3823 22.4695 32.0649 22.5206 31.7558C22.5717 31.4467 22.7183 31.1614 22.9398 30.9398C23.1614 30.7183 23.4467 30.5717 23.7558 30.5206C24.0649 30.4695 24.3823 30.5164 24.6633 30.6549C24.9444 30.7933 25.175 31.0163 25.3229 31.2925C25.4708 31.5688 25.5284 31.8843 25.4878 32.195C25.4449 32.5228 25.2949 32.8273 25.0611 33.0611C24.8273 33.2949 24.5228 33.4449 24.195 33.4878ZM24.195 25.9878C23.8843 26.0284 23.5688 25.9708 23.2925 25.8229C23.0163 25.675 22.7933 25.4444 22.6549 25.1633C22.5164 24.8823 22.4695 24.5649 22.5206 24.2558C22.5717 23.9467 22.7183 23.6614 22.9398 23.4398C23.1614 23.2183 23.4467 23.0717 23.7558 23.0206C24.0649 22.9695 24.3823 23.0164 24.6633 23.1549C24.9444 23.2933 25.175 23.5163 25.3229 23.7925C25.4708 24.0688 25.5284 24.3843 25.4878 24.695C25.4449 25.0228 25.2949 25.3273 25.0611 25.5611C24.8273 25.7949 24.5228 25.9449 24.195 25.9878ZM24.195 18.4878C23.8843 18.5284 23.5688 18.4708 23.2925 18.3229C23.0163 18.175 22.7933 17.9444 22.6549 17.6633C22.5164 17.3823 22.4695 17.0649 22.5206 16.7558C22.5717 16.4467 22.7183 16.1614 22.9398 15.9398C23.1614 15.7183 23.4467 15.5717 23.7558 15.5206C24.0649 15.4695 24.3823 15.5164 24.6633 15.6549C24.9444 15.7933 25.175 16.0163 25.3229 16.2925C25.4708 16.5688 25.5284 16.8843 25.4878 17.195C25.4449 17.5228 25.2949 17.8273 25.0611 18.0611C24.8273 18.2949 24.5228 18.4449 24.195 18.4878ZM24.195 10.9878C23.8843 11.0284 23.5688 10.9708 23.2925 10.8229C23.0163 10.675 22.7933 10.4444 22.6549 10.1633C22.5164 9.88228 22.4695 9.56493 22.5206 9.25582C22.5717 8.94671 22.7183 8.66136 22.9398 8.43982C23.1614 8.21828 23.4467 8.07167 23.7558 8.02057C24.0649 7.96946 24.3823 8.01644 24.6633 8.15489C24.9444 8.29334 25.175 8.51632 25.3229 8.79254C25.4708 9.06875 25.5284 9.38434 25.4878 9.695C25.4449 10.0228 25.2949 10.3273 25.0611 10.5611C24.8273 10.7949 24.5228 10.9449 24.195 10.9878ZM41.625 44L30 44L30 20L40.5 20C40.8978 20 41.2794 20.158 41.5607 20.4393C41.842 20.7206 42 21.1022 42 21.5L42 43.625C42 43.7245 41.9605 43.8198 41.8902 43.8902C41.8198 43.9605 41.7245 44 41.625 44Z"
                      fill="#112211"
                    />
                    <path
                      d="M37.5 38C37.2033 38 36.9133 38.088 36.6666 38.2528C36.42 38.4176 36.2277 38.6519 36.1142 38.926C36.0006 39.2001 35.9709 39.5017 36.0288 39.7926C36.0867 40.0836 36.2296 40.3509 36.4393 40.5607C36.6491 40.7704 36.9164 40.9133 37.2074 40.9712C37.4983 41.0291 37.7999 40.9993 38.074 40.8858C38.3481 40.7723 38.5824 40.58 38.7472 40.3334C38.912 40.0867 39 39.7967 39 39.5C39 39.1022 38.842 38.7206 38.5607 38.4393C38.2794 38.158 37.8978 38 37.5 38ZM37.5 30.5C37.2033 30.5 36.9133 30.588 36.6666 30.7528C36.42 30.9176 36.2277 31.1519 36.1142 31.426C36.0006 31.7001 35.9709 32.0017 36.0288 32.2926C36.0867 32.5836 36.2296 32.8509 36.4393 33.0607C36.6491 33.2704 36.9164 33.4133 37.2074 33.4712C37.4983 33.5291 37.7999 33.4993 38.074 33.3858C38.3481 33.2723 38.5824 33.08 38.7472 32.8334C38.912 32.5867 39 32.2967 39 32C39 31.6022 38.842 31.2206 38.5607 30.9393C38.2794 30.658 37.8978 30.5 37.5 30.5ZM37.5 23C37.2033 23 36.9133 23.088 36.6666 23.2528C36.42 23.4176 36.2277 23.6519 36.1142 23.926C36.0006 24.2001 35.9709 24.5017 36.0288 24.7926C36.0867 25.0836 36.2296 25.3509 36.4393 25.5607C36.6491 25.7704 36.9164 25.9133 37.2074 25.9712C37.4983 26.0291 37.7999 25.9994 38.074 25.8858C38.3481 25.7723 38.5824 25.58 38.7472 25.3334C38.912 25.0867 39 24.7967 39 24.5C39 24.1022 38.842 23.7206 38.5607 23.4393C38.2794 23.158 37.8978 23 37.5 23ZM31.5 38C31.2033 38 30.9133 38.088 30.6666 38.2528C30.42 38.4176 30.2277 38.6519 30.1142 38.926C30.0006 39.2001 29.9709 39.5017 30.0288 39.7926C30.0867 40.0836 30.2296 40.3509 30.4393 40.5607C30.6491 40.7704 30.9164 40.9133 31.2074 40.9712C31.4983 41.0291 31.7999 40.9993 32.074 40.8858C32.3481 40.7723 32.5824 40.58 32.7472 40.3334C32.912 40.0867 33 39.7967 33 39.5C33 39.1022 32.842 38.7206 32.5607 38.4393C32.2794 38.158 31.8978 38 31.5 38ZM31.5 30.5C31.2033 30.5 30.9133 30.588 30.6666 30.7528C30.42 30.9176 30.2277 31.1519 30.1142 31.426C30.0006 31.7001 29.9709 32.0017 30.0288 32.2926C30.0867 32.5836 30.2296 32.8509 30.4393 33.0607C30.6491 33.2704 30.9164 33.4133 31.2074 33.4712C31.4983 33.5291 31.7999 33.4993 32.074 33.3858C32.3481 33.2723 32.5824 33.08 32.7472 32.8334C32.912 32.5867 33 32.2967 33 32C33 31.6022 32.842 31.2206 32.5607 30.9393C32.2794 30.658 31.8978 30.5 31.5 30.5ZM31.5 23C31.2033 23 30.9133 23.088 30.6666 23.2528C30.42 23.4176 30.2277 23.6519 30.1142 23.926C30.0006 24.2001 29.9709 24.5017 30.0288 24.7926C30.0867 25.0836 30.2296 25.3509 30.4393 25.5607C30.6491 25.7704 30.9164 25.9133 31.2074 25.9712C31.4983 26.0291 31.7999 25.9994 32.074 25.8858C32.3481 25.7723 32.5824 25.58 32.7472 25.3334C32.912 25.0867 33 24.7967 33 24.5C33 24.1022 32.842 23.7206 32.5607 23.4393C32.2794 23.158 31.8978 23 31.5 23Z"
                      fill="black"
                    />
                  </svg>

                  <LineOutlined style={{ fontSize: "36px" }} />
                </div>
                <div className="flex-column" style={{ gap: "8px" }}>
                  <Text className="montserrat-semibold-20px">
                    Friday, Dec 9
                  </Text>
                  <Text
                    className="montserrat-medium"
                    style={{ opacity: "0.6" }}
                  >
                    Check-Out
                  </Text>
                </div>
              </div>
            </div>

            {/* Pay Option */}
            <div
              className="flex-column content-border-box"
              style={{
                gap: "16px",
              }}
            >
              <div
                className={
                  radioSelected !== "payfull"
                    ? "flex-space-between-align-center"
                    : "content-green-background-box flex-space-between-align-center"
                }
                style={{ gap: "64px", padding: "16px" }}
              >
                <label
                  className="flex-column"
                  style={{ gap: "8px" }}
                  htmlFor="payfull"
                >
                  <span className="trade-gothic-lt-extended-bold-16px">
                    Pay in full
                  </span>
                  <span className="montserrat-regular">
                    Pay the total and you are all set
                  </span>
                </label>

                <input
                  onChange={changeInputStyle}
                  type="radio"
                  id="payfull"
                  value={true}
                  name="radioSelected"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div
                className={
                  radioSelected !== "payhalf"
                    ? "flex-space-between-align-center"
                    : "content-green-background-box flex-space-between-align-center"
                }
                style={{ gap: "64px", padding: "16px" }}
              >
                <label
                  className="flex-column"
                  style={{ gap: "8px" }}
                  htmlFor="payhalf"
                >
                  <span className="trade-gothic-lt-extended-bold-16px">
                    Pay in half
                  </span>
                  <span className="montserrat-regular">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </span>
                </label>

                <input
                  onChange={changeInputStyle}
                  type="radio"
                  id="payhalf"
                  value={false}
                  name="radioSelected"
                  style={{ minHeight: "24px", minWidth: "24px" }}
                />
              </div>
            </div>

            {!isLoggedIn ? (
              <LoginContentBox handleLogin={handleLogin} />
            ) : (
              <VisaCardContentBox handleLogOut={handleLogOut} />
            )}
          </div>
        </Col>

        {/* Right Content */}
        <Col>
          <div
            className="content-border-box flex-column"
            style={{ width: "450px", gap: "16px" }}
          >
            {/* Hotel Name, Image, Room Name */}
            <div style={{ display: "flex", gap: "16px" }}>
              <img
                style={{
                  display: "block",
                  width: "120px",
                  height: "120px",
                  borderRadius: "12px",
                }}
                alt="hotel-istanbul-6"
                src={hotelIstanbul6}
              />
              <div className="flex-column-space-between">
                <div>
                  <Text className="montserrat-medium">
                    CVK Park Bosphorus Hotel Istanbul
                  </Text>
                  <br />
                  <Text className="montserrat-semibold-20px">
                    Superior room - 1 double bed or 2 twin beds
                  </Text>
                </div>
                <div
                  className="flex-align-center"
                  style={{
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
              </div>
            </div>

            <Divider style={{ margin: "0" }} />

            <Text className="montserrat-medium-16px">
              Your booking is protected by <b>golobe</b>
            </Text>

            <Divider style={{ margin: "0" }} />

            {/* Booking Price */}
            <div className="flex-column" style={{ gap: "16px" }}>
              <Text className="trade-gothic-lt-extended-bold-16px">
                Price Details
              </Text>
              <div className="flex-space-between">
                <Text className="montserrat-medium-16px">Base Fare</Text>
                <Text className="montserrat-semibold-16px">$240</Text>
              </div>
              <div className="flex-space-between">
                <Text className="montserrat-medium-16px">Discount</Text>
                <Text className="montserrat-semibold-16px">$0</Text>
              </div>
              <div className="flex-space-between">
                <Text className="montserrat-medium-16px">Taxes</Text>
                <Text className="montserrat-semibold-16px">$20</Text>
              </div>
              <div className="flex-space-between">
                <Text className="montserrat-medium-16px">Service Fee</Text>
                <Text className="montserrat-semibold-16px">$5</Text>
              </div>
            </div>

            <Divider style={{ margin: "0" }} />

            {/* Total Price */}
            <div className="flex-space-between">
              <Text className="montserrat-medium-16px">Total</Text>
              <Text className="montserrat-semibold-16px">$265</Text>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid black",
          width: "640px",
          margin: "auto",
          padding: "64px",
        }}
      >
        <CloseOutlined
          onClick={cancelBox}
          style={{ textAlign: "right", display: "block" }}
        />
        <div className="flex-column" style={{ gap: "48px" }}>
          <Text className="trade-gothic-lt-extended-bold-40px">
            Add a new card
          </Text>
          <form className="flex-column" style={{ gap: "24px" }}>
            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "-10px",
                  background: "#FFFFFF",
                  padding: "0 5px",
                }}
              >
                Card Number
              </label>
              <input
                className="input-border"
                type="text"
                placeholder="Card Number"
              />
            </div>

            <div style={{ display: "flex", gap: "24px" }}>
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "-10px",
                    background: "#FFFFFF",
                    padding: "0 5px",
                  }}
                >
                  Exp.Date
                </label>{" "}
                <input
                  className="input-border"
                  style={{ width: "50%" }}
                  type="text"
                  placeholder="Exp.Date"
                />
              </div>
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "-10px",
                    background: "#FFFFFF",
                    padding: "0 5px",
                  }}
                >
                  CVC
                </label>{" "}
                <input
                  className="input-border"
                  style={{ width: "50%" }}
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "-10px",
                  background: "#FFFFFF",
                  padding: "0 5px",
                }}
              >
                Name on Card
              </label>{" "}
              <input
                className="input-border"
                type="text"
                placeholder="Name on Card"
              />
            </div>
            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "-10px",
                  background: "#FFFFFF",
                  padding: "0 5px",
                }}
              >
                Country or Region
              </label>{" "}
              <input
                className="input-border"
                type="select"
                placeholder="Country or Region"
              />
            </div>

            <div className="flex-align-center">
              {" "}
              <input type="checkbox" />
              <Text className="montserrat-medium">
                Securely save my information for 1-click checkout
              </Text>
            </div>
          </form>
          <Button
            className="big-button-background-filled"
            style={{ width: "100%" }}
          >
            <Text className="montserrat-semibold">Add Card</Text>
          </Button>
          <Paragraph
            className="montserrat-regular-12px"
            style={{ opacity: "0.75", textAlign: "center" }}
          >
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

function LoginContentBox({ handleLogin }) {
  return (
    <>
      <div
        className="flex-column content-border-box"
        style={{
          gap: "24px",
        }}
      >
        <div className="flex-column" style={{ gap: "16px" }}>
          <Text className="trade-gothic-lt-extended-bold-20px">
            Login or Sign up to book
          </Text>
          <Input size="large" placeholder="Phone Number" />
          <Text className="montserrat-regular">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. <Link to="">Privacy Policy</Link>
          </Text>
          <Button
            onClick={handleLogin}
            className="big-button-background-filled"
            style={{ with: "100%" }}
          >
            <Text className="montserrat-medium-16px">Continue</Text>
          </Button>
        </div>
        <Divider className="montserrat-medium-16px" style={{ margin: "0" }}>
          Or
        </Divider>
        <div className="flex-column" style={{ gap: "16px" }}>
          <div className="flex-space-between" style={{ gap: "16px" }}>
            <Button
              className="big-button-for-icons"
              style={{ width: "calc(100%/3)" }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.334 12.0733C24.334 5.40546 18.9614 0 12.334 0C5.70661 0 0.333984 5.40536 0.333984 12.0733C0.333984 18.0994 4.72223 23.0943 10.459 24V15.5633H7.41211V12.0733H10.459V9.41343C10.459 6.38755 12.2505 4.71615 14.9915 4.71615C16.3045 4.71615 17.6777 4.95195 17.6777 4.95195V7.92313H16.1646C14.6738 7.92313 14.209 8.85381 14.209 9.80864V12.0733H17.5371L17.0051 15.5633H14.209V24C19.9457 23.0943 24.334 18.0995 24.334 12.0733Z"
                  fill="#1877F2"
                />
              </svg>
            </Button>
            <Button
              className="big-button-for-icons"
              style={{ width: "calc(100%/3)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
            </Button>
            <Button
              className="big-button-for-icons"
              style={{ width: "calc(100%/3)" }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1852 12.5555C18.1758 10.957 18.9 9.75234 20.3625 8.86406C19.5445 7.69219 18.307 7.04766 16.6758 6.92344C15.1313 6.80156 13.4414 7.82344 12.8227 7.82344C12.1687 7.82344 10.6734 6.96563 9.49688 6.96563C7.06875 7.00313 4.48828 8.90156 4.48828 12.7641C4.48828 13.9055 4.69687 15.0844 5.11406 16.2984C5.67187 17.8969 7.68281 21.8133 9.78047 21.75C10.8773 21.7242 11.6531 20.9719 13.0805 20.9719C14.4656 20.9719 15.1828 21.75 16.4062 21.75C18.5227 21.7195 20.3414 18.1594 20.8711 16.5563C18.0328 15.218 18.1852 12.6375 18.1852 12.5555ZM15.7219 5.40703C16.9102 3.99609 16.8023 2.71172 16.7672 2.25C15.7172 2.31094 14.5031 2.96484 13.8117 3.76875C13.05 4.63125 12.6023 5.69766 12.6984 6.9C13.8328 6.98672 14.8687 6.40313 15.7219 5.40703Z"
                  fill="black"
                />
              </svg>
            </Button>
          </div>
          <Button
            className="big-button-green-border flex-align-center"
            style={{ justifyContent: "center" }}
          >
            <MailFilled style={{ fontSize: "24px" }} />
            <Text className="montserrat-medium-16px">Continue with email</Text>
          </Button>
        </div>
      </div>
    </>
  );
}

function VisaCardContentBox({ handleLogOut }) {
  return (
    <>
      <div
        className="flex-column content-border-box"
        style={{
          gap: "16px",
        }}
      >
        <div className="content-green-background-box flex-space-between-align-center">
          <label
            className="flex-align-center"
            htmlFor="visa-1"
            style={{ gap: "32px" }}
          >
            <img alt="visa" src={visaImage} />
            <div>
              <Text className="trade-gothic-lt-extended-bold-16px">
                **** 4321
              </Text>
              &nbsp;
              <Text className="montserrat-regular">02/27</Text>
            </div>
          </label>
          <input
            type="radio"
            name="visaSelect"
            value="visaNumber"
            id="visa-1"
            style={{ minHeight: "24px", minWidth: "24px" }}
          />
        </div>
        <div className="add-card-border">
          <PlusCircleOutlined style={{ fontSize: "48px", color: "#8DD3BB" }} />
          <Text className="montserrat-medium-12px">Add new Card</Text>
          <Button onClick={handleLogOut}>Log Out</Button>
        </div>
      </div>
    </>
  );
}

export default BookingDetail;
