import { useEffect, useRef } from 'react'
import { css } from '@emotion/css'

function Cursor() {

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
          document.removeEventListener('mousemove', onMouseMove)
        }
      }, [])
  
    const cursor: any = useRef<HTMLDivElement>(null)
  
    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event
      if (cursor.current) {
        cursor.current.style.left = `${clientX}px`
        cursor.current.style.top = `${clientY}px`
      }
    }
  
  
    const MainCursor = css`
      position: fixed;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: all 0.1s ease-out;
      transition-property: width, height, border;
      will-change: width, height, transform, border;
      transform-origin: center;
      z-index: 9999;
      background-color: #fff;
      mix-blend-mode: normal;
      @media (max-width: 1199.98px) {
        display: none;
      }
    `

    return (
      <div>
        <div className={MainCursor} ref={cursor} />
      </div>
    )
  }
  
  export default Cursor