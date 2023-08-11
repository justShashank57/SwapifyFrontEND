import React from 'react'
import { motion } from 'framer-motion'
function Two() {
  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  };
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" transition={{delay:0.3,duration:0.3}} id='twoRoot'>
        <motion.video id='vid2' autoPlay loop>
            <source src='vid2.webm' type='video/webm'/>
        </motion.video>
        <div id='twoTwo'>
            <p className='lessBold'>What is Swapify?</p>
            <p className='lessLight'>Swapify is a TWAMM (Time-weighted automated market maker) powered by money streams. As a new primitive for time-based swaps, we enable you to swap tokens every second.</p>
            <div className='bookDemo'>Book Demo</div>
        </div>
    </motion.div>
  )
}

export default Two