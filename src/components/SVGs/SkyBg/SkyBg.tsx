import styles from './skybg.module.css'

export default function SkyBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1440 1100"
      preserveAspectRatio="none"
      className={styles.svg}
    >
      <defs>
        <linearGradient id="sky-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f24" />
          <stop offset="100%" stopColor="#1d2648" />
        </linearGradient>

        <linearGradient id="sky-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>

      <rect
        className="sky-dark"
        width="1440"
        height="1100"
        fill="url(#sky-dark)"
      />
      <rect
        className="sky-light"
        width="1440"
        height="1100"
        fill="url(#sky-light)"
      />

      <g className="stars">
        <circle className={styles.star1} cx="120" cy="80" r="2" />
        <circle className={styles.star2} cx="300" cy="150" r="1.5" />
        <circle className={styles.star3} cx="520" cy="60" r="1.8" />
        <circle className={styles.star4} cx="760" cy="200" r="1.3" />
        <circle className={styles.star5} cx="980" cy="100" r="1.7" />
        <circle className={styles.star6} cx="1300" cy="50" r="2.2" />

        <circle className={styles.star7} cx="180" cy="300" r="1.4" />
        <circle className={styles.star8} cx="430" cy="260" r="1.2" />
        <circle className={styles.star9} cx="670" cy="330" r="1.9" />
        <circle className={styles.star10} cx="920" cy="280" r="1.4" />
        <circle className={styles.star11} cx="1150" cy="350" r="1.6" />

        <circle className={styles.star12} cx="150" cy="500" r="1.3" />
        <circle className={styles.star13} cx="410" cy="600" r="1.9" />
        <circle className={styles.star14} cx="690" cy="540" r="1.4" />
        <circle className={styles.star15} cx="1000" cy="620" r="1.8" />
        <circle className={styles.star16} cx="1350" cy="580" r="1.5" />

        <circle className={styles.star17} cx="250" cy="850" r="1.6" />
        <circle className={styles.star18} cx="550" cy="930" r="1.2" />
        <circle className={styles.star19} cx="850" cy="870" r="1.8" />
        <circle className={styles.star20} cx="1200" cy="950" r="1.4" />

        <circle className={styles.star21} cx="200" cy="1050" r="1" />
        <circle className={styles.star22} cx="450" cy="1020" r="1" />
        <circle className={styles.star23} cx="850" cy="1070" r="1" />
        <circle className={styles.star24} cx="1200" cy="1030" r="1" />
      </g>
    </svg>
  )
}
