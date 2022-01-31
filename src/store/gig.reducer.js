const initialState = {
    gigs: [],
    filterBy: {
        title: '',
        tags: '',
        userId: ''
    },
    page: null
}
export function gigReducer(state = initialState, action) {
    var newState = state
    var gigs
    // var page

    switch (action.type) {
        case 'SET_PAGE':
            newState = { ...state, page: action.page }
            break
        case 'SET_GIGS':
            newState = { ...state, gigs: action.gigs }
            break
        case 'REMOVE_GIG':
            const lastRemovedGig = state.gigs.find(gig => gig._id === action.gigId)
            gigs = state.gigs.filter(gig => gig._id !== action.gigId)
            newState = { ...state, gigs, lastRemovedGig }
            break
        case 'ADD_GIG':
            newState = { ...state, gigs: [...state.gigs, action.gig] }
            break
        case 'UPDATE_GIG':
            gigs = state.gigs.map(gig => (gig._id === action.gig._id) ? action.gig : gig)
            newState = { ...state, gigs }
            break
        case 'SET_FILTER':
            return { ...state, filterBy: action.filterBy }
        default:
            newState = state


    }
    // For debug:
    // window.gigState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
