import {Cakes} from "../bakeryState"

const cakeReducer= (state=Cakes, action) =>{
    switch(action.type){
        case 'BUY_CAKE': 
        return {
            ...state,
            count: state.count-action.payload
        }

        case 'RETURN_CAKE': 
        return {
            ...state,
            count: state.count+action.payload
        }
        default: return state
    }
}

export default cakeReducer