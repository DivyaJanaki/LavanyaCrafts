import React,{ useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/cart-context'

const Navbar =(history) => {

    const myCollapse = () =>{
      window.$('#navbarNav').toggle();
    }
    
    const {itemCount}=useContext(CartContext);
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
         onClick={myCollapse}>
                         <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarNav">     
                <ul className="navbar-nav text-center mx-auto">
                    <li className="nav-item"> <Link className="nav-link" to="/Shop">Shop </Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/Shop?category=Kids"> Kids </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Shop?category=Men"> Men </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Shop?category=Women"> Women  </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Shop?category=HomeLiving">Home & Living</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Shop?category=Gifts">Gifts</Link></li>
                </ul> 
            </div>
            
            <div className="shoppingBag pe-5">
                <Link to="/Cart">
                    <span className="fa fa-shopping-bag icon fa-2x"></span>
                    {itemCount > 0 ? <span id="count" className="position-absolute bottom-0 translate-middle badge rounded-pill bg-danger">{itemCount}</span> : null}
                </Link>
                </div> 
           
         </div>   
            
    </nav>  
  
    );
}

export default withRouter(Navbar);