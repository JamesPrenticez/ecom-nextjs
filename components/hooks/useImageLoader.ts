// not really a hook more of a util

export interface Props {
  src: string;
  width: number;
  quality: number;
}

export const imageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
}