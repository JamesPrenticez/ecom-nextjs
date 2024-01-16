import React, { type SVGProps, type ReactElement } from "react";

const Logo = ({ ...props }: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      viewBox="0 0 144 250"
      xmlns="http://www.w3.org/2000/svg"
      fill="#663dff"

      {...props}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(100)">
          <stop offset="0%" stopColor="#aa00ff" />
          <stop offset="100%" stopColor="#663dff" />
          {/* <stop offset="100%" stop-color="#cc4499" /> */}
        </linearGradient>
      </defs>
      <path fill="url('#myGradient')" d=" M 73.59 6.36 C 79.95 6.46 82.50 13.14 85.73 17.50 C 90.38 16.64 94.82 15.00 99.32 13.62 C 102.35 12.63 103.55 16.18 103.90 18.49 C 105.03 21.98 103.31 26.22 105.73 29.25 C 108.95 30.67 112.55 30.96 115.83 32.26 C 114.30 38.02 108.36 40.99 104.26 44.84 C 107.31 49.37 110.02 54.42 114.65 57.56 C 120.88 62.21 130.09 56.35 135.66 62.39 C 135.76 64.43 136.06 66.56 135.35 68.53 C 133.53 71.53 130.68 73.72 128.79 76.66 C 127.28 80.06 129.66 84.39 126.89 87.32 C 123.41 88.08 119.48 87.50 116.65 85.25 C 113.55 81.80 111.02 76.85 105.94 76.17 C 98.88 75.03 91.66 76.38 84.58 75.53 C 77.78 73.58 71.54 70.15 65.17 67.16 C 65.81 70.32 66.35 73.83 68.77 76.18 C 75.61 82.87 83.43 88.46 91.35 93.79 C 102.16 101.24 111.19 112.06 114.21 125.05 C 114.90 131.94 115.49 139.48 111.90 145.72 C 109.77 149.78 106.95 153.54 103.28 156.33 C 95.17 162.58 86.24 167.76 78.56 174.56 C 72.16 181.13 64.95 187.88 62.70 197.13 C 61.70 203.54 62.29 210.41 65.61 216.10 C 68.91 221.47 75.09 224.20 80.99 225.63 C 90.35 227.84 100.71 224.01 106.46 216.33 C 111.88 207.56 112.70 194.66 105.18 186.80 C 103.20 184.25 99.60 183.74 96.65 184.61 C 94.26 186.15 92.62 188.59 90.25 190.15 C 88.12 190.90 85.81 190.51 83.60 190.49 C 83.64 187.95 82.92 184.94 85.00 182.97 C 89.04 177.33 96.05 173.84 103.03 175.39 C 109.30 176.89 116.35 179.36 119.62 185.40 C 122.41 190.55 124.92 196.07 125.36 201.98 C 126.32 214.42 120.58 227.08 111.04 235.03 C 103.82 241.81 93.81 245.07 84.02 245.25 C 66.02 244.34 47.79 235.12 38.69 219.17 C 30.41 202.59 32.73 182.38 41.16 166.33 C 45.90 156.90 51.71 147.03 50.52 136.04 C 49.51 127.41 47.49 118.80 43.49 111.03 C 40.27 113.57 37.24 116.37 33.86 118.69 C 31.04 120.68 26.82 120.07 24.69 117.33 C 18.38 109.85 13.79 100.73 12.49 90.97 C 11.85 84.85 13.14 78.68 15.75 73.13 C 20.76 74.82 25.67 76.87 30.88 77.91 C 27.45 72.78 21.91 69.42 19.05 63.88 C 21.82 59.95 26.79 59.60 30.99 58.21 C 28.25 54.67 23.81 51.70 23.37 46.96 C 25.75 42.18 31.93 41.96 36.31 39.99 C 36.87 35.56 32.22 31.80 33.31 27.06 C 37.48 24.60 42.42 25.55 47.02 25.36 C 48.29 25.28 50.09 25.83 50.29 24.03 C 49.36 20.07 46.88 15.35 49.71 11.61 C 51.83 10.88 54.18 11.21 56.19 12.14 C 59.75 13.71 63.44 14.99 67.20 16.04 C 69.04 12.63 71.06 9.31 73.59 6.36 Z" />
    </svg>
  );
};

export default Logo;