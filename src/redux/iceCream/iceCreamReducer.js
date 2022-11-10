const initialState={
    numIceCream: 15
}

const iceCreamReducer= (state=initialState, action) =>{
    switch(action.type){
        case 'BUY_ICECREAM': return {
            ...state,
            numIceCream: state.numIceCream-action.payload
        }
        case 'RETURN_ICECREAM': return {
            ...state,
            numIceCream: state.numIceCream+action.payload
        }
        default: return state
    }
}

export default iceCreamReducer