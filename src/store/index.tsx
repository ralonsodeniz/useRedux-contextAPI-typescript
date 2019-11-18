import React, {
  createContext,
  useCallback,
  useReducer,
  useContext
} from "react";
import rootReducer, { INITIAL_STATE } from "./root-reducer";
import { IContext } from "../common/types";
import { asyncer } from "./middlewares";

const StoreContext = createContext({} as IContext);
export const useStoreContext = () => useContext(StoreContext);

const Provider: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const [state, basicDispatch] = useReducer(rootReducer, INITIAL_STATE);
  const dispatch = useCallback(asyncer(basicDispatch, state), []);

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
