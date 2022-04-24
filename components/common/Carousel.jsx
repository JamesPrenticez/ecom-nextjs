import React, {useEffect, useState} from 'react'
import NextImage from 'next/image'

function MagnifyingGlass({x, y, isZoom, image, imgHeight, imgWidth}){
  const zoomLevel = 2.5
  const magnifieWidth = imgWidth * zoomLevel
  const magnifierHeight = imgHeight * zoomLevel

  //console.log(x, y, isZoom, image, imgHeight, imgWidth)

  return(
    <div 
      className={`${isZoom ? "" : "hidden"} absolute pointer-events-none border`}
      style={{
        height: `${magnifierHeight}px`,
        width: `${magnifieWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifieWidth / 2}px`,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
      }}
    >
    </div>
  )
}

function Carousel({images}) {
  const [index, setIndex] = useState(0)
  const [isZoom, setIsZoom] = useState(false)
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  //Reset index when image props change..
  useEffect(()=>{
    return () => {
      setIndex(0)
    }
  }, [images])


  const handleMouseEnter= (e) => {
    const ele = e.currentTarget;
    const { width, height } = ele.getBoundingClientRect();
    setSize([width, height]);
    setIsZoom(true)
  }

  const handleMouseMove = (e) => {
    let ele = e.currentTarget
    let {top, left} = ele.getBoundingClientRect()
    let x = e.pageX - left - window.pageXOffset
    let y = e.pageY - top - window.pageYOffset
    setXY([x, y])
  }

  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="">
      <div className="flex justify-center overflow-hidden w-full">
        {/* Main Image */}
        <div
          className="relative w-full whitespace-nowrap transistion ease duration-1000"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <NextImage
            loader={myLoader}
            src={images[index]}
            alt={images[index]}
            width={640}
            height={640}
            layout={"responsive"}
            priority
            placeholder="blur"
            blurDataURL="/images/default.jpg"
          />

          <MagnifyingGlass 
            x={x}
            y={y}
            isZoom={isZoom}
            setIsZoom={setIsZoom}
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
          <NextImage
            src={image}
            alt={image}
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

//Magnifyer from: https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7
//From: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react