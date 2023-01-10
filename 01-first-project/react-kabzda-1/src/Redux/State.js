import {rerenderEntireTree} from '../Render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi. How are you?', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 11 },
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' }
        ],

        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your IT-KAMASUTRA ?' },
            { id: 3, message: 'Yo !!!' },
            { id: 4, message: 'Yo !!!' },
            { id: 5, message: 'Yo !!!' },
            { id: 6, message: 'Yo !!!' }
        ]
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state