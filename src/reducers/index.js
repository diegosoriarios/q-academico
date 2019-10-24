import { combineReducers } from 'redux'
import { chooseLogin, isLogged } from './actions'

export default combineReducers({
    chooseLogin,
    isLogged
})