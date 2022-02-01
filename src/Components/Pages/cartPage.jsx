import React, { useContext } from 'react';
import { CartContext } from '../../Components/Context/cart-context';
import Layout from '../../../src/Layout';
import CartItem from './cart-items';
import Total from './total'
import './cartPage.css';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct }
  return (
    <Layout>
      <center>
        <h1 className="banner-title mt-5">Cart Summary</h1>
        {
          cartItems.length === 0 ? <div className='empty-cart'>Your Cart is empty</div>
          : 
        <>
          <div className='container-fluid'>
            <div className="container pb-5 pt-5">
              <div className="row">
                <div className="col-md-8">
                  {
                    cartItems.map(item  => <CartItem { ...item } key={item.id} { ...funcs }/>)
                  }
                </div>
                <div className="col-md-4">
                  <Total itemCount={itemCount} total={total} clearCart={clearCart} />
                </div>
              </div>  
            </div>
          </div>
        </>
        }
      </center>
    </Layout>
  );
}

export default CartPage;