import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import logo from "./../assets/logo.webp";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Image src={logo} alt="logo" width={300} height={78} />
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = tw.div`
flex
justify-center
`;

const HeaderContainer = tw.div``;
