'use client'

import styles from './starsBg.module.css'

export default function Stars() {
  return (
    <svg
      width="1920"
      height="300"
      viewBox="0 0 1920 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      style={{ background: 'transparent' }}
      preserveAspectRatio="xMidYMax slice "
    >
      <g className={`${styles.star} ${styles.xl} `}>
        <line
          x1="267"
          y1="195"
          x2="267"
          y2="0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M267 194L273 211H289L277 220L283 237L267 228L251 237L257 220L245 211H261L267 194Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.xl}`}>
        <line
          x1="924"
          y1="145"
          x2="924"
          y2="0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M924 144L930 161H946L934 170L940 187L924 178L908 187L914 170L902 161H918L924 144Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.xl}`}>
        <line
          x1="1564"
          y1="220"
          x2="1564"
          y2="0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1564 219L1570 236H1586L1574 245L1580 262L1564 253L1548 262L1554 245L1542 236H1558L1564 219Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.xl}`}>
        <line
          x1="1138"
          y1="88"
          x2="1138"
          y2="0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1138 87L1144 104H1160L1148 113L1154 130L1138 121L1122 130L1128 113L1116 104H1132L1138 87Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      {/* Large Stars - varied heights */}
      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M498 175L498 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M498 174L504 188H517L507 195L513 209L498 200L483 209L489 195L479 188H492L498 174Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M1209 65L1209 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1209 64L1215 78H1228L1218 85L1224 99L1209 90L1194 99L1200 85L1190 78H1203L1209 64Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M1813 210L1813 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1813 209L1819 223H1832L1822 230L1828 244L1813 235L1798 244L1804 230L1794 223H1807L1813 209Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M747 130L747 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M747 129L753 143H766L756 150L762 164L747 155L732 164L738 150L728 143H741L747 129Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M1387 235L1387 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1387 234L1393 248H1406L1396 255L1402 269L1387 260L1372 269L1378 255L1368 248H1381L1387 234Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      {/* Medium Stars - varied heights */}
      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M107 52L107 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M107 51L112 63H125L116 70L121 82L107 74L93 82L98 70L89 63H102L107 51Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M640 185L640 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M640 184L645 196H658L649 203L654 215L640 207L626 215L631 203L622 196H635L640 184Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M1351 108L1351 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M1351 107L1356 119H1369L1360 126L1365 138L1351 130L1337 138L1342 126L1333 119H1346L1351 107Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M1689 230L1689 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M1689 229L1694 241H1707L1698 248L1703 260L1689 252L1675 260L1680 248L1671 241H1684L1689 229Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M960 160L960 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M960 159L965 171H978L969 178L974 190L960 182L946 190L951 178L942 171H955L960 159Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      {/* Small Stars - varied heights */}
      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M356 200L356 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M356 199L360 209H371L363 215L367 225L356 219L345 225L349 215L341 209H352L356 199Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M853 75L853 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M853 74L857 84H868L860 90L864 100L853 94L842 100L846 90L838 84H849L853 74Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M1049 215L1049 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1049 214L1053 224H1064L1056 230L1060 240L1049 234L1038 240L1042 230L1034 224H1045L1049 214Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M1458 95L1458 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1458 94L1462 104H1473L1465 110L1469 120L1458 114L1447 120L1451 110L1443 104H1454L1458 94Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M1867 168L1867 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1867 167L1871 177H1882L1874 183L1878 193L1867 187L1856 193L1860 183L1852 177H1863L1867 167Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M160 42L160 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M160 41L164 51H175L167 57L171 67L160 61L149 67L153 57L145 51H156L160 41Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      {/* Additional stars - varied heights */}
      <g className={`${styles.star} ${styles.md}`}>
        <path
          d="M420 225L420 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M420 224L425 236H438L429 243L434 255L420 247L406 255L411 243L402 236H415L420 224Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.lg}`}>
        <path
          d="M1620 180L1620 0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1620 179L1626 193H1639L1629 200L1635 214L1620 205L1605 214L1611 200L1601 193H1614L1620 179Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.sm}`}>
        <path
          d="M580 120L580 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M580 119L584 129H595L587 135L591 145L580 139L569 145L573 135L565 129H576L580 119Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>

      <g className={`${styles.star} ${styles.xl}`}>
        <line
          x1="1750"
          y1="205"
          x2="1750"
          y2="0"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M1750 204L1756 221H1772L1760 230L1766 247L1750 238L1734 247L1740 230L1728 221H1744L1750 204Z"
          fill="currentColor"
          className={styles.starFill}
        />
      </g>
    </svg>
  )
}
