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
} from "antd";

import "./app.css";
import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
} from "@ant-design/icons";

import HotelDetail from "./pages/HotelDetail";

const { Text } = Typography;

const App = () => {
  return (
    <div className="content">
      <HotelDetail />
    </div>
  );
};

export default App;
