import React from 'react'
import './cssFiles/bakeryShop.css'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cakes/cakeAction'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamAction'
import { useSelector, useDispatch } from 'react-redux'


function BakeryShop (props) {

  // const numCakes= useSelector(state => state.cake.count);
  // const numIceCreams= useSelector(state=> state.iceCream.count);

  //  const dispatch= useDispatch()

  return (
    <div>
      <h1>Hi! {props.username}</h1>

      <div className="bakeryShopContainer">
        
        <div className="cakeContainer">
          <h2>Available cakes: {props.numCakes} </h2>
          <button className="buyCake cakeButton" onClick={props.buyCakeHandler}>Buy a cake</button>
          {/* <button className="buyCake cakeButton" onClick={()=> dispatch(buyCake())}>Buy a cake</button> */}
          <button className="returnCake cakeButton" onClick={props.returnCake}>Return a cake</button>
        </div>

        <div className= "iceCreamContainer">
          <h2>Available IceCreams: {props.numIceCream} </h2>
          <button className="buyCake cakeButton" onClick={props.buyIceCream}>Buy an iceCream</button>
          <button className="returnCake cakeButton" onClick={props.returnIceCream}>Return an iceCream</button>
        </div>  
          
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    //const name= ownProps.username;
    return {
      numCakes: state.cake.count,
      numIceCream: state.iceCream.count,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
      buyCakeHandler: () => dispatch(buyCake()),
      returnCake: () => dispatch(returnCake()),
  
      buyIceCream: () => dispatch(buyIceCream()),
      returnIceCream: () => dispatch(returnIceCream()),
    }
}

//export default BakeryShop
  
export default connect(
   mapStateToProps,
    mapDispatchToProps
  )(BakeryShop)
