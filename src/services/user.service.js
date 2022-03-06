
import { utilService } from './util.service'
import { httpService } from './http.service'
import { socketService, SOCKET_EMIT_LOGIN } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,

}



function getUsers() {
    return httpService.get(`user`)
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user;
}
function remove(userId) {

    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    const newUser = await httpService.put(`user/${user._id}`, user)
    if (getLoggedinUser()._id === newUser._id) _saveLocalUser(newUser)
    return newUser;
}

async function login(userCred) {

    const user = await httpService.post('auth/login', userCred)
    socketService.emit(SOCKET_EMIT_LOGIN, user._id);
    if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    userCred.createdAt = Date.now()
    userCred.avatarColor = _randomAvatarColor();

    const user = await httpService.post('auth/signup', userCred)
    socketService.emit(SOCKET_EMIT_LOGIN, user._id);
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

const _randomAvatarColor = () => {
    const colors = ['#0F2347', '#1C3F6E', '#2E67A0', '#5AACCF', '#80C271'];
    let randIdx = utilService.getRandomIntInclusive(0, colors.length - 1);
    return colors[randIdx];
}
