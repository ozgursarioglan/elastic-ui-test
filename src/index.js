import React from "react";
import { render } from "react-dom";
import "@elastic/eui/dist/eui_theme_light.css";

import { PageExample } from "./page_example";
import { HeaderExample } from "./header_example";

const App = () => (
  <div id="appName">
    <HeaderExample />
    <PageExample />
  </div>
);

render(<App />, document.getElementById("root"));
