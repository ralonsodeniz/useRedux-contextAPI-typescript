import { IModal } from "../store/modal/types";
import { ICounter } from "../store/counter/types";
import { IVideo } from "../store/video/types";

export interface IActions {
  type: string;
  payload?: any;
}

export interface IState {
  counter: ICounter;
  video: IVideo;
  modal: IModal;
}

export interface IContext {
  state: IState;
  dispatch: any;
}

export interface INameToValueMap {
  [key: string]: any;
}

export interface IButtonProps {
  text?: string;
  large?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}
