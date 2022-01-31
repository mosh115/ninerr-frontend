import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadGigs() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().gigModule
            // console.log('filter', filterBy);
            const gigs = await gigService.query(filterBy)
            dispatch({ type: 'SET_GIGS', gigs })
            return gigs;

        } catch (err) {
            console.log('Cannot load gigs', err);
        }
    }
}


export function removeGig(gigId) {

    return async (dispatch) => {
        try {
            await gigService.remove(gigId)
            dispatch({ type: 'REMOVE_GIG', gigId })
            // dispatch({ type: 'SET_MSG', msg: { txt: 'removed gig', type: 'success' } })

        } catch (err) {
            console.log('Cannot remove gig', err);
        }
    }
}

export function addGig(gigToAdd) {

    return async (dispatch) => {
        try {
            const gig = await gigService.save(gigToAdd)
            dispatch({ type: 'ADD_GIG', gig })

        } catch (err) {
            console.log('Cannot add gig');
        }
    }
}


export function updateGig(gigToUpdate) {

    return async (dispatch) => {
        try {
            const gig = await gigService.save(gigToUpdate)
            dispatch({ type: 'UPDATE_GIG', gig })

        } catch (err) {
            console.log('Cannot update gig');

        }
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER', filterBy })

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


// gigService.subscribe((gigs) => {
//     console.log('Got notified');
//     dispatch({
//         type: 'SET_GIGS',
//         gigs
//     })
// })



// export function checkout() {
//     return async (dispatch, getState) => {
//         try {
//             const state = getState()
//             const total = state.gigModule.gigt.reduce((acc, gig) => acc + gig.price, 0)
//             const score = await userService.changeScore(-total)
//             dispatch({ type: 'SET_SCORE', score })
//             dispatch({ type: 'CLEAR_GIGT' })
//             showSuccessMsg('Charged you: $' + total.toLocaleString())


//         } catch (err) {
//             showErrorMsg('Cannot checkout, login first')
//             console.log('GigActions: err in checkout', err)
//         }
//     }
// }



// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveGigOptimistic(gigId) {

//     return (dispatch, getState) => {

//         dispatch({
//             type: 'REMOVE_GIG',
//             gigId
//         })
//         showSuccessMsg('Gig removed')

//         gigService.remove(gigId)
//             .then(() => {
//                 console.log('Server Reported - Deleted Succesfully');
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot remove gig')
//                 console.log('Cannot load gigs', err)
//                 dispatch({
//                     type: 'UNDO_REMOVE_GIG',
//                 })
//             })
//     }
// }