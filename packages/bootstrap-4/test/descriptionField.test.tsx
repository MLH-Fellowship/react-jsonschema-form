import React from "react";
import DescriptionField from "../src/DescriptionField";
import { JSONSchema7 } from "json-schema";
import renderer from "react-test-renderer";

describe("description field ", () => {
  test("with description", () => {
    const tree = renderer.create(<DescriptionField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
