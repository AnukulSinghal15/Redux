import {iceCreams} from "../bakeryState"

const iceCreamReducer= (state=iceCreams, action) =>{
    switch(action.type){
        case 'BUY_ICECREAM': return {
            ...state,
            count: state.count-action.payload
        }
        case 'RETURN_ICECREAM': return {
            ...state,
            count: state.count+action.payload
        }
        default: return state
    }
}

export default iceCreamReducer