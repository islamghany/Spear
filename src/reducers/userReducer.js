import {USER__INFO} from '../actions//actionTypes.js';

export default(state={},action)=>{
	switch (action.type) {
		case USER__INFO:
		    return action.payload
		default:
			return state;
	}
}