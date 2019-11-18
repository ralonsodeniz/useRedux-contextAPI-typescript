import { IActions } from "../../common/types";
import { COUNTER } from "./types";

export const countUp = (): IActions => ({
  type: COUNTER.UP
});

export const countDown = (): IActions => ({
  type: COUNTER.DOWN
});

export const countReset = (): IActions => ({
  type: COUNTER.RESET
});
