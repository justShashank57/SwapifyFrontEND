import React from 'react'
import InfoBox from '../components/InfoBox'
import Card from '../components/card';
import { motion } from 'framer-motion';
function Three() {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  };
  return (
    <div id='threeRoot'>
        
       <InfoBox/>
        <motion.div variants={variants} initial="initial" whileInView="animate" transition={{duration:0.3,delay:0.3}} id='cardRoot'>
          <Card num={2267} identity={"followers"} color={"#0BA1E7"} platform={"twitter"} img="twitter.png"/>
          <Card num={217} identity={"members"} color={"#687FD4"} platform={"discord"} img="discord.png"/>
        </motion.div>

        <div id='icons'>
          <img id='icon' src="twitter2.png" />
          <img id='icon' src="discord2.png" />
          <img id='icon' src="swap.png" />
        </div>
    </div>
  )
}

export default Three