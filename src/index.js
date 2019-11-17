import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import Main from "./components/Main";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactGA.initialize("UA-141944798-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Main />, document.getElementById("root"));
