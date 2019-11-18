import counterReducer from "../../store/counter";
import { useStoreContext } from "../../store";
import bindActions from "../../store/bindActions";

const useCounter: any = () => {
  const { actions } = counterReducer;
  const { countUp, countDown, countReset } = actions;
  const {
    state: { counter },
    dispatch
  } = useStoreContext();
  const counterActions = bindActions(
    { countUp, countDown, countReset },
    dispatch
  );
  return { ...counter, ...counterActions };
};

export default useCounter;
