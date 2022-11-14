import { createStore, applyMiddleware } from 'redux'
import cakeReducer from './cakes/cakeReducer';
import rootReducer from './rootReducer'

const loggerMiddleware= (store) =>(next)=>(action)=>{
    console.log(action);
    next(action);
}

const middleware= applyMiddleware(loggerMiddleware);

const store= createStore(
    rootReducer,
    middleware
)

export default store
