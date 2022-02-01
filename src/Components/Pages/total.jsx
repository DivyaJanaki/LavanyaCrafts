import React from 'react';
import { withRouter } from 'react-router-dom';

const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className="total p-5">
      <div>
        <p className="cart-name p-2">Total Items: {itemCount}</p>
        <p className="cart-name p-2">{`Total: ₹${total}`}</p>
      </div>
      <div className="pt-3">
        <button className='btn btn-outline-dark my-btn me-2' 
          onClick={() => history.push('/checkout')}>CHECKOUT</button>
        <button className='btn btn-outline-dark my-btn' onClick={() => clearCart()}>CLEAR</button>  
      </div>
    </div>
  );
}

export default withRouter(Total);