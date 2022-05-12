import { combineReducers }  from 'redux';
import * as allReducers from '../_reducers'

export default combineReducers({
    ...allReducers
})