import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion'

const Scroll = () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const Color = useTransform(
    scrollY,
    [0, 1000, 2000, 4000],
    ['rgb(0,0,0)', 'rgb(255,0,255)', 'rgb(0,255,255)', 'rgb(255,255,255)']
  )

  const X = useTransform(scrollY, [0, 4000], [0, 500])

  return (
    <>
      <SmoothScroll>
        <motion.div style={{ backgroundColor: Color }}>
          <Elem />
        </motion.div>
      </SmoothScroll>
    </>
  )
}

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)

  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll() 
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } 
  const spring = useSpring(transform, physics) 

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className='fixed top-0 left-0 w-full overflow-hidden overscroll-y-none will-change-transform'
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

const Elem = () => {
  return (
    <div className='flex flex-col items-center w-screen pt-16'>
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <H1 />
      <h1 className='text-black text-9xl opacity-40'>LAST TEST!!</h1>
    </div>
  )
}

const H1 = () => <h1 className='text-9xl opacity-40'>Hello</h1>

export default Scroll