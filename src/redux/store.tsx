import {v1} from "uuid";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./reducers/dialogs-reducer";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {FollowAT, InitialStateType, SetAT, setCurrentPageAT, UnfollowAT, usersReducer} from "./reducers/users-reducer";

export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    sidebar: SidebarPropsType
    usersPage: InitialStateType
}
export type ProfilePagePropsType = {
    posts: {
        _id: string
        title: string
        descr: string
    }[]
    textInArea: string
}
export type DialogsPagePropsType = {
    dialogs: {
        dialogsPerson: {
            _id: string
            name: string
        }[]
        messages: {
            _id: string
            message: string
        }[]
    }
    newMessageText: string
}
export type SidebarPropsType = {}
export type ActionType = AddPostActionType
                        | UpdateNewPostTextActionType
                        | AddMessageActionType
                        | UpdateNewMessageTextActionType
                        | FollowAT
                        | UnfollowAT
                        | SetAT
                        | setCurrentPageAT


export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
                {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
                {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
            ],
            textInArea: ''
        },
        dialogsPage: {
            dialogs: {
                dialogsPerson: [
                    {_id: v1(), name: 'Mama'},
                    {_id: v1(), name: 'Alex'},
                    {_id: v1(), name: 'Dima'},
                    {_id: v1(), name: 'Leha'},
                    {_id: v1(), name: 'Sasha'},
                    {_id: v1(), name: 'IT-Incubator'}
                ],
                messages: [
                    {_id: v1(), message: 'first message'},
                    {_id: v1(), message: 'second message'},
                    {_id: v1(), message: 'third message'},
                    {_id: v1(), message: 'first message'},
                    {_id: v1(), message: 'second message'},
                    {_id: v1(), message: 'third message'},
                    {_id: v1(), message: 'Sasha'}
                ]
            },
            newMessageText: ''
        },
        sidebar: {},
        usersPage: {
            users: [],
            pageSize: 0,
            totalUsersCount: 0,
            currentPage: 0
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        usersReducer(this._state.usersPage, action)
        sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}




