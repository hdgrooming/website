import styled from "@emotion/styled";

import { theme } from "../../theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
`;

const Title = styled.h5`
  font-family: ${theme.font.sans};
  color: ${theme.color.white};
  font-size: 31px;
  margin: 0;
`;

const Input = styled.input`
  padding: 16px;
  font-family: ${theme.font.sans};
  border-radius: 4px;

  ${theme.media.phone("width: 90%")}
`;
const TextArea = styled.textarea`
  padding: 16px;
  font-family: ${theme.font.sans};
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: transparent;
  border: 4px solid ${theme.color.white};
  cursor: pointer;
  color: white;
  font-size: 21px;
  padding: 17px 66px;
  transition: background 0.1s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }

  ${theme.media.phone("width: 100%;")}
`;

export const QuestionForm = () => {
  return (
    <Container>
      <Title>Questions?</Title>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <TextArea placeholder="Message" rows={10} />
      <ButtonContainer>
        <Button>Submit</Button>
      </ButtonContainer>
    </Container>
  );
};
