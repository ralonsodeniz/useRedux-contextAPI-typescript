import { IState } from "../common/types";

export const asyncer = (dispatch: any, state: IState) => (action: any) => {
  typeof action === "function" ? action(dispatch, state) : dispatch(action);
};

export const logger = (
  prevState: object,
  currentState: object,
  action: object
): void => {
  console.groupCollapsed("Logger");
  console.log("%c Action:", "color:blue", action);
  console.log("%c Previous State:", "color:red", prevState);
  console.log("%c Current State", "color:green", currentState);
  console.groupEnd();
};
