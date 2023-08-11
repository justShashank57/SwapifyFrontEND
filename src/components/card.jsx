import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion'; 

function Card({num,identity,platform,img,color}) {
    


    const ref = React.useRef(null);
    React.useEffect(()=>{
        const cardOne = VanillaTilt.init(ref.current,{
           max: 15,
           speed: 300,
         }
        );
    },[])
  return (
    <motion.div  ref={ref} id='card' style={{backgroundColor:color}}>
        <div id='divOne'>
            <span id='cardSpan' style={{fontSize:"3rem",fontWeight:"700"}}>Stay up to date</span>
            <img style={{maxWidth:"3.44rem",maxHeight:"3.44rem"}} src={img}/>
        </div>
        <p id='cardPara' style={{fontSize:"2rem",fontWeight:"600",margin:"0"}}>
            Join <span style={{fontSize:"2.7rem",fontWeight:"700"}} id='num'>{ num }</span> {identity} on {platform}
        </p>
    </motion.div>
  )
}

export default Card