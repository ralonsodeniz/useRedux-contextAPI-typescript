export enum MODAL {
  OPEN = "OPEN_MODAL",
  CLOSE = "CLOSE_MODAL"
}

export interface IModal {
  showModal: boolean;
  modalType: string;
  modalProps: object;
}
