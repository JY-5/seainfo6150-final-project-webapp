import React from "react";
import App from './App';
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

describe("Add App tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Router><App/></Router>);
      expect(container).toMatchSnapshot();
    });
});