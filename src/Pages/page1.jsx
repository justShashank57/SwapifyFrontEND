import React from 'react'
import { motion } from 'framer-motion'
function One() {
  return (
    <motion.div initial={{y:"30rem",opacity:"0"}} animate={{y:"0rem",opacity:"1"}} transition={{duration:0.5}}  id='one'>
        <div style={{maxWidth:"45%"}} id='OneOne'>
            <p className='bold'>Swap tokens every second.</p>
            <p className='light'>Aqueduct is the world's first decentralized exchange native to the real-time economy.</p>
            <div style={{marginTop:"1rem"}} className='coming'>Coming Q3 2023</div>
        </div>
        <video id='vid1' autoPlay loop>
            <source src="vid1.webm" type='video/webm'/>
        </video>
    </motion.div>
  )
}

export default One