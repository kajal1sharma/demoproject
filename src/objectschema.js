let objectLeg = {
    lot:1,
    position:'sell',
    optionType:'put',
    expiry:"weekly",
    strikeCriteria:"strikeType",
    simpleMomentum:{
        type:"pointsUp",
        value:0
    },
    trailSL:{
        type:"points",
        value:{
            instrumentMove:0,
            stopLossMove:0
        }
    }
}


export default objectLeg;