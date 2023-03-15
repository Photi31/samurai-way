import {v1} from "uuid";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type StatePropsType = {
    profilePage: {
        posts: {
            _id: string
            title: string
            descr: string
        }[]
        textInArea: string
    }
    dialogsPage: {
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
    sidebar: {}
}

export type ActionType = AddPostActionType
                        | UpdateNewPostTextActionType
                        | AddMessageActionType
                        | UpdateNewMessageTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
    textNewPost: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newTextInArea: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    textNewMessage: string
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newTextInArea: string
}

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
        sidebar: {}
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
        if (action.type === ADD_POST) {
            let newPost = {
                _id: v1(),
                title: `Post ${this._state.profilePage.posts.length + 1}`,
                descr: action.textNewPost
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.textInArea = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.textInArea = action.newTextInArea
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                _id: v1(),
                message: `${action.textNewMessage}`
            }
            this._state.dialogsPage.dialogs.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newTextInArea
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = (textNewPost: string): AddPostActionType => {
    return {
        type: ADD_POST,
        textNewPost: textNewPost
    }
}
export const updateNewPostTextActionCreator = (newTextInArea: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTextInArea: newTextInArea
    }
}
export const addMessageActionCreator = (textNewMessage: string): AddMessageActionType => {
    return {
        type: ADD_MESSAGE,
        textNewMessage: textNewMessage
    }
}
export const updateNewMessageTextActionCreator = (newTextInArea: string): UpdateNewMessageTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextInArea: newTextInArea
    }
}

