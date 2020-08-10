import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { googleTrackId } from "./service/constants";
import "./index.css";

import ReactGA from "react-ga";

const initializeReactGA = () => {
  ReactGA.initialize(googleTrackId);
  ReactGA.pageview("/", "myResume-tracker", "my resume");
};

initializeReactGA();

ReactDOM.render(<App />, document.getElementById("root"));
