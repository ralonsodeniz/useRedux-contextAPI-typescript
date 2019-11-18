import React from "react";

import { useCounter, useModal } from "../../hooks";
import { IButtonProps } from "../../common/types";

import CustomButton from "../custom-button/custom-button";

import {
  CounterContainer,
  CounterButtonsContainer,
  CounterTextContainer
} from "./counter.styles";

const Counter: React.FC = () => {
  // we get the state props and actions needed from the provider using the custom hook useAppContext
  const { counter, countUp, countDown, countReset } = useCounter();
  const { openModal } = useModal();
  // we create the objects that we are going to pass as props to the components inside the modal
  const countUpModalProps: IButtonProps = {
    text: "Count up",
    onClick: countUp,
    large: true
  };
  const countDownModalProps: IButtonProps = {
    text: "Count down",
    onClick: countDown,
    large: true
  };
  const countResetModalProps: IButtonProps = {
    text: "Reset count",
    onClick: countReset,
    large: true
  };

  return (
    <CounterContainer>
      <CounterTextContainer>Counter</CounterTextContainer>
      <CounterTextContainer>{counter}</CounterTextContainer>
      <CounterButtonsContainer>
        <CustomButton
          text={"Count up"}
          large={false}
          onClick={() => openModal("BUTTON", countUpModalProps)}
        />
        <CustomButton
          text={"Count down"}
          large={false}
          onClick={() => openModal("BUTTON", countDownModalProps)}
        />
        <CustomButton
          text={"Reset count"}
          large={false}
          onClick={() => openModal("BUTTON", countResetModalProps)}
        />
      </CounterButtonsContainer>
    </CounterContainer>
  );
};

export default Counter;
