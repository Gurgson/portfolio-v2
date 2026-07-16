'use client'
import { useIsMobile } from '@/hooks/UseMediaQuery'
import styles from './star.module.css'

export default function Star() {
  const isMobile = useIsMobile(700)

  const viewBox = isMobile ? '180 60 280 180' : '0 0 1080 300'

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={styles.svg}
    >
      <defs>
        <clipPath id="moonClip">
          <rect
            width="107.668"
            height="107.668"
            fill="white"
            transform="translate(224 162.58) rotate(-65)"
          />
        </clipPath>

        <filter id="moonGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="35" result="blur" />
          <feFlood floodColor="#fefce8" floodOpacity="0.8" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="sunGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="40" result="blur" />
          <feFlood floodColor="#fbbf24" floodOpacity="0.7" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className={styles.moon}>
        <g filter="url(#moonGlow)">
          <g clipPath="url(#moonClip)">
            <path
              d="M318.292 87.7511C345.224 100.31 356.905 132.328 344.331 159.292C331.757 186.257 299.755 197.905 272.79 185.331C245.858 172.772 234.177 140.755 246.751 113.79L246.842 113.595C247.473 126.679 255.162 138.977 267.848 144.892C286.095 153.401 307.796 145.503 316.305 127.255C323.464 111.903 319.029 94.1535 306.577 83.8324C310.534 84.6877 314.454 85.9614 318.292 87.7511Z"
              className="moon-path"
            />
            <path
              opacity="0.15"
              d="M337.68 119.205C338.853 116.69 337.765 113.701 335.25 112.528C332.735 111.355 329.746 112.443 328.573 114.958C327.4 117.473 328.488 120.463 331.003 121.636C333.518 122.808 336.508 121.72 337.68 119.205Z"
              className="moon-detail"
            />
            <path
              opacity="0.15"
              d="M330.681 110.437C331.134 109.467 330.714 108.314 329.744 107.862C328.774 107.409 327.621 107.829 327.168 108.799C326.716 109.769 327.136 110.922 328.106 111.375C329.076 111.827 330.229 111.407 330.681 110.437Z"
              className="moon-detail"
            />
            <path
              opacity="0.15"
              d="M253.281 147.683C253.733 146.713 253.313 145.56 252.343 145.107C251.373 144.655 250.22 145.075 249.768 146.045C249.316 147.015 249.735 148.168 250.705 148.62C251.675 149.072 252.828 148.653 253.281 147.683Z"
              className="moon-detail"
            />
          </g>
        </g>
      </g>

      <g className={styles.sun}>
        <circle
          cx="352.5"
          cy="111.5"
          r="68.5"
          className="sun-circle"
          filter="url(#sunGlow)"
        />
      </g>
    </svg>
  )
}
