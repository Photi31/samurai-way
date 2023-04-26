import {v1} from "uuid";
import {
    AddMessageAT,
    dialogsReducer,
    UpdateNewMessageTextAT
} from "./reducers/dialogs-reducer";
import {
    AddPostAT,
    profileReducer,
    setUserProfileAT, setUserStatusAT,
    UpdateNewPostTextAT
} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {
    FollowAT,
    InitialStateType,
    SetAT,
    setCurrentPageAT,
    ToggleFollowingProgressAT,
    UnfollowAT,
    usersReducer
} from "./reducers/users-reducer";
import {ProfileType} from "../components/main/ProfilePage/Profile";
import {PostType} from "../components/main/Posts/Posts";
import {SetUserDataAT} from "./reducers/auth-reducer";

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
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
    status: string
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
export type ActionType = AddPostAT
                        | UpdateNewPostTextAT
                        | AddMessageAT
                        | UpdateNewMessageTextAT
                        | FollowAT
                        | UnfollowAT
                        | SetAT
                        | setCurrentPageAT
                        | setUserProfileAT
                        | SetUserDataAT
                        | ToggleFollowingProgressAT
                        | setUserStatusAT


export const store: StorePropsType = {
    _state: {
        profilePage: {
            profile: {
                aboutMe: '',
                contacts: {
                    facebook: null,
                    website: null,
                    vk: null,
                    twitter: null,
                    instagram: null,
                },
                fullName: '',
                lookingForAJob: true,
                lookingForAJobDescription: '',
                photos: {
                    small: null,
                    large: null
                },
                userId: 1
            },
            posts: [],
            textInArea: '',
            status: ''
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
            currentPage: 0,
            followingProgress: []
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




