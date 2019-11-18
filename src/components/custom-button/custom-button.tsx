import React from "react";

import { IButtonProps } from "../../common/types";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton: React.FC<IButtonProps> = props => (
  <CustomButtonContainer {...props}>
    <span>{props.text}</span>
  </CustomButtonContainer>
);

CustomButton.defaultProps = {
  large: false,
  text: "this is a button",
  onClick: () => console.log("Hello World!")
};

export default CustomButton;
