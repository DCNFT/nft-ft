import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { ReactElement } from 'react'
const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`
const St = {
  ImageWrapper: styled.div`
    width: 100%;
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
    will-change: transform;
    > span {
      overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
    }
  `,
}

type ImageWrapperProps = {
  src: any
  alt: string
}
const ImageWrapper = ({ src, alt }: ImageWrapperProps) => {
  return (
    <St.ImageWrapper>
      <Image src={src} priority placeholder="blur" alt={alt} />
    </St.ImageWrapper>
  )
}
export default ImageWrapper
