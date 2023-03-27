import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

export const store = createStore(rootReducer)