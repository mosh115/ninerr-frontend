import { userService } from "../services/user.service.js";
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from "../services/socket.service.js";

export function loadUser() {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_USER' })
            const user = await userService.getLoggedinUser()
            if (!user) return
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('UserActions: err in loadUser', err)
        }
        // finally {
        //     dispatch({ type: 'LOADING_DONE' })
        // }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}

export function updateUser(userToUpdate) {
    console.log('before action', userToUpdate);
    return async (dispatch) => {
        try {
            const user = await userService.update(userToUpdate)
            // console.log('user after action', user);
            dispatch({ type: 'SET_USER', user })

        } catch (err) {
            console.log('Cannot update user');

        }
    }
}

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            showSuccessMsg(`Welcome back ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
            console.log('Cannot login', err)
        }
    }
}


export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            showErrorMsg('Cannot signup')
            console.log('Cannot signup', err)
        }

    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
            dispatch({
                type: 'SET_ORDERS',
                orders: []
            })
            dispatch({
                type: 'SET_ORDER_FILTER',
                orderFilter: ''
            })
        } catch (err) {
            showErrorMsg('Cannot logout')
            console.log('Cannot logout', err)
        }
    }
}

export function loadAndWatchUser(userId) {
    return async (dispatch) => {
        try {
            const user = await userService.getById(userId);
            dispatch({ type: 'SET_WATCHED_USER', user })
            socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
            socketService.off(SOCKET_EVENT_USER_UPDATED)
            socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
                console.log('USER UPADTED FROM SOCKET');
                dispatch({ type: 'SET_WATCHED_USER', user })
            })
        } catch (err) {
            showErrorMsg('Cannot load user')
            console.log('Cannot load user', err)
        }
    }
}

