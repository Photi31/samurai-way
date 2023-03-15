import {v1} from "uuid";

export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
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
    }
    sidebar: {}
}

type AddPostActionType = {
    type: 'ADD-POST'
    textNewPost: string
}
type UpdateNewPostTextActionType = {
    type: 'ADD-POST'
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
            }
        },
        sidebar: {}
    },
    _callSubscriber() {},
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                _id: v1(),
                title: `Post ${this._state.profilePage.posts.length + 1}`,
                descr: action.textNewPost
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.textInArea = ''
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.textInArea = action.newTextInArea
            this._callSubscriber(this._state)
        }
    }
}



