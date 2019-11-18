import { useStoreContext } from "../../store";
import bindingActions from "../../store/bindActions";
import videoReducer from "../../store/video";

const useVideo: any = () => {
  const {
    state: { video },
    dispatch
  } = useStoreContext();
  const { actions } = videoReducer;
  const { updateVideoUrl } = actions;
  const videoActions = bindingActions(updateVideoUrl, dispatch);
  return { ...video, ...videoActions };
};

export default useVideo;
