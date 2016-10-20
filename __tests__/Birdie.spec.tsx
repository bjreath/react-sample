import * as React from "react";
import { shallow } from "enzyme";
import { App } from "../src/components/App";

it("renders some text", () => {
  const birdie = shallow(<App />);
  expect(birdie.text()).toContain("Birdie");
});