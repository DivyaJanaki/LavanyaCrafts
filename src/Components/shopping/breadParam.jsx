import React, { useState , useEffect} from 'react';
import Breadcrumb from './breadcrumb';
import {withRouter} from 'react-router-dom';

const BreadParam = (props) => {
  const [crumbs, setCrumbs] = useState();

  const selected = crumb => {
    const temp=['Shop','Kids','Women',"Men","HomeLiving","Gifts"]; 
    const check=temp.filter(item=>item===crumb)
    if(check==0){
      props.history.push(`/`)
    }else{
      props.history.push(`/Shop?category=${check}`)
    }
  }

  useEffect(() => {
    // console.log("inside useEffect of child")
    if (typeof props.myParam === 'string'){
      setCrumbs(['Home',`${props.myParam}`]);
    }
    else{
      setCrumbs(['Home',`${props.myParam[0]}`,`${props.myParam[1]}`]);
    }
   
},[props])

  return (
    <div className="container-fluid crumb-container px-5">
     { crumbs && <Breadcrumb crumbs={ crumbs } selected={ selected }  /> }
    </div>
  );

}

export default withRouter(BreadParam);