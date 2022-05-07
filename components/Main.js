import React from "react";
import tw from "tailwind-styled-components";
import Minting from "./Minting";

const Main = () => {
  return (
    <Container>
      <VideoContainer>
        <Video src="./video.mp4" muted={true} autoplay={true} looping={true} />
      </VideoContainer>
      <Minting />
    </Container>
  );
};

export default Main;

const Container = tw.div`
flex
flex-col
items-center`;

const VideoContainer = tw.div`
max-w-screen-lg
`;

const Video = tw.video`

`;
