import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";
import {products} from './products';
import Item from './Item';
import Cart from './Cart';
import Navbar from './Navbar.js';

function App() {
  const[cartitem,setCartitem] = useState([]);
  const addToCart = (input) => {
    const temp = products.filter((product) => {
      return product.id === input;
    })
    let flag = true;
    cartitem.map((cart) => {
      if(cart.id===temp[0].id)
          flag = false;
    })
    if(flag){
        setCartitem([...cartitem,temp[0]]);
        //console.log(cartitem);
    }
    // console.log(temp[0]);
  }
  const removeFromCart = (input) => {
    const temp = [];
    cartitem.map((cart)=> {
      if(cart.id!==input){
        temp.push(cart);
      }
    })
    setCartitem(temp);
  }

  return (
    <div className="App">
      <Router>
        <Navbar cartitem = {cartitem} />
        <Routes>
          <Route path="/" element = {
               <div className="shop">
                   <div className="shopTitle">
                      <h1>HAM SHOP</h1>
                   </div>
                   <div className="products">
                      <Item products = {products} addToCart={addToCart}/>
                   </div>
                </div>
           }/>
           <Route path="/cart" element={
                 <div>
                    <Cart removeFromCart={removeFromCart} cartitem={cartitem}/>
                 </div>
            }/>
        </Routes>
      </Router>
    </div>
   );
}


export default App;
