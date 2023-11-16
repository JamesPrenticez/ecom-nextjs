import React, {useEffect, useState, memo, useRef} from 'react'
import Image from 'next/image'
import { imageLoader } from '../hooks/useImageLoader'

interface Props {
  images: string[];
}

function Carousel({images}: Props) {
  const [index, setIndex] = useState(0);
  const [isZoom, setIsZoom] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  //Reset index when image props change..
  useEffect(() => {
    return () => {
      setIndex(0);
    };
  }, [images]);


  const handleMouseEnter = (e) => {
    const ele = e.currentTarget;
    
    setTimeout(() => {
      const { width, height } = ele.getBoundingClientRect();
      setSize([width, height]);
    }, 500);  // 500ms delay
  }

  const handleMouseMove = (e) => {
    let ele = e.currentTarget;
    let { top, left } = ele.getBoundingClientRect();
    let x = e.pageX - left - window.pageXOffset;
    let y = e.pageY - top - window.pageYOffset;
    setXY([x, y])
    setIsZoom(true)
  };

  return (
    <div>
      <div className="flex justify-center overflow-hidden w-full">
        {/* Main Image */}
        <div
          className="relative w-full whitespace-nowrap transistion ease duration-1000"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <Image
            loader={imageLoader}
            src={images[index]}
            alt={images[index]}
            width={640}
            height={640}
            layout={"responsive"}
            priority
            placeholder="blur"
            blurDataURL="/images/default.jpg"
          />

          <MemoizedMagnifyingGlass 
            x={x}
            y={y}
            isZoom={isZoom}
            image={images[index]}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
          />
        </div>
      </div>

      {/* Small Images Below */}
      <div className="text-center flex space-x-2 w-full py-2">
        {images?.map((image, index2) => (
          <div
            key={index2}
            onMouseEnter={() => setIndex(index2)}
            className={`w-[4rem] inline-block rounded-sm hover:cursor-pointer transistion ease duration-500 border-[.15rem] ${
              index === index2 ? " border-primary-link" : "border-transparent"
            }`}
          >
          <Image
            loader={imageLoader}
            src={image}
            alt={`thumbnail-${index2}`}
            width={64}
            height={64}
            layout={"responsive"}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

interface MagnifyingGlassProps {
  x: number;
  y: number;
  isZoom: boolean;
  image: string;
  imgHeight: number;
  imgWidth: number;
}

function MagnifyingGlass({x, y, isZoom, image, imgHeight, imgWidth}: MagnifyingGlassProps){
  const zoomLevel = 2.5
  const magnifierWidth = imgWidth * zoomLevel // 250
  const magnifierHeight = imgHeight * zoomLevel // 250

  return(
    <div 
      className={`${isZoom ? "" : "hidden"} absolute pointer-events-none border`}
      style={{
        height: `${magnifierHeight}px`,
        width: `${magnifierWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifierWidth / 2}px`,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
      }}
    >
    </div>
  )
}

const MemoizedMagnifyingGlass = memo(MagnifyingGlass);

//Magnifyer from: https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7
//From: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react