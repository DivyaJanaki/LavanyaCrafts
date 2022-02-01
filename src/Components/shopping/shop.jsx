import React, { useState, useEffect ,useRef, useContext}  from 'react';
import SingleItem from '../Items/singleItem'
import Layout from '../../../src/Layout'
import './shop.css'
import BreadParam from './breadParam'
import {ProductsContext} from '../Context/products-context';


const url = "https://lavanyacraft.herokuapp.com/Shop";

const Shop =(props) => {
    const [shopdata, setShopData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [title,setTitle]=useState('Shop');
    const reference = useRef();
    const titlereference = useRef('Shop');
    const {products} = useContext(ProductsContext);
 

    const allProducts= shopdata!=null && shopdata.length > 0 ? shopdata.map(product=>(
        <SingleItem {...product} key={product.id}/>
    )): <center><h3> No results</h3></center>

 
    useEffect(() => {
        let abc='';
        if(props.location.search){
            const value=(props.location.search).split('=')[1];
            let param=(props.location.search).split('=')[0].split('?')[1]
            if(param=='category'){
           abc=url+props.location.search;
           setTitle(value);
           reference.current=abc;
           titlereference.current=`${value}`;
           fetch(reference.current, {method:'GET'})
           .then((res) => res.json())
           .then((data) => {
               setShopData(data)
               setLoading(true)
           })
           .catch((err) =>console.error(err))
            }else{
            const productItems = products.filter((product) => product.name.toLowerCase().indexOf(value.toLowerCase())>-1)
            setShopData(productItems);
            setLoading(true)
            setTitle('Shop');
            titlereference.current='Shop';
            }
        }
        else{
            reference.current=url;
            setTitle('Shop');
            titlereference.current='Shop';
            fetch(reference.current, {method:'GET'})
            .then((res) => res.json())
            .then((data) => {
                setShopData(data)
                setLoading(true)
            })
            .catch((err) =>console.error(err))
        }
       
    },[props,reference,titlereference])

   
return(
<Layout>
    <BreadParam myParam={titlereference.current} />
    <div className="container-fluid">
        <div className="row"  id="my-banner">
            <div className="col-md-12 text-center">
            <span className="separator inline-block"></span>
                <span className="banner-title inline-block pb-5 pt-3">{title}</span>
                <span className="separator inline-block"></span>
            </div>
        </div>
        <div className="row g-4 pb-3" id="my-container">
            {loading ? allProducts : 
            <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-secondary" style={{width:'5rem', height:'5rem'}} role="status">
            <span className="sr-only">Loading...</span>
            </div>
            </div>}
        </div>
    </div>
</Layout>
)

}
export default Shop;