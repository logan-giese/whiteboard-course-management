import { combineReducers } from 'redux'
import user from './user'

//const User = (state, id) => fromUser.getUser(state.user, id)
const allReducers = combineReducers({
    user
})

export default allReducers
