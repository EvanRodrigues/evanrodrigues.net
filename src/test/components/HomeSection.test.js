import React from "react";
import { render } from "@testing-library/react";
import { HomeSection } from "../../components/HomeSection";

test("<HomeSection /> renders without crashing", () => {
    const root = document.createElement("div");
    render(<HomeSection />, root);
});

test("Generates a header if props.title is passed", () => {
    const root = document.createElement("div");
    const { getByTestId } = render(<HomeSection title="Foo" />, root);

    const infoContainer = getByTestId("info-container");
    const header = infoContainer.querySelector(".header-container");
    expect(header).not.toBeNull();
});

test("Does not generate a header if props.title is not passed", () => {
    const root = document.createElement("div");
    const { getByTestId } = render(<HomeSection />, root);

    const infoContainer = getByTestId("info-container");
    const header = infoContainer.querySelector(".header-container");
    expect(header).toBeNull();
});
