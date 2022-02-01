import React, { useContext, useState, useEffect} from 'react';
import {isInCart} from '../../helpers'
import {CartContext} from '../Context/cart-context'
import { ProductsContext } from '../Context/products-context';
import './itemDetails.css'
import BreadParam from './breadParam';
import {withRouter,useHistory} from 'react-router-dom';
import Layout from '../../../src/Layout'

const url = "https://lavanyacraft.herokuapp.com/product";

const  ItemDetails = ({match}) => {

    const {id}=match.params
    const pUrl=url+"/"+id;
    const [product,setProduct]=useState([]);
    const { products } = useContext(ProductsContext);
    const history= useHistory();
    const { addProduct, cartItems, increase } = useContext(CartContext);

    useEffect(() => {
        fetch(pUrl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setProduct(...data)
        })
        .catch((err) =>console.error(err))
    }, [])

    const gotoCart = () => {
        history.push(`/Cart`);
    }

    // if (!product) { return null }
    if(product){
        const { image, name, price, description, category } = product;
        console.log(product);
    const itemInCart = isInCart(product, cartItems);
    // return product.map((item) => {
    return (  
    <Layout>
        <BreadParam myParam={[category,name]}/>
        <div className="container-fluid px-4 pt-5 pb-5" id="details-container">
            <div className="row g-3">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img className="detail-img" src={image}/>
                </div>
                <div className="col-md-6">
                    <p id="authentic">| AUTHENTIC CRAFT. CREATED IN INDIA.</p>
                    <p className="banner-title">{name}</p>
                    <p className="banner-text">{description}</p>
                    <p className="banner-text"><b>Price: &#8377;{price}</b></p>
                    <div className="d-flex justify-content-center">
                    {
                    !itemInCart &&
                    <button className="add-btn btn btn-outline-dark me-4" onClick={() => addProduct(product)}>Add to Cart</button>   
                     }
                    {
                    itemInCart &&
                    <button className="add-btn btn btn-outline-dark me-4"  onClick={()=> increase(product)}>Add More</button>   
                    }
                    <button className="add-btn btn btn-outline-warning" onClick={gotoCart}>View my Cart</button>

                    </div>    
                  </div>
            </div>
        </div>
    </Layout>    
    )};


}

export default withRouter(ItemDetails);