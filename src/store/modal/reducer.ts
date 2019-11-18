import { MODAL, IModal } from "./types";
import { IActions } from "../../common/types";

export const INITIAL_STATE: IModal = {
  showModal: false,
  modalType: "",
  modalProps: {}
};

const reducer = (state = INITIAL_STATE, action: IActions): IModal => {
  switch (action.type) {
    case MODAL.OPEN:
      const { modalType, modalProps } = action.payload;
      return {
        ...state,
        showModal: true,
        modalType,
        modalProps
      };
    case MODAL.CLOSE:
      return {
        ...state,
        showModal: false,
        modalType: "",
        modalProps: {}
      };
    default:
      return state;
  }
};

export default reducer;
