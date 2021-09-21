import React from "react";
import { render } from "@testing-library/react";
import { HomeSection } from "../../components/HomeSection";

test("<HomeSection /> renders without crashing", () => {
    const root = document.createElement("div");
    render(<HomeSection />, root);
});

test("Generates a header if props.title is passed", () => {
    const root = document.createElement("div");
    const rootRender = render(<HomeSection title="Foo" />, root);

    const header = rootRender.container.querySelector(".header-container");
    expect(header).not.toBeNull();
});

test("Does not generate header if props.", () => {
    const root = document.createElement("div");
    const rootRender = render(<HomeSection />, root);

    const header = rootRender.container.querySelector(".header-container");
    expect(header).toBeNull();
});
