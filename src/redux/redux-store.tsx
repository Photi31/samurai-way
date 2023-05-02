import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))