import React from 'react'
import './cssFiles/cake.css'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cakes/cakeAction'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamAction'

function BakeryShop (props) {
  return (
    <div class="cakeContainer">
        <h2>Available Cakes: {props.numCakes} </h2>
        <button class="buyCake cakeButton" onClick={props.buyCake}>Buy a cake</button>
        <button class="returnCake cakeButton" onClick={props.returnCake}>Return a cake</button>

        <h2>Available IceCreams: {props.numIceCream} </h2>
        <button class="buyCake cakeButton" onClick={props.buyIceCream}>Buy an iceCream</button>
        <button class="returnCake cakeButton" onClick={props.returnIceCream}>Return an iceCream</button>
        
    </div>
  )
}

const mapStateToProps = state => {
    return {
      numCakes: state.cake.numCakes,
      numIceCream: state.iceCream.numIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake()),
      returnCake: () => dispatch(returnCake()),
      buyIceCream: () => dispatch(buyIceCream()),
      returnIceCream: () => dispatch(returnIceCream())
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BakeryShop)
