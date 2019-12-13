import {combineReducers} from 'redux';
import clothesReducer from './clothesReducer';
import loadingReducer from './loadingReducer';
import currentUserReducer from './currentUser';
import userReducer from './userReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    clothes:clothesReducer,
    loading:loadingReducer,
    currentUser :currentUserReducer,
    user:userReducer,
    toastr: toastrReducer
})

export default rootReducer;
