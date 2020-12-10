import React from "react";
import Login from './Login';
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

describe("Add Login tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Router><Login/></Router>);
      expect(container).toMatchSnapshot();
    });
});