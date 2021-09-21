import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("<App /> renders without crashing", () => {
    const root = document.createElement("div");
    render(<App />, root);
});
