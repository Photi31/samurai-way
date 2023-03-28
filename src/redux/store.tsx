import {v1} from "uuid";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./reducers/dialogs-reducer";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {FollowAT, UnfollowAT, usersReducer} from "./reducers/users-reducer";
import {UserType} from "../components/Users/Users";

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
    users: Array<UserType>
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
        users: [
            {
                id: v1(),
                avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081784126494530.jpg',
                follow: true,
                fullName: 'Irina',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            },
            {
                id: v1(),
                avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081870150847539.jpg',
                follow: true,
                fullName: 'Sveta',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            },
            {
                id: v1(),
                avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650081862171055127.jpg',
                follow: true,
                fullName: 'Andrey',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            },
            {
                id: v1(),
                avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081776119167382.jpg',
                follow: true,
                fullName: 'Sanya',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            },
            {
                id: v1(),
                avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/16500819191563498.jpg',
                follow: true,
                fullName: 'Lexa',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            },
            {
                id: v1(),
                avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/165008296512717634.jpg',
                follow: true,
                fullName: 'Dima',
                status: 'My good status - I am boos',
                location: {
                    country: 'Russia',
                    city: 'Rybinsk'
                }
            }
        ]
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
        sidebarReducer(this._state.sidebar, action)
        usersReducer(this._state.users, action)
        this._callSubscriber(this._state)
    }
}




