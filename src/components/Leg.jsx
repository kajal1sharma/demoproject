import React, { useState } from 'react'
import "./Leg.css";
const Leg = ({legObject, setLegObject, index}) => {
  const [momentum,setMomentum ] =useState(false);
  const [trialSL, setTrialSL] =useState(false);
    return (
    <>
    <div className='leg__container'>
        <div className='leg_top_subcontainer'>
            <div>
                <label for="lots">Lots:</label> 
                <input defaultValue={legObject.lot} onChange={(e)=>{legObject.lot=Number(e.target.value);console.log(legObject.lot)}} type={"number"} className="counter"/>
            </div>
            <select name="position"  defaultValue={legObject.position} onChange={(e)=>{legObject.position=e.target.value ;console.log(legObject)}} className='dropdown'> 
                <option value="sell">Sell</option>
                <option value="buy">Buy</option>
            </select>
            

            <select name="optionType"  defaultValue={legObject.optionType} onChange={(e)=>{legObject.optionType=e.target.value ;console.log(legObject)}} className='dropdown'>
                <option value="put">Put</option>
                <option value="call">Call</option>
            </select>
            <select name="ExpiryType"  defaultValue={legObject.expiry} onChange={(e)=>{legObject.expiry=e.target.value ;console.log(legObject)}} className='dropdown'>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            <div>
            <label for="strikeType">Select Strike</label> 
                <select name="strikeType" defaultValue={legObject.strikeCriteria} onChange={(e)=>{legObject.strikeCriteria=e.target.value ;console.log(legObject)}} className='dropdown'>
                    <option value="strikeType">strike Type</option>
                    <option value="premimumRange">Premimum Range</option>
                </select>
            </div>
        </div>

        <div className='leg_bottom_subcontainer'>
            <div>
                <div>
                    <input type="checkbox" onChange={()=>{setMomentum(momentum?false:true);}}/>
                    <span>Simple Momentum</span>
                </div>
                <div>
                <select disabled={!momentum} name="momentumType" onChange={(e)=>{legObject.simpleMomentum.type=e.target.value ;console.log(legObject)}} className='dropdown'>
                    <option value="pointsUp">Points Up</option>
                    <option value="pointsDown">Points Down</option>
                </select>
                    <input disabled={!momentum} type={"number"} onChange={(e)=>{legObject.simpleMomentum.value=Number(e.target.value) ;console.log(legObject)}}  className="counter"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="checkbox" onChange={()=>setTrialSL(trialSL?false:true)}/>
                    <span>Trial SL</span>
                </div>
                <div>
                    <select disabled={!trialSL} name="trialSLType" onChange={(e)=>{legObject.trailSL.type=e.target.value ;console.log(legObject)}} className='dropdown'>
                        <option value="points">Points</option>
                        <option value="percentage">Percentage</option>
                    </select>
                    <input disabled={!trialSL} type={"number"}  className="counter" onChange={(e)=>{legObject.trailSL.value.instrumentMove=Number(e.target.value) ;console.log(legObject)}}/>
                    <input disabled={!trialSL} type={"number"}  className="counter" onChange={(e)=>{legObject.trailSL.value.stopLossMove=Number(e.target.value) ;console.log(legObject)}}/>
                </div>
            </div>
        </div>
        <div className='leg_options_container'>
            
            <button onClick={()=>setLegObject( stateObject=> [...stateObject,legObject ])}> copy</button>
            <button onClick={()=>setLegObject(stateObject=>[...stateObject.slice(0, index).concat(stateObject.slice(index+1))])}>delete</button>
        </div>

    </div>

  </>
  )
}

export default Leg
