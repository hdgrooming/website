import styled from "@emotion/styled";

import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

const Container = styled.main`
  width: 100%;
`;
const Index = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
};

export default Index;
