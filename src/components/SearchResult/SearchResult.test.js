import React from "react";
import SearchResult from './SearchResult';
import { render } from "@testing-library/react";

describe("Add SearchResult tests", () => {
    it("renders correctly", () => {
      const { container } = render(<SearchResult/>);
      expect(container).toMatchSnapshot();
    });
});