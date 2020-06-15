import React from "react";
import { WidgetProps } from "@rjsf/core";

export type TextWidgetProps = WidgetProps;

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  ...textFieldProps
}: TextWidgetProps) => {
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
    <div className="form-group">
      <label className="control-label">
      {label || schema.title}:
      <input
      key={id}
      className="form-control"
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      type={type || (schema.type as string)}
      value={value || value === 0 ? value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...textFieldProps}
      />
      </label>
    </div>
  );
};

export default TextWidget;
