import React from 'react'
import { motion } from 'framer-motion'
function Navbar() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.5}} id='nav'>
       <div style={{display:"flex",gap:"1rem"}}>
        <img src="swap.png" id='swapImg' alt="swapImg" />
        <span id='swapify'>Swapify</span>
       </div>
        <ul id='list'>
            <li className='lightBox'>
              <img style={{height:"2rem"}} src="doc.png"/>
              Docs
            </li>
            <li className='lightBox'>
              <img style={{height:"2rem"}}  src="git.png" />
              Code</li>
            <li className='coming'>Contact</li>
        </ul>
    </motion.div>
  )
}

export default Navbar