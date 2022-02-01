import React, { useContext } from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../Home/home.css'

const SingleItem =(product) => {

    const {name,image,price,id,history}= product;
   

return(
    <div className="col-md-4">
        <div className="card my-card" id={id}>
            <img src={image} className="card-img-top" alt="product"/>
            <button className="wish"><i className="far fa-heart"></i></button>
            {/* <Link id="view" to={`/product/${id}`} >VIEW DETAILS</Link> */}
            <button id="view" onClick={()=>history.push(`/product/${id}`)} >VIEW DETAILS</button>
            <div className="card-body">
                <span className="separator inline-block"></span>
                <br/>
                <p className="card-title px-1">{name}</p>
                <p className="card-text px-2">₹ {price}</p>
            </div>
        </div>
    </div>
)
}

export default withRouter(SingleItem);