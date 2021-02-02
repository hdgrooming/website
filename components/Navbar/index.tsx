import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "../../theme";

const Container = styled.nav`
  box-sizing: border-box;
  height: 300px;
  padding: 30px 70px;
  text-align: center;
`;

const LinksContainer = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans};
  font-size: 24px;
  font-weight: 400;

  ${theme.media.tablet("font-size: 18px;")}
  ${theme.media.phone("font-size: 16px;")}
`;

const NavLink = styled.a`
  flex: 0 auto;
  width: 150px;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  padding: 8px;

  &:hover {
    color: ${theme.color.red};
  }
`;

/* Display none on smaller sizes*/
const Line = styled.div`
  flex: auto;
  height: 1px;
  background: ${theme.color.red};

  ${theme.media.phone(`display: none;`)}
`;

export const Navbar = () => {
  return (
    <Container>
      <Image src="/images/logo1.png" width={222} height={171} />
      <LinksContainer>
        <Line />
        <NavLink>Home</NavLink>
        <NavLink>Team</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Happy Dogs</NavLink>
        <NavLink>Contact Us</NavLink>
        <Line />
      </LinksContainer>
    </Container>
  );
};
