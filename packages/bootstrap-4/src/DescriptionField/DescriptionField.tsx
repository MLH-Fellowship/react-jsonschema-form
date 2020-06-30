import React from "react";
import { FieldProps } from "@rjsf/core";

// export interface DescriptionFieldProps extends Partial<FieldProps> {
//   description?: string;
// }

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return <h5 className="mb-2">{description}</h5>;
  }

  return null;
};

export default DescriptionField;
