import { CHOOSE_LOGIN, IS_LOGGED } from './strings'

export function chooseLogin(bool) {
    return {
        type: CHOOSE_LOGIN,
        itsChoosed: bool
    }
}

export function isLogged(bool) {
    return {
        type: IS_LOGGED,
        isLogged: bool
    }
}