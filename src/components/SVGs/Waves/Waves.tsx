import styles from './waves.module.css'

export default function Waves() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1922 981"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice "
      className={styles.svg}
    >
      <defs>
        <filter
          id="filter0_d_356_7"
          x="0"
          y="0"
          width="1922"
          height="980.786"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_356_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_356_7"
            result="shape"
          />
        </filter>

        <linearGradient
          id="paint0_linear_356_7"
          x1="2105"
          y1="282.285"
          x2="-123.5"
          y2="278.785"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.241848" stopColor="#1E2D4D">
            <animate
              attributeName="offset"
              values="0.24;0.30;0.24"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="0.54031" stopColor="#5778C5">
            <animate
              attributeName="offset"
              values="0.54;0.48;0.54"
              dur="8s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stop-opacity"
              values="1;0.85;1"
              dur="8s"
              begin="1s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="0.831533" stopColor="#2A3A5F">
            <animate
              attributeName="offset"
              values="0.83;0.77;0.83"
              dur="8s"
              begin="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <g
        opacity="0.7"
        filter="url(#filter0_d_356_7)"
        className={styles.wavesGroup}
      >
        <path
          d="M1696 13.7858C1724 -21.7138 1921 41.7858 1921 41.7858V980.786H1V198.786C1 198.786 62.9893 187.863 104.5 205.286C146.011 222.709 175.933 255.061 200.5 292.786C225.067 330.511 179.09 389.137 227.5 449.786C275.911 510.434 376.785 484.444 410 545.286C443.215 606.128 402.5 693.286 418 732.786C433.5 772.286 602.342 671.232 647 698.286C691.658 725.34 700.519 787.865 738.5 785.786C776.481 783.706 779.615 737.878 816 726.786C852.385 715.694 921.622 730.886 954 759.786C986.354 788.664 1003.47 859.182 1003.5 859.286C1003.49 859.17 995.216 775.702 1020.5 732.786C1045.8 689.84 1171.15 730.634 1224 670.286C1276.85 609.938 1165.53 460.321 1213 413.286C1260.48 366.25 1312.64 351.127 1358.5 355.786C1404.33 360.442 1472.92 376.767 1473 376.786C1473.09 376.729 1519.06 348.335 1558.5 331.786C1597.98 315.22 1649.51 334.079 1665.5 292.286C1681.49 250.493 1639.13 205.288 1632.5 147.786C1625.87 90.2833 1668 49.2852 1696 13.7858ZM1650.5 351.791C1653.08 338.767 1591.5 361.786 1572.5 361.786C1553.5 361.786 1514.26 380.661 1516 401.407C1517.74 422.153 1626.16 392.121 1634.5 381.791C1642.84 371.461 1647.92 364.815 1650.5 351.791Z"
          fill="url(#paint0_linear_356_7)"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  )
}
