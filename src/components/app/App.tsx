import React from "react";

import Counter from "../counter/counter";
import VideoPlayer from "../video-player/video-player";
import ModalContainer from "../modal-container/modal-container";

import { AppContainer, AppTitleText } from "./App.styles";
import { GlobalStyles } from "../../global.styles";

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <AppTitleText>This is a test app</AppTitleText>
      <Counter />
      <VideoPlayer />
      <ModalContainer />
    </AppContainer>
  );
};

export default App;
