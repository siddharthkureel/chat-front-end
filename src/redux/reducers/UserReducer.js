const initialState = {
    loggedIn: false,
    user: {},
    clients: []
}

export const signin = (state = initialState, action) => {
    if (action.type === 'SIGNED_IN') {
        return { ...state, loggedIn: true, user: {...action.payload.user}, clients: [...action.payload.userClients] }
    }
    return state;
}