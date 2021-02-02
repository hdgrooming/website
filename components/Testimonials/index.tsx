import styled from "@emotion/styled";
import { useState } from "react";
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
    text:
      "So beyond happy with our experience! Our Jack Russell is a bit anxious with new people/situations and he did amazingly for his nail trim; they even commended his behavior! I wish we had caught the groomer’s name, but he was phenomenal with our crazy little Dusty who took to him without a second thought! Not to mention, we didn’t realize we needed an appointment and they still HAPPILY worked us in! Thank you guys..we will be returning!",
    name: "April",
    key: 0,
  },
  {
    text: "cool",
    name: "May",
    key: 1,
  },
];

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const transitions = useTransition(testimonialIndex, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  console.log(TESTIMONIALS);

  return (
    <Section>
      <Header>Testimonials</Header>
      <div style={{ height: "500px" }}>
        {transitions.map(({ item = 0, props, key }) => {
          const testimonial = TESTIMONIALS[item];
          return (
            <animated.div key={key} style={props}>
              {testimonial.text}
            </animated.div>
          );
        })}
      </div>
      <button onClick={() => setTestimonialIndex((i) => (i ? 0 : 1))}>
        click
      </button>
    </Section>
  );
};
