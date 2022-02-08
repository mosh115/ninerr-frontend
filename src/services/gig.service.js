
import { httpService } from './http.service.js'


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
    return httpService.get('gig', filterBy)
}
function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}
function remove(gigId) {
    return httpService.remove('gig', gigId)
}
function save(gig) {
    if (gig._id) {
        return httpService.put('gig', gig)
    } else {
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






