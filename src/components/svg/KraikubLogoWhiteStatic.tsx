import { FC } from "react";

interface KraikubLogoProps {
  width?: string;
  height?: string;
  opacity?: number;
}

export const KraikubLogoWhiteStatic: FC<KraikubLogoProps> = ({
  width,
  height,
  opacity,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2644 3168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={opacity || 1}
    >
      <rect
        x="1746.33"
        width="897.665"
        height="3167.2"
        rx="200"
        fill="#ACACAC"
      />
      <mask
        id="mask0_7_21"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="898"
        height="3168"
      >
        <rect width="897.665" height="3167.2" rx="200" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7_21)">
        <rect width="897.665" height="3167.2" rx="200" fill="white" />
      </g>
      <path
        d="M485.172 1592.41L1475.72 18.6922C1481.47 9.55308 1484.35 4.9835 1488.86 2.49175C1493.38 0 1498.78 0 1509.57 0H2423.8C2456.12 0 2472.27 0 2477.96 10.4107C2483.65 20.8213 2474.92 34.4172 2457.46 61.609L1473.63 1594.15C1468.15 1602.69 1465.41 1606.96 1461.19 1609.39C1456.97 1611.82 1451.9 1612.05 1441.76 1612.5L520.811 1653.68C487.298 1655.18 470.541 1655.93 464.454 1645.46C458.367 1635 467.302 1620.8 485.172 1592.41Z"
        fill="#F5F5F5"
      />
      <path
        d="M2476.68 3136.22L1463.32 1592.62C1459.62 1586.99 1453.34 1583.6 1446.6 1583.6L484.425 1583.6C468.636 1583.6 459.073 1601.04 467.56 1614.35L1451.5 3157.95C1455.17 3163.71 1461.53 3167.2 1468.36 3167.2L2459.96 3167.2C2475.87 3167.2 2485.41 3149.52 2476.68 3136.22Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};
