import { FC } from "react";
import { Contribute } from "./components/Contribute";
import Features from "./components/Features";
import Introduce from "./components/Introduce";

export const HomePage: FC = () => {
  return (
    <>
      <Introduce />
      {/* <Features /> */}
      <Contribute />
    </>
  );
};
