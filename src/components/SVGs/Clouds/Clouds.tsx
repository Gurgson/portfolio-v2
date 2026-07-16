import styles from './clouds.module.css'

export default function Clouds() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="20%"
      viewBox="0 0 1080 140"
      preserveAspectRatio="xMidYMid slice"
      className={styles.svg}
    >
      <g className={`${styles.cloud} ${styles.c1}`}>
        <g className={styles.shape}>
          <path
            d="
              M20 55
              C20 35, 50 25, 80 40
              C95 20, 140 25, 150 55
              C165 60, 165 80, 135 85
              C110 95, 60 95, 40 80
              C15 75, 10 65, 20 55
            "
          />
        </g>
      </g>

      {/* Cloud 2 */}
      <g className={`${styles.cloud} ${styles.c2}`}>
        <g className={styles.shape}>
          <path
            d="
              M70 85
              C70 65, 110 60, 130 75
              C160 70, 175 90, 165 105
              C155 120, 120 125, 95 115
              C70 110, 60 100, 70 85
            "
          />
        </g>
      </g>

      <g className={`${styles.cloud} ${styles.c3}`}>
        <g className={styles.shape}>
          <path
            d="
              M10 110
              C10 95, 55 90, 90 105
              C120 90, 165 95, 175 115
              C165 135, 110 140, 75 130
              C35 130, 10 125, 10 110
            "
          />
        </g>
      </g>

      <g className={`${styles.cloud} ${styles.c4}`}>
        <g className={styles.shape}>
          <path
            d="
              M260 65
              C260 45, 300 40, 330 55
              C355 40, 395 45, 400 65
              C405 85, 375 95, 340 90
              C300 90, 260 85, 260 65
            "
          />
        </g>
      </g>
    </svg>
  )
}
