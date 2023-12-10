import React from 'react'
import { type SVGProps, type ReactElement } from "react"

const EmailSentIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <div className="h-48 w-48 rounded-full flex items-center justify-center bg-primary/50">
     <svg className="mr-4 mt-2"fill="none" stroke="none" viewBox="0 0 512 512" strokeWidth={1.5} height="50%" width="50%" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#000000" opacity="1.00" d=" M 491.57 0.00 L 500.50 0.00 C 505.69 2.17 509.81 6.31 512.00 11.49 L 512.00 22.10 C 510.20 27.91 509.75 33.99 508.80 39.96 C 490.32 164.18 471.88 288.40 453.40 412.61 C 452.39 422.42 441.40 429.55 432.09 425.93 C 390.82 411.88 349.58 397.70 308.31 383.65 C 303.31 381.93 298.35 380.07 293.23 378.73 C 267.46 413.79 241.70 448.87 215.92 483.93 C 211.42 490.45 202.00 492.91 195.06 488.89 C 189.61 486.09 186.38 480.04 186.44 474.00 C 186.32 430.01 186.57 386.01 186.32 342.03 C 131.40 323.06 76.36 304.41 21.39 285.58 C 16.79 283.90 11.95 282.77 7.63 280.42 C 3.86 278.33 1.66 274.42 0.00 270.59 L 0.00 262.51 C 1.65 258.95 3.69 255.30 7.15 253.21 C 11.60 250.49 16.37 248.35 20.95 245.87 C 177.81 163.89 334.78 82.10 491.57 0.00 M 378.03 166.02 C 329.26 218.45 280.28 270.68 231.63 323.20 C 252.32 330.80 273.34 337.52 294.15 344.80 C 320.49 353.78 346.81 362.79 373.14 371.80 C 390.28 377.43 407.17 383.82 424.43 389.04 C 432.84 331.40 441.53 273.79 450.07 216.16 C 457.65 165.52 464.96 114.84 472.78 64.24 C 441.36 98.32 409.60 132.08 378.03 166.02 M 340.34 115.36 C 263.91 155.25 187.49 195.19 111.05 235.08 C 93.02 244.69 74.67 253.72 56.82 263.65 C 103.82 279.73 150.80 295.92 197.87 311.76 C 200.67 310.11 202.48 307.09 204.85 304.86 C 233.31 274.32 261.78 243.79 290.25 213.25 C 333.42 166.77 376.90 120.56 419.93 73.95 C 393.28 87.51 366.90 101.60 340.34 115.36 M 218.83 353.00 C 218.67 377.05 218.55 401.12 218.89 425.17 C 232.23 407.69 244.95 389.73 258.12 372.12 C 259.25 370.61 260.25 369.01 261.14 367.35 C 247.00 362.67 232.98 357.62 218.83 353.00 Z" />
      <path fill="#fff" opacity="1.00" d=" M 378.03 166.02 C 409.60 132.08 441.36 98.32 472.78 64.24 C 464.96 114.84 457.65 165.52 450.07 216.16 C 441.53 273.79 432.84 331.40 424.43 389.04 C 407.17 383.82 390.28 377.43 373.14 371.80 C 346.81 362.79 320.49 353.78 294.15 344.80 C 273.34 337.52 252.32 330.80 231.63 323.20 C 280.28 270.68 329.26 218.45 378.03 166.02 Z" />
      <path fill="#fff" opacity="1.00" d=" M 340.34 115.36 C 366.90 101.60 393.28 87.51 419.93 73.95 C 376.90 120.56 333.42 166.77 290.25 213.25 C 261.78 243.79 233.31 274.32 204.85 304.86 C 202.48 307.09 200.67 310.11 197.87 311.76 C 150.80 295.92 103.82 279.73 56.82 263.65 C 74.67 253.72 93.02 244.69 111.05 235.08 C 187.49 195.19 263.91 155.25 340.34 115.36 Z" />
      <path fill="#fff" opacity="1.00" d=" M 218.83 353.00 C 232.98 357.62 247.00 362.67 261.14 367.35 C 260.25 369.01 259.25 370.61 258.12 372.12 C 244.95 389.73 232.23 407.69 218.89 425.17 C 218.55 401.12 218.67 377.05 218.83 353.00 Z" />
    </svg>
    </div>
  )
}

export default EmailSentIcon;

// const EmailSentIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
//   return (
//     <div className="h-48 w-48 rounded-full text-white flex items-center justify-center bg-yellow-400">
//       <svg className="mt-2 mr-2"fill="none" stroke="none" viewBox="0 0 512 512" strokeWidth={1.5} height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" {...props}>
//         <path fill="#232e38" d=" M 207.36 171.69 C 209.49 170.93 211.77 170.65 214.03 170.66 C 278.32 170.69 342.61 170.64 406.90 170.68 C 412.79 170.68 419.02 174.43 420.44 180.41 C 421.99 185.25 420.21 190.20 418.96 194.88 C 408.40 234.36 397.78 273.81 387.25 313.29 C 385.10 322.46 376.62 329.88 367.07 329.92 C 302.68 329.94 238.28 329.93 173.89 329.93 C 168.08 330.13 161.84 326.69 160.05 320.94 C 158.88 317.70 159.02 314.13 159.93 310.84 C 171.09 269.25 182.22 227.64 193.38 186.05 C 195.41 179.40 200.66 173.76 207.36 171.69 M 214.23 182.08 C 237.51 207.00 260.58 232.11 283.84 257.05 C 286.16 259.47 289.75 257.59 292.02 256.06 C 328.13 231.42 364.18 206.69 400.32 182.08 C 338.29 182.07 276.26 182.07 214.23 182.08 M 171.74 310.46 C 201.54 290.09 231.36 269.74 261.15 249.37 C 242.29 228.99 223.37 208.67 204.54 188.27 C 193.62 229.01 182.81 269.77 171.74 310.46 M 319.09 251.36 C 338.03 271.61 356.84 291.98 375.72 312.29 C 386.67 271.59 397.44 230.84 408.52 190.17 C 378.76 210.64 348.88 230.94 319.09 251.36 M 179.62 318.65 C 241.80 318.55 303.98 318.56 366.16 318.65 C 347.24 298.43 328.46 278.08 309.61 257.80 C 301.70 262.60 294.25 270.87 284.12 269.36 C 277.20 268.72 273.51 262.23 268.99 257.84 C 239.17 278.06 209.60 298.67 179.62 318.65 Z" />
//         <path fill="#232e38" d=" M 135.34 193.57 C 144.93 193.15 154.55 193.51 164.15 193.40 C 167.11 193.08 170.14 195.13 170.57 198.15 C 171.24 201.44 168.43 204.86 165.06 204.76 C 155.67 204.86 146.28 204.79 136.89 204.78 C 134.07 205.00 131.35 202.87 130.93 200.07 C 130.35 197.18 132.43 194.07 135.34 193.57 Z" />
//         <path fill="#232e38" d=" M 105.38 239.61 C 107.12 238.71 109.15 238.99 111.04 238.91 C 125.38 239.00 139.73 238.80 154.07 239.01 C 158.40 239.06 160.89 244.77 158.12 248.05 C 156.28 250.69 152.78 250.34 149.96 250.36 C 135.64 250.19 121.30 250.57 106.99 250.18 C 101.91 249.50 100.75 241.79 105.38 239.61 Z" />
//         <path fill="#232e38" d=" M 84.35 284.58 C 103.57 284.32 122.82 284.51 142.05 284.48 C 145.50 284.23 148.48 287.66 147.83 291.04 C 147.46 293.77 144.86 295.94 142.10 295.78 C 123.37 295.83 104.64 295.79 85.91 295.80 C 83.35 296.03 80.74 294.46 79.96 291.97 C 78.75 288.84 81.00 284.97 84.35 284.58 Z" />
//         <path fill="#ffffff" d=" M 214.23 182.08 C 276.26 182.07 338.29 182.07 400.32 182.08 C 364.18 206.69 328.13 231.42 292.02 256.06 C 289.75 257.59 286.16 259.47 283.84 257.05 C 260.58 232.11 237.51 207.00 214.23 182.08 Z" />
//         <path fill="#ccd3d6" d=" M 171.74 310.46 C 182.81 269.77 193.62 229.01 204.54 188.27 C 223.37 208.67 242.29 228.99 261.15 249.37 C 231.36 269.74 201.54 290.09 171.74 310.46 Z" />
//         <path fill="#ccd3d6" d=" M 319.09 251.36 C 348.88 230.94 378.76 210.64 408.52 190.17 C 397.44 230.84 386.67 271.59 375.72 312.29 C 356.84 291.98 338.03 271.61 319.09 251.36 Z" />
//         <path fill="#e8eeef" d=" M 179.62 318.65 C 209.60 298.67 239.17 278.06 268.99 257.84 C 273.51 262.23 277.20 268.72 284.12 269.36 C 294.25 270.87 301.70 262.60 309.61 257.80 C 328.46 278.08 347.24 298.43 366.16 318.65 C 303.98 318.56 241.80 318.55 179.62 318.65 Z" />
//       </svg>
//     </div>
//   )
// }
// const EmailSentIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
//   return (
//     <div className="h-48 w-48 rounded-full text-white flex items-center justify-center bg-primary">
//       <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} height="70%" width="70%" xmlns="http://www.w3.org/2000/svg" {...props}>
//         <rect width="20" height="16" x="2" y="4" rx="2"/>
//         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//       </svg>
//     </div>
//   )
// }

// export default EmailSentIcon;