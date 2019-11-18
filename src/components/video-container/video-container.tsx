import React from "react";

import { useVideo } from "../../hooks/";

import { VideoFrame } from "./video-container.styles";

const VideoContainer: React.FC = () => {
  const { videoUrl } = useVideo();
  return (
    <VideoFrame
      src={videoUrl}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      title="Video"
    />
  );
};

export default VideoContainer;
