import { IActions } from "../../common/types";
import { MODAL } from "./types";

export const openModal = (modalType: string, modalProps: object): IActions => ({
  type: MODAL.OPEN,
  payload: {
    modalType,
    modalProps
  }
});

export const closeModal = (): IActions => ({
  type: MODAL.CLOSE
});
