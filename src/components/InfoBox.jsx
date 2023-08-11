import React from 'react'
import data from './data';
function InfoBox() {
  const [selected,setSelected] = React.useState(0);
  const cls = {

  }
  const ButtonElements = data.map((obj,index)=>{
           return(
            <span className={index===selected?"selected":"buttons"} onClick={(event)=>setSelected(index)} style={{fontSize:"1.12rem"}}>
                {obj.title}
            </span>
           )
  })
  
  const selectedElement = data.find((obj)=>{
           return(
            obj.id == selected
           )
  })
  return (
    <div id='infoBoxRoot'>
            <p style={{fontSize:"2.25rem"}}>An onchain solution to time-based swaps. Execute TWAPs with a few clicks.</p>

            <div id='buttonBox' >
              {ButtonElements}
            </div>
             
            <div style={{padding:"1rem"}} className='lastDiv'>
                <div id='contentBox' style={{maxWidth:"60%"}}>
                    <p id='selectedHead'>{selectedElement.title}</p>
                <p>{selectedElement.info}</p>
                <span className='buttons' style={{borderRadius:"1rem",width:"6rem",textAlign:"center"}}>Learn more</span>
                </div>
                <img src={selectedElement.image} className='infoImage'/>
            </div>
    </div>
  )
}

export default InfoBox