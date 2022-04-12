import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { css } from "@emotion/css";


// const clip = [
//   "https://www.youtube.com/embed/KZJN62JDGsY",
//   "https://www.youtube.com/embed/kT3qirfoFgM",
//   "https://www.youtube.com/embed/jQNl4JXiVFY",
//   "https://www.youtube.com/embed/jjUaptQ2qPU"
// ];


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const hidehl = css`
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
-ms-user-select: none; 
 user-select: none; 
`

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Example = ({ data }) => {
  const images: string[] = []
  data.map((v) => {
    let L = v.length
    images.push(`https://www.youtube.com/embed/${v.url.slice(-11, L)}`)
  })
  // console.log('img: ', images)


  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={hidehl}>
      <div className='flex items-center relative overflow-hidden'>
        <div className="absolute z-20 left-3 next pr-3" onClick={() => paginate(1)}>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='duration-200 w-6 h-6 drop-shadow-xl' />
        </div>
        <div className="overflow-hidden h-[200px] lg:h-[420px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.iframe
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute h-[200px] lg:h-[420px] w-full rounded-xl drop-shadow-xl border-2 border-[#ffffff]"
            ></motion.iframe>


          </AnimatePresence>
        </div>
        <div className="absolute right-3 z-20 prev pl-3" onClick={() => paginate(-1)}>
          <FontAwesomeIcon icon={faCircleArrowRight} className='duration-200 w-6 h-6 drop-shadow-xl' />
        </div>
      </div>
    </div>
  );
};


export default Example