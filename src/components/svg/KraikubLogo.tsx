import { FC } from "react";
import styles from "../../../styles/css/KraikubLogo.module.css";

interface KraikubLogoProps {
  width?: string;
  height?: string;
}

export const KraikubLogo: FC<KraikubLogoProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2644 3168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1746.34"
        width="897.665"
        height="3167.2"
        rx="200"
        fill="#008950"
        className={styles.rightelement}
      />
      <mask
        id="mask0_270_119"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="898"
        height="3168"
      >
        <rect width="897.665" height="3167.2" rx="200" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_270_119)">
        <rect
          width="897.665"
          height="3167.2"
          rx="200"
          fill="#87E6A7"
          className={styles.leftelement}
        />
      </g>
      <path
        d="M485.17 1592.41L1475.72 18.6922C1481.47 9.55308 1484.35 4.9835 1488.86 2.49175C1493.37 0 1498.77 0 1509.57 0H2423.8C2456.11 0 2472.27 0 2477.96 10.4107C2483.65 20.8213 2474.92 34.4172 2457.46 61.609L1473.63 1594.15C1468.15 1602.69 1465.41 1606.96 1461.19 1609.39C1456.97 1611.82 1451.9 1612.05 1441.76 1612.5L520.809 1653.68C487.296 1655.18 470.539 1655.93 464.452 1645.46C458.365 1635 467.3 1620.8 485.17 1592.41Z"
        fill="#60D78F"
        className={styles.opacityanimation}
      />
      <path
        d="M2476.68 3136.23L1463.32 1592.63C1459.62 1586.99 1453.33 1583.6 1446.6 1583.6L484.422 1583.6C468.633 1583.6 459.07 1601.04 467.557 1614.35L1451.5 3157.95C1455.17 3163.71 1461.53 3167.2 1468.36 3167.2L2459.96 3167.2C2475.87 3167.2 2485.41 3149.53 2476.68 3136.23Z"
        fill="#3AB96D"
        className={styles.opacityanimation}
      />
    </svg>
  );
};
