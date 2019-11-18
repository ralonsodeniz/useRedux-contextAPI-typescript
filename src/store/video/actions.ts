import { VIDEO } from "./types";
import { IActions } from "../../common/types";

export const updateVideoUrl = (url: string): IActions => ({
  type: VIDEO.UPDATE,
  payload: url
});
