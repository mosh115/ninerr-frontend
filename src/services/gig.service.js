
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'

// const STORAGE_KEY = 'gig'
// const END_POINT = 'gig'
const listeners = []


export const gigService = {
    query,
    getById,
    save,
    remove,
    subscribe

}
window.cs = gigService;


function query(filterBy) {
    // console.log('query in gig service');
    // return storageService.query(STORAGE_KEY)
    return httpService.get('gig', filterBy)
}
function getById(gigId) {
    // console.log(gigId);
    // return storageService.get(STORAGE_KEY, gigId)
    return httpService.get(`gig/${gigId}`)
}
function remove(gigId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    // return storageService.remove(STORAGE_KEY, gigId)
    return httpService.remove('gig', gigId)
}
function save(gig) {
    if (gig._id) {
        // return storageService.put(STORAGE_KEY, gig)
        return httpService.put('gig', gig)
    } else {
        // gig.owner = userService.getLoggedinUser()
        // return storageService.post(STORAGE_KEY, gig)
        return httpService.post('gig', gig)
    }
}



function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(gigs) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(gigs))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(gigs => {
            _notifySubscribersGigsChanged(gigs)
        })
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




