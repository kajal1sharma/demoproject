import React from 'react'
import "./Options.css";
const Options = ({objectLeg}) => {
  return (
    <div className='input_main_container'>
        <div className='inputs__container'>
            <h6 className='input__headings'>Total Lot</h6>
            <input type={"number"} onChange={(e)=>{objectLeg.lot=Number(e.target.value);console.log(objectLeg.lot)}}  className="counter" style={{width:"40px"}}/>
            
        </div>
        <div className='inputs__container'>
            <h6 className='input__headings'>Position</h6>
            <select name="position" onChange={(e)=>{objectLeg.position=e.target.value;console.log(objectLeg)}} className='dropdown_white'> 
                <option value="sell">Sell</option>
                <option value="buy">Buy</option>
            </select>
        </div>
        <div className='inputs__container'>
            <h6 className='input__headings'>Option Type</h6>
            <select name="optionType" onChange={(e)=>{objectLeg.optionType=e.target.value;console.log(objectLeg)}} className='dropdown_white'>
                <option value="put">Put</option>
                <option value="call">Call</option>
            </select>
        </div>
        <div className='inputs__container'>
            <h6 className='input__headings'>Expiry</h6>
            <select name="ExpiryType" onChange={(e)=>{objectLeg.expiry=e.target.value;console.log(objectLeg)}} className='dropdown_white'>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
        </div>
        <div className='inputs__container'>
            <h6 className='input__headings'>Select Strike Criteria</h6>
            <select name="strikeType" onChange={(e)=>{objectLeg.strikeCriteria=e.target.value;console.log(objectLeg)}} className='dropdown_white'>
                    <option value="strikeType">strike Type</option>
                    <option value="premimumRange">Premimum Range</option>
            </select>
        </div>
    </div>
  )
}

export default Options
