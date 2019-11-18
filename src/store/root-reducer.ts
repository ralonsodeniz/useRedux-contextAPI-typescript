import counterReducer from "./counter";
import videoReducer from "./video";
import modalReducer from "./modal";
import { IState, IActions } from "../common/types";
import { logger } from "./middlewares";

export const INITIAL_STATE: IState = {
  counter: counterReducer.INITIAL_STATE,
  video: videoReducer.INITIAL_STATE,
  modal: modalReducer.INITIAL_STATE
};

const rootReducer = (state = INITIAL_STATE, action: IActions): IState => {
  const { counter, video, modal } = state;
  const currentState: IState = {
    counter: counterReducer.reducer(counter, action),
    video: videoReducer.reducer(video, action),
    modal: modalReducer.reducer(modal, action)
  };
  logger(state, currentState, action);
  return currentState;
};

export default rootReducer;
