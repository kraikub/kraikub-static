import { FC } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface SimpleFadeInProps {
  children: any;
  delay?: number;
  duration?: number;
}

export const SimpleFadeIn: FC<SimpleFadeInProps> = ({ children, delay, duration }) => {
  return (
    <AnimationOnScroll
      animateIn="kraikub__fade_in"
      animateOnce
      delay={delay ? delay*1000 : 0}
      duration={duration || 0.4}
    >
      {children}
    </AnimationOnScroll>
  );
};
