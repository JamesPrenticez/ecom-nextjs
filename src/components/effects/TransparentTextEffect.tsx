import React from 'react'

interface Props {
  text: string;
}

const TransparentTextEffect = ({text}: Props) => {
  return (
    <h1 className="text-8xl font-bold inline-block bg-white mix-blend-screen p-4 m-4 uppercase">
      {text}
    </h1>
  )
}

export default TransparentTextEffect;