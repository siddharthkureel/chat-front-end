const initialState = {
    chat: false,
    chatroom: null,
    userId: null,
    clientId: null,
    messages: []
}

export const loadchat = (state = initialState, action) => {
    if (action.type === 'CHAT') {
        return {
            ...state,
            chatroom: action.payload._id,
            userId: action.payload.userId,
            clientId: action.payload.clientId,
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