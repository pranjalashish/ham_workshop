import React from 'react'
import "./app.css";

const Cart = ({cartitem, removeFromCart}) => {
  return (
    <div className="cart">
       <div>
          <h1>Your Cart items</h1>
       </div>
       {cartitem.map((cart) =>{
           return (
              <div className="cartItem">
                 <img src={cart.productImage} alt={cart.productName} />
                 <div className="description">
                    <p>
                     <b>{cart.productName}</b>
                    </p>
                    <p>${cart.price}</p>
                 </div>
                 <div className="product">
                     <button className="removeFromCartBttn" onClick={() => removeFromCart(cart.id)}>Remove from Cart</button>
                 </div>
              </div>
           );
       })}
    </div>
  )
}

export default Cart