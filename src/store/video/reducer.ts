import { VIDEO, IVideo } from "./types";
import { IActions } from "../../common/types";

export const INITIAL_STATE: IVideo = {
  videoUrl: ""
};

const reducer = (state = INITIAL_STATE, action: IActions): IVideo => {
  switch (action.type) {
    case VIDEO.UPDATE:
      return {
        ...state,
        videoUrl: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
