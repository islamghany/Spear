import React from 'react'
import {useSelector} from 'react-redux';
import RenderTop from './renderTop'
const Gallery=()=> {
	  const clothes = useSelector(state=> Object.values(state.clothes));
     const user = useSelector(state=> state.user); 
     
if(clothes)
    return (
        <section className="gallery1">

           <h1 className="mainHeading"> Top 5 Products <span>(Popular)</span></h1>               
          <RenderTop top="popular" user={user} clothes={clothes} />
          <h1 className="mainHeading mg-tp-5"> Top 5 Products <span>(Sale)</span></h1>               
          <RenderTop top="sale" user={user} clothes={clothes} />
           <h1 className="mainHeading mg-tp-5"> Top 5 Products <span>(Best-Selling)</span></h1>               
          <RenderTop top="selling" user={user} clothes={clothes} />

        </section>
    )
}

export default Gallery;
