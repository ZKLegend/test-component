import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";

// import "./fonts/Montserrat/Montserrat-Bold.ttf";
// import "./fonts/Montserrat/Montserrat-Medium.ttf";
// import "./fonts/Montserrat/Montserrat-Regular.ttf";
// import "./fonts/Montserrat/Montserrat-SemiBold.ttf";
// import "./fonts/TradeGothic/Trade-Gothic-LT-Extended.ttf";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
