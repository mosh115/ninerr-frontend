import { orderService } from "../services/order.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { socketService } from "../services/socket.service.js";

export function loadOrders() {
    return async (dispatch, getState) => {
        try {
            const { orderFilter } = getState().orderModule
            console.log('orderAction filter', orderFilter);
            if (!orderFilter) return
            const orders = await orderService.query(orderFilter)
            dispatch({ type: 'SET_ORDERS', orders })

        } catch (err) {
            console.log('Cannot load orders', err);
        }
    }
}


// orderService.subscribe((orders) => {
//     console.log('Got notified');
//     dispatch({
//         type: 'SET_ORDERS',
//         orders
//     })
// })


export function removeOrder(orderId) {

    return async (dispatch) => {
        try {
            await orderService.remove(orderId)
            dispatch({ type: 'REMOVE_ORDER', orderId })

            // dispatch({ type: 'SET_MSG', msg: { txt: 'removed order', type: 'success' } })

        } catch (err) {
            console.log('Cannot remove order', err);
        }
    }
}

export function addOrder(orderToAdd) {

    return async (dispatch) => {
        try {
            const order = await orderService.save(orderToAdd)
            dispatch({ type: 'ADD_ORDER', order })
            showSuccessMsg('Order created')
            socketService.emit('add order', orderToAdd)
            // dispatch({ type: 'SET_MSG', msg: { txt: 'Order created', type: 'success' } })

        } catch (err) {
            console.log('Cannot add order');
        }
    }
}


export function updateOrder(orderToUpdate) {

    return async (dispatch) => {
        try {
            const order = await orderService.save(orderToUpdate)
            dispatch({ type: 'UPDATE_ORDER', order })

        } catch (err) {
            console.log('Cannot update order');

        }
    }
}

export function setOrderFilter(orderFilter) {
    return (dispatch) => {
        dispatch({ type: 'SET_ORDER_FILTER', orderFilter })

    }
}


export function onSetPage(page) {
    return (dispatch) => {

        dispatch({
            type: 'SET_PAGE',
            page: page
        })

    }
}



// export function checkout() {
//     return async (dispatch, getState) => {
//         try {
//             const state = getState()
//             const total = state.orderModule.ordert.reduce((acc, order) => acc + order.price, 0)
//             const score = await userService.changeScore(-total)
//             dispatch({ type: 'SET_SCORE', score })
//             dispatch({ type: 'CLEAR_ORDERT' })
//             showSuccessMsg('Charged you: $' + total.toLocaleString())


//         } catch (err) {
//             showErrorMsg('Cannot checkout, login first')
//             console.log('OrderActions: err in checkout', err)
//         }
//     }
// }



// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveOrderOptimistic(orderId) {

//     return (dispatch, getState) => {

//         dispatch({
//             type: 'REMOVE_ORDER',
//             orderId
//         })
//         showSuccessMsg('Order removed')

//         orderService.remove(orderId)
//             .then(() => {
//                 console.log('Server Reported - Deleted Succesfully');
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot remove order')
//                 console.log('Cannot load orders', err)
//                 dispatch({
//                     type: 'UNDO_REMOVE_ORDER',
//                 })
//             })
//     }
// }