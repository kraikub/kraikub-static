import { FC } from "react";

interface StripProps extends SvgProps {}

export const Strip: FC<StripProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9650 825"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 345H6557C6612.23 345 6657 389.772 6657 445V725C6657 780.228 6612.23 825 6557 825H0V345Z"
        fill="#3ABA9B"
      />
      <path
        d="M3860 100C3860 44.7715 3904.77 0 3960 0H9650V470H3960C3904.77 470 3860 425.228 3860 370V100Z"
        fill="#87E5A7"
        fillOpacity="0.5"
      />
      <rect
        x="1642"
        y="169"
        width="800"
        height="352"
        rx="176"
        fill="#5552FF"
        fillOpacity="0.5"
      />
    </svg>
  );
};
