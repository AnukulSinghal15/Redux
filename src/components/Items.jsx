import React from 'react'
import './cssFiles/bakeryShop.css'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cakes/cakeAction'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamAction'
import { useSelector, useDispatch } from 'react-redux'


function BakeryShop (props) {

  return (
    <div class="bakeryShopContainer">
      <h1>{props.itemName}</h1>
      <div class="cakeContainer">
        <h2>Available cakes: {props.numCakes} </h2>
        <button class="buyCake cakeButton" onClick={props.buyCake}>Buy a cake</button>
        <button class="returnCake cakeButton" onClick={props.returnCake}>Return a cake</button>
      </div>

      <div class= "iceCreamContainer">
        <h2>Available IceCreams: {props.numIceCream} </h2>
        <button class="buyCake cakeButton" onClick={props.buyIceCream}>Buy an iceCream</button>
        <button class="returnCake cakeButton" onClick={props.returnIceCream}>Return an iceCream</button>
      </div>

      <div class= "iceCreamContainer">
        <h2>Available Item: {props.item} </h2>
        <button class="buyCake cakeButton" onClick={props.buy}>Buy an {props.itemName}</button>
        <button class="returnCake cakeButton" onClick={props.return}>Return an {props.itemName}</button>
      </div>
        
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
  const itemState= ownProps.itemName="iceCream" ? state.cake.numIceCream : state.iceCream.numCakes
    return {
      numCakes: state.cake.numCakes,
      numIceCream: state.iceCream.numIceCream,
      item: itemState,
      itemName: ownProps.itemName
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  const dispatchBuy=  ownProps.itemName="cake" ? ()=> dispatch(buyCake()) : dispatch(buyIceCream())
  const dispatchReturn=  ownProps.itemName="cake" ? ()=> dispatch(returnCake()) : dispatch(returnIceCream())

    return {
      buyCake: () => dispatch(buyCake()),
      returnCake: () => dispatch(returnCake()),
  
      buyIceCream: () => dispatch(buyIceCream()),
      returnIceCream: () => dispatch(returnIceCream()),

      buy : dispatchBuy,
      return : dispatchReturn
    }
}
  
export default connect(
   mapStateToProps,
    mapDispatchToProps
  )(BakeryShop)
