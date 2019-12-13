import {GET_USER} from '../actions//actionTypes.js';

export default(state={},action)=>{
	switch (action.type) {
		case GET_USER:
		    return action.payload
		default:
			return state;
	}
}