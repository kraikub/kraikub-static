import { FC } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface SimpleFadeInProps {
  children: any;
  delay?: number;
}

export const SimpleFadeIn: FC<SimpleFadeInProps> = ({ children, delay }) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOnce
      delay={delay || 1}
      duration={1.5}
    >
      {children}
    </AnimationOnScroll>
  );
};
