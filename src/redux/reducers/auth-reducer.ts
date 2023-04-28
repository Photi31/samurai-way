import {ActionType} from "../store";
import {headerAPI} from "../../api/api";
import {Dispatch} from "redux";

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

export const getAuthUser = () => {
    return (dispatch: Dispatch<ActionType>) => {
        headerAPI.get()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}