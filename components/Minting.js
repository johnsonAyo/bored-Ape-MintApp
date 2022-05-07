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
        <ButtonContainer>
          <FilledButton> Connect Wallet</FilledButton>
        </ButtonContainer>
      </Mint>
    </Container>
  );
};

export default Minting;

const Container = tw.div`
max-w-screen-lg
w-full
z-50`;

const TitleContainer = tw.div`
flex`;

const Title = tw.h2`
uppercase
text-3xl
italic
font-bold
mt-3`;

const Mint = tw.div`
 max-w-screen-sm
 bg-black 
 mt-[-200px]
w-1/3
z-50
flex
flex-col
pb-4
pr-4


`;

const ButtonContainer = tw.div`
flex
mt-2



`;

const FilledButton = tw.button`
grow
bg-[#bfc500] text-black hover:bg-white font-bold py-2 px-4 rounded uppercase`;
