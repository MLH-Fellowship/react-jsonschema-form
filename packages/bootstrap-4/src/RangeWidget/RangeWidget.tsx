import React from "react";

import Form from "react-bootstrap/Form";

import { utils } from "@rjsf/core";
import { WidgetProps } from "@rjsf/core";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Group controlId={id} className="mb-0">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="range"
        required={required}
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...sliderProps}
      />
      <span className="range-view">{value}</span>
    </Form.Group>
  );
};

export default RangeWidget;
