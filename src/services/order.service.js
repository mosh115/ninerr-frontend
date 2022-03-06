
import { httpService } from './http.service.js'



export const orderService = {
    query,
    getById,
    save,
    remove,


}
window.cs = orderService;


function query(filterBy) {
    return httpService.get('order', filterBy)
}
function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}
function remove(orderId) {
    return httpService.remove('order', orderId)
}
function save(order) {

    if (order._id) {
        return httpService.put(`order/${order._id}`, order)
    } else {
        return httpService.post('order', order)
    }
}







