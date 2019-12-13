import {CLOTHES__STATUS , USER__STATUS} from '../actions/actionTypes';

export default(state={},action)=>{
    switch(action.type){
        case CLOTHES__STATUS:
            return {...state ,clothes:action.payload};
         case    USER__STATUS:
         return  {...state , user:action.payload}	
        default : return state;    
    }
}