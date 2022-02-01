import React, { useContext } from 'react';
import {ProductsContext} from '../Context/products-context';
import SingleItem from '../Items/singleItem'
import {useHistory} from 'react-router-dom'

const Trending =() => {
  const history = useHistory();
  const {products} = useContext(ProductsContext);
  const productItems = products.filter((product,i) => i<3).map(product =>(
    <SingleItem {...product} key={product.id}/>
  ));

  const routeChange = () =>{ 
    let path = `/Shop`; 
    history.push(path);
  }
  
    return(
        <main className="container-fluid pt-5 pb-5" id="trend-section">
        <div className="row px-4">
          <div className="col-md-8">
            <span className="banner-title inline-block">Trending & New</span>&nbsp;&nbsp;&nbsp;<span className="separator inline-block"></span>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-outline-dark my-btn" onClick={routeChange}>SEE ALL</button>
          </div>
        </div>
        <div className="row g-5 px-4 pt-3">
           {
              productItems
           }
        </div>
      </main>
    )
}

export default Trending;