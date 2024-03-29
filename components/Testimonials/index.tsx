import styled from "@emotion/styled";
import { useCallback, useLayoutEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";

const Header = styled(SectionHeader)`
  color: ${theme.color.red};
`;

type Testimonial = {
  name: string;
  text: string;
  key: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "So beyond happy with our experience! Our Jack Russell is a bit anxious with new people/situations and he did amazingly for his nail trim; they even commended his behavior! I wish we had caught the groomer’s name, but he was phenomenal with our crazy little Dusty who took to him without a second thought! Not to mention, we didn’t realize we needed an appointment and they still HAPPILY worked us in! Thank you guys..we will be returning!",
    name: "April",
    key: 0,
  },
  {
    text: "Awesome to have you in our community. Great work; keep it up!",
    name: "Charles",
    key: 1,
  },
];

const TestimonialText = styled(animated.div)`
  text-align: center;
  width: 100%;
  font-family: ${theme.font.sans};
  font-size: 18px;
  line-height: 1.5;
  color: #232323;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  min-height: 200px;

  h5 {
    font-style: italic;
    font-weight: 300;
  }
`;

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const transitions = useTransition(TESTIMONIALS, ({
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1, position: "initial" },
    leave: { opacity: 0, position: "absolute" },
  }));

  const incrementIndex = useCallback(
    () =>
      setTestimonialIndex((index) =>
        !TESTIMONIALS[index + 1] ? 0 : index + 1
      ),
    [TESTIMONIALS]
  );

  useLayoutEffect(() => {
    const interval = setInterval(incrementIndex, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section style={{ paddingBottom: 0 }} id="testimonials">
      <Header>Testimonials</Header>
      <div
        style={{
          position: "relative",
          paddingBottom: "80px",
          borderBottom: `3px solid #595959`,
        }}
      >
        {transitions((style, testimonial) => {
          return (
            <TestimonialText style={style as any}>
              {testimonial.text}
              <h5>- {testimonial.name}</h5>
            </TestimonialText>
          );
        })}
      </div>
    </Section>
  );
};
