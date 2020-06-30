import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";

import { ThemeProps } from "@rjsf/core";
import { utils } from "@rjsf/core";
const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

const DefaultChildren = () => (
  <Container fluid>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Container>
);

const Theme: ThemeProps = {
  children: <DefaultChildren />,
  ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  FieldTemplate,
  ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets },
  ErrorList,
};

export default Theme;
