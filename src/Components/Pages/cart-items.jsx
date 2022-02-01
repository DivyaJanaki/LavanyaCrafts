import React from 'react';
import './cartPage.css'

const CartItem = (props) => {
  const { name, image, price, quantity, id, description, increase, decrease, removeProduct} = props;
  const product = { name, image, price, quantity, id, description };

  return (
    <div className="row orderItems mb-3 pt-3" key={id}>
        <div className="col-md-2">
            <img src={image} alt={name} className="cart-img"/>
        </div>
        <div className="col-md-5">
            <p className="cart-name">{name}</p>
            <p className="cart-price">₹{price}</p>
        </div>
        <div className="col-md-2 justify-content-center">
        <label id="qty" className="m-1" type="text" disabled>{`Quantity: ${quantity}`}</label>
        </div>
        <div className="col-md-3">
            <button className="btn btn-outline-dark p-2 m-2" onClick={() => increase(product)}>
                <i className="fas fa-plus" ></i>
            </button>
            {
            quantity === 1 && 
            <button className="btn btn-outline-danger p-2 m-2"  onClick={() => removeProduct(product)}>
            <i className="fas fa-trash-alt"></i>
            </button>
            }
            {
            quantity > 1 && 
            <button className="btn btn-outline-dark p-2 m-2" onClick={() => decrease(product)}>
            <i className="fas fa-minus"></i>
            </button>
            }
        </div>     
    </div>
)
}

export default CartItem;