const user = {
    name: 'Jesus'
}
const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
            }
            default:
                return state

    }
}

export default authReducer