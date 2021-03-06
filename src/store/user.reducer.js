import { userService } from '../services/user.service.js'


const initialState = {

    user: userService.getLoggedinUser(),
    watchedUser: null
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
        case 'SET_WATCHED_USER':
            newState = { ...state, watchedUser: action.user }
            break;
        // case 'REMOVE_USER':
        //     newState = {
        //         ...state,
        //         users: state.users.filter(user => user._id !== action.userId) }
        //     break;

        default:
    }
    // For debug:
    // window.userState = newState;
    // console.log('State:', newState);
    return newState;

}
