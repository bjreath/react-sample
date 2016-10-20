import * as React from "react";
import { shallow } from "enzyme";
import { Birdie } from "../src/Birdie";

it("renders some text", () => {
  const birdie = shallow(<Birdie />);
  expect(birdie.text()).toContain("Birdie");
});