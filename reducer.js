

// The below code is what the data layer initially looks like. No user
export const initialState = {
    user: null
}

// After setting up the data layer, we can dispatch actions inside of the data layer. Here, we're dispatching an action that sets the user (aka SET_USER)
export const actionTypes = {
    SET_USER: "SET_USER"
}


// The below code is listening for actions, and we're telling the code "if you've received the Set_USER action, we want to return what that new data will look like (...state), and set the user to be equal to the action.user we just dispatched, instead of user:null"
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer