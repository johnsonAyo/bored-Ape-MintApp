import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import tw from "tailwind-styled-components";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useEditionDrop,
} from "@thirdweb-dev/react";

const Minting = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [completed, setCompleted] = useState();
  const [inProgress, setInProgress] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const editionDrop = useEditionDrop(
    "0xc20d75b1eE20BC3d1529ef36C70D341ca57F05BD"
  );
  console.log(address);

  const mint = async () => {
    if (editionDrop && address) {
      setInProgress(true);
      const tx = await editionDrop.claimTo(address, 0, 1);
      console.log(tx);
      setInProgress(false);
      setCompleted(true);
    }
  };

  const viewOpenSea = () => {
    const url = "https://testnets.opensea.io/collection/bored-ape-testnet";
    window.open(url, "_blank");
  };

  const startOver = () => {
    setCompleted(false);
    setInProgress(false);
    disconnectWallet();
  };

  useEffect(() => {
    const getTotal = async () => {
      if (editionDrop) {
        const total = await editionDrop.totalSupply(0);
        setTotalSupply(total.toNumber());
      }
    };
    getTotal();
  }, [editionDrop]);
  return (
    <Container>
      <Mint>
        <TitleContainer>
          <Title>
            Welcome to
            <br /> the Bored Ape <br />
            Yatch Club
          </Title>
          <Count>{address && totalSupply}</Count>
        </TitleContainer>
        <ButtonContainer>
          {address ? (
            <>
              {completed ? (
                <FilledButton onClick={viewOpenSea}>View Opensea</FilledButton>
              ) : (
                <FilledButton disabled={inProgress} onClick={mint}>
                  {inProgress ? (
                    <ReactLoading type="bubbles" color="black" height="64" />
                  ) : (
                    <> Mint </>
                  )}
                </FilledButton>
              )}

              <UnFilledButton disabled={inProgress} onClick={startOver}>
                Disconnect
              </UnFilledButton>
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
bg-[#bfc500] text-black hover:bg-white font-bold py-2 px-4 rounded uppercase h-14`;

const UnFilledButton = tw(FilledButton)`
bg-black 
text-[#bfc500]
border-2
border-[#bfc500]
hover:bg-[#bfc500]
hover:text-black
`;

const Count = tw.div`
flex
grow
items-center
justify-center
`;
