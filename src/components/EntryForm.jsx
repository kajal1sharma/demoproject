import React, { useState } from 'react'
import "./EntryForm.css";
import Options from './Options';
import Leg from './Leg';
import objectLeg from "../objectschema";
const EntryForm = () => {
    const [legObject, setLegObject] = useState([]);
    // const [showleg, setShowLeg]=useState(false);
      console.log(legObject)
  return (
    <div className='entryform__container' style={{paddingTop:"40px"}}>
      
      <div>
        <Options objectLeg={objectLeg} />
      </div>
      <div className='button__container'>
        <button className='mainbutton' onClick={()=>{setLegObject([...legObject.length?legObject:[], {...objectLeg}])}}>Add Leg</button>
        <button className='mainbutton'> Cancel</button>
      </div>
      <div>
      {legObject.map((object, index)=>{
        return <Leg legObject={object} index={index} key={index} setLegObject={setLegObject}/>
      })}
      {legObject.length?
        <button style={{padding:"10px", borderRadius:"25px", marginLeft:"48%",marginTop:"20px",marginBottom:"50px", border:"none", boxShadow:"0px 0px 10px grey"}}>
          Final Submit
        </button>
        :null}
      </div>
    </div>
  )
}

export default EntryForm
