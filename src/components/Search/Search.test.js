import React from "react";
import Search from './Search';
import { render } from "@testing-library/react";

describe("Add Search tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Search/>);
      expect(container).toMatchSnapshot();
    });
});