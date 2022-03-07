import React from 'react'
import Bag from '../bag/Bag'
import "./Model.css"

const model = ({setModal}) => {
  return (
    <>
  
<div  class="overlay"> 
 <div class="dialog-body"> 
  <a class="close" href="#" aria-label="Close dialog" onClick={()=>setModal(false)}>&times;</a> 
  <div class="content"> 
  <Bag />
   <Bag /><Bag />
   <Bag />
  </div> 
 </div> 
</div>
    </>
  )
}

export default model