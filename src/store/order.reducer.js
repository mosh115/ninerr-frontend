

const initialState = {
    orders: [],
    orderFilter: {
        sellerId: '',
    },

}
export function orderReducer(state = initialState, action) {
    let newState = state
    let orders



    switch (action.type) {
        case 'SET_PAGE':
            newState = { ...state, page: action.page }
            break
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
        case 'REMOVE_ORDER':
            const lastRemovedOrder = state.orders.find(order => order._id === action.orderId)
            orders = state.orders.filter(order => order._id !== action.orderId)
            newState = { ...state, orders, lastRemovedOrder }
            break
        case 'ADD_ORDER':
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        case 'UPDATE_ORDER':
            orders = state.orders.map(order => (order._id === action.order._id) ? action.order : order)
            newState = { ...state, orders }
            break
        case 'SET_ORDER_FILTER':
            return { ...state, orderFilter: action.orderFilter }
        default:
            newState = state


    }

    return newState

}
