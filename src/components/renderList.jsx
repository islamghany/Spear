import React from 'react';
import _ from 'lodash';

const RenderList=({user, clothes , type})=>{
    return _.map(user[type] , (item , i)=>{
    	return (<div className="mini"> hello</div>)
    })
} 
export default RenderList;