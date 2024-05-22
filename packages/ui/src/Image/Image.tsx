import React from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { size?: number; blackAndWhite?: boolean }

export const Image: React.FC<ImageProps> = ({ size, blackAndWhite = false, style, ...props }) => {
  return (
    <img
      {...props}
      style={{
        filter: blackAndWhite ? 'grayscale(100%)' : undefined,
        ...style,
        height: size ? size : style?.height,
        width: size ? size : style?.width,
      }}
    />
  )
}
