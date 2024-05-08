import React from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & { size?: number }

export const Image: React.FC<ImageProps> = ({ size, style, ...props }) => {
  return <img {...props} style={{ ...style, height: size ? size : style?.height, width: size ? size : style?.width }} />
}
