import styled from "@emotion/styled";
import { theme } from "../../theme";

const Container = styled.footer`
  padding: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  font-family: ${theme.font.sans};
`;
export const Footer = () => {
  return (
    <Container>
      <p>Copyright © 2021 Happy Dog Grooming Salon, All Rights Reserved.</p>
    </Container>
  );
};
