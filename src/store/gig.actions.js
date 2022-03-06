import { gigService } from "../services/gig.service.js";

export function loadGigs() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().gigModule
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



