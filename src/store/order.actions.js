import { orderService } from "../services/order.service.js";

import { showSuccessMsg } from '../services/event-bus.service.js'
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

export function removeOrder(orderId) {

    return async (dispatch) => {
        try {
            await orderService.remove(orderId)
            dispatch({ type: 'REMOVE_ORDER', orderId })

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

