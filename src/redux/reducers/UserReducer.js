const initialState = {
    loggedIn: false,
    user: {},
    clients: []
}

export const signin = (state = initialState, action) => {
    if (action.type === 'SIGNED_IN') {
        return { ...state, loggedIn: true, user: action.payload }
    }
    if (action.type === 'GET_CLIENTS') {
        return { ...state, clients: action.payload }
    }
    return state;
}