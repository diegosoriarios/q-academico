import { CHOOSE_LOGIN, IS_LOGGED } from '../actions/strings'

export function chooseLogin(state = false, action) {
    switch(action.type) {
        case CHOOSE_LOGIN:
            return action.itsChoosed
        default:
            return state
    }
}

export function isLogged(state = false, action) {
    switch(action.type) {
        case IS_LOGGED:
            return action.isLogged
        default:
            return state
    }
}