import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as EssentialsProvider } from "react-essentials";
import "react-essentials/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/form-datepicker-original.scss";
import "./styles/form-datepicker.scss";
import "./index.css";
import App from "./App";

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <EssentialsProvider
      rootTag={root}
      ssrViewport="lg"
      breakpoints={breakpoints}
    >
      <App />
    </EssentialsProvider>
  </BrowserRouter>,
  root
);
