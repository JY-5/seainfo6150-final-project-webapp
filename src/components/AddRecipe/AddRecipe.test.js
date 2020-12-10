import React from "react";
import AddRecipe from './AddRecipe';
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe("Add recipe tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Router><AddRecipe username="JY"/></Router>);
      expect(container).toMatchSnapshot();
    });
});