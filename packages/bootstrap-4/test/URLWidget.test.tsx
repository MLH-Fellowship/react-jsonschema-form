import React from "react";
import URLWidget from "../src/URLWidget";
import renderer from "react-test-renderer";
import { makeWidgetMockProps } from "./helpers/createMocks";

describe("URLWidget", () => {
  test("simple", () => {
    const tree = renderer
      .create(<URLWidget {...makeWidgetMockProps({})} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
