import React from "react";
import Footer from './Footer';
import { render } from "@testing-library/react";

describe("Add Footer tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Footer/>);
      expect(container).toMatchSnapshot();
    });
});