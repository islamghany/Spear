import {FETCH_CLOTHES} from '../actions/actionTypes';
import _ from 'lodash';

export default(state={},action)=>{
    switch (action.type){
        case FETCH_CLOTHES:
            return {...state,..._.mapKeys(action.payload, 'id')};
        default : return state;    
    }  
}