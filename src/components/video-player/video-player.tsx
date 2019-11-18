import React from "react";

import { useModal } from "../../hooks/";

import VideoUrl from "../video-url/video-url";
import CustomButton from "../custom-button/custom-button";

import { VideoPlayerContainer } from "./video-player.styles";

const VideoPlayer: React.FC = () => {
  const { openModal } = useModal();

  return (
    <VideoPlayerContainer>
      <VideoUrl />
      <CustomButton
        text={"Open modal for video"}
        onClick={() => {
          openModal("VIDEO");
        }}
      />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
