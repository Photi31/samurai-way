import {v1} from "uuid";

let rerenderEntireTree = (state: StatePropsType) => {}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
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

export const state = {
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
}

export const addPost = (textNewPost: string) => {
    let newPost = {
        _id: v1(),
        title: `Post ${state.profilePage.posts.length + 1}`,
        descr: textNewPost
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.textInArea = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newTextInArea: string) => {
    state.profilePage.textInArea = newTextInArea
    rerenderEntireTree(state)
}

