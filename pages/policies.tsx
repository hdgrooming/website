import styled from "@emotion/styled";
import { theme } from "../theme";
import { Container, Section } from "../components/Section";

const S = {
  Wrapper: styled.main`
    font-family: ${theme.font.sans};
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    line-height: 1.2;
  `,
  Heading: styled.h1`
    text-align: center;
    font-family: ${theme.font.serif};
    font-size: 32px;
  `,
};

export default function Policies() {
  return (
    <Container>
      <Section>
        <S.Wrapper>
          <S.Heading>Happy Dog Grooming Salon Policies</S.Heading>
          <p>
            Please note that as of October 2023, you must cancel or re-schedule
            48 hours in advance or you will incur a NO-SHOW FEE equal to the
            base price of your appointment. We will charge the credit card on
            file and mark your appointment as a no-show. If you are more than 15
            minutes for your appointment, you will have to re-schedule and will
            have to pay a no-show fee unless otherwise discussed with your
            groomer or bather.
            <br />
            <br />
            When picking up your fur baby, we ask that you pick up no later than
            one hour from your phone call or text establishing pick up (we
            generally do not keep your pet more than 3 hours from appointment
            time). Any longer than an hour will incur a $15 LATE PICK-UP FEE and
            an additional $15 for every fifteen minutes thereafter unless
            otherwise arranged with your groomer or bather. If there are any
            questions or concerns, please feel free to ask!! We thank you so
            much for your business and trusting us with your pets!
          </p>
        </S.Wrapper>
      </Section>
    </Container>
  );
}
