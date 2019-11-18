import React, { useState } from "react";

import { useVideo } from "../../hooks";

import CustomButton from "../custom-button/custom-button";

import { SubmitVideoContainer } from "./video-url.styles";

const VideoUrl: React.FC = () => {
  const [url, setUrl] = useState("");
  const { updateVideoUrl } = useVideo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(event.target.value);
  const submitUrl = () => {
    updateVideoUrl(url);
    setUrl("");
  };
  return (
    <SubmitVideoContainer>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Insert video url here"
      />
      <CustomButton text="Submit video url" onClick={submitUrl} />
    </SubmitVideoContainer>
  );
};

export default VideoUrl;
