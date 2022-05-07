import React from "react";
import tw from "tailwind-styled-components";

const Minting = () => {
  return (
    <Container>
      <Mint>
        <TitleContainer>
          <Title>
            Welcome to
            <br /> the Bored Ape <br />
            Yatch Club
          </Title>
        </TitleContainer>
      </Mint>
    </Container>
  );
};

export default Minting;

const Container = tw.div`
max-w-screen-lg
w-full`;

const TitleContainer = tw.div``;

const Title = tw.h2`uppercase
text-3xl`;

const Mint = tw.div`
 max-w-screen-sm
 bg-black
`;
