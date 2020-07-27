import React from "react";

import { WidgetProps } from "@rjsf/core";
import DescriptionField from "../DescriptionField";
import Form from "react-bootstrap/Form";

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    schema,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onBlur(id, checked);
  const _onFocus = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, checked);

  const desc = label || schema.description;
  return (
    <div className={`checkbox ${disabled || readonly ? "disabled" : ""}`}>
      {(desc) && (
        <DescriptionField description={desc} />
      )}
      <label>
        <Form.Control
          id={id}
          checked={typeof value === "undefined" ? false : value}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          autoFocus={autofocus}
          onChange={_onChange}
          type="checkbox"
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      </label>
    </div>
  );
};

export default CheckboxWidget;
