import { useStoreContext } from "../../store";
import bindingActions from "../../store/bindActions";
import modalReducer from "../../store/modal";

const useModal: any = () => {
  const { actions } = modalReducer;
  const { openModal, closeModal } = actions;
  const {
    state: { modal },
    dispatch
  } = useStoreContext();
  const modalActions = bindingActions({ openModal, closeModal }, dispatch);
  return { ...modal, ...modalActions };
};

export default useModal;
