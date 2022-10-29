import { FC } from "react";

export const GradientLine: FC<SvgProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height || 5}
      viewBox="0 0 993 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="993" height="5" rx="2.5" fill="url(#paint0_linear_89_313)" />
      <defs>
        <linearGradient
          id="paint0_linear_89_313"
          x1="16.3681"
          y1="2.50026"
          x2="993"
          y2="2.49908"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11CF00" />
          <stop offset="1" stopColor="#0092B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
