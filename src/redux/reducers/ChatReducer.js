const initialState = {
    chat: false,
    chatroom: null,
    userA: null,
    userB: null,
    messages: []
}

export const loadchat = (state = initialState, action) => {
    if (action.type === 'CHAT') {
        return {
            ...state,
            chatroom: action.payload._id,
            userA: action.payload.userA,
            userB: action.payload.userB,
            messages: action.payload.messages,
            chat: true
        }
    }
    if (action.type === 'SEND_MESSAGE') {
        return {
            ...state,
            messages: action.payload.messages,
        }
    }
    if (action.type === 'MESSAGE') {
        return {
            ...state,
            messages: state.messages.concat(action.payload),
        }
    }
    return state;
}