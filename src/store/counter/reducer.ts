import { COUNTER, ICounter } from "./types";
import { IActions } from "../../common/types";

export const INITIAL_STATE: ICounter = {
  counter: 0
};

const reducer = (state = INITIAL_STATE, action: IActions): ICounter => {
  switch (action.type) {
    case COUNTER.UP:
      return {
        ...state,
        counter: ++state.counter
      };
    case COUNTER.DOWN:
      return {
        ...state,
        counter: --state.counter
      };
    case COUNTER.RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default reducer;
