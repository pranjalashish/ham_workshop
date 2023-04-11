import React from 'react'

const Item = ({products, addToCart, setCartitem}) => {
  const{id,productName,price,productImage} = products;
  return(
    products.map((product) => {
       return (
         <div className="product">
           <img src={product.productImage} alt={product.productName} />
             <div className="description">
              <p>
                <b>{product.productName}</b>
              </p>
              <p>${product.price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
              Add To Cart
            </button>
        </div>
       );
    })
  );
}

export default Item