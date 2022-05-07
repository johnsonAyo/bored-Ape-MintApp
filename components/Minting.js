import React from "react";
import tw from "tailwind-styled-components";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const Minting = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  console.log(address);
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
          {address ? (
            <>
              <FilledButton onClick={connectWithMetamask}> Mint </FilledButton>
              <FilledButton onClick={disconnectWallet}>
                Disconnect
              </FilledButton>
            </>
          ) : (
            <FilledButton onClick={connectWithMetamask}>
              Connect Wallet
            </FilledButton>
          )}
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
gap-4


`;

const FilledButton = tw.button`

flex-1
grow
bg-[#bfc500] text-black hover:bg-white font-bold py-2 px-4 rounded uppercase`;
