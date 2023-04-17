import {ActionType} from "../store";

const SET_USER_DATE = 'SET-USER-DATE'

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetUserDataAT = {
    type: 'SET-USER-DATE'
    data: {
        userId: string
        email: string
        login: string
    }
}

const initState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string): SetUserDataAT => ({
    type: SET_USER_DATE, data: {userId, email, login}
})