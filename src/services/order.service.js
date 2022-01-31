
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'

// const STORAGE_KEY = 'order'
// const END_POINT = 'order'
const listeners = []


export const orderService = {
    query,
    getById,
    save,
    remove,
    subscribe

}
window.cs = orderService;


function query(filterBy) {
    // console.log('query in order service');    
    return httpService.get('order', filterBy)
}
function getById(orderId) {
    // console.log(orderId);    
    return httpService.get(`order/${orderId}`)
}
function remove(orderId) {
    return httpService.remove('order', orderId)
}
function save(order) {
    // console.log(order._id);
    if (order._id) {
        return httpService.put(`order/${order._id}`, order)
    } else {
        return httpService.post('order', order)
    }
}



function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersOrdersChanged(orders) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(orders))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(orders => {
            _notifySubscribersOrdersChanged(orders)
        })
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




