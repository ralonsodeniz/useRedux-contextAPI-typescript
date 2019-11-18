export enum COUNTER {
  UP = "COUNTER_UP",
  DOWN = "COUNTER_DOWN",
  RESET = "COUNTER_RESET"
}

export interface ICounter {
  counter: number;
}
