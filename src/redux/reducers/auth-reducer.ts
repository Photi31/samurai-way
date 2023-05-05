import {ActionType} from "../store";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>

const initState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => (
    {type: 'SET-USER-DATE', payload: {userId, email, login, isAuth}} as const
)

export const getAuthUser = () => {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuthUser())
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}