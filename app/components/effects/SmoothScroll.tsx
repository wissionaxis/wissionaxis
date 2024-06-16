'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const SmoothScroll = ({children}:{children:React.ReactNode})=> {

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
export default SmoothScroll
