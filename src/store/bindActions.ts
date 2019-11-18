import { INameToValueMap } from "../common/types";

const bindActions = (actions: any, dispatch: any): INameToValueMap => {
  const bindAction = (action: any, dispatch: any) => {
    return function() {
      return dispatch(action.apply(null, arguments));
    };
  };
  if (typeof actions === "function")
    // we return an object with the action with its name as key
    return { [actions.name]: bindAction(actions, dispatch) };

  if (typeof actions !== "object" || actions === null) {
    throw new Error(
      `bindActions expected an object or a function, instead received ${
        actions === null ? "null" : typeof actions
      } `
    );
  }
  const boundActions: INameToValueMap = {};
  for (const key in actions) {
    const action: any = actions[key];
    if (typeof action === "function") {
      boundActions[key] = bindAction(action, dispatch);
    }
  }
  return boundActions;
};

export default bindActions;
