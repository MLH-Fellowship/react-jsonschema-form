import React from "react";

interface DescriptionField {
  description?: string;
  classes?: string;
}

const DescriptionField = ({ description, classes }: DescriptionField) => {
  if (description) {
    return <h2 className={classes}>{description}</h2>;
  }

  return null;
};

export default DescriptionField;
