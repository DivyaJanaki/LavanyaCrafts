import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import ProductsContextProvider from './Components/Context/products-context'
import CartContextProvider from './Components/Context/cart-context'

ReactDOM.render(
  <BrowserRouter>
  <ProductsContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </ProductsContextProvider>
  </BrowserRouter>,document.getElementById('root')
    
);


