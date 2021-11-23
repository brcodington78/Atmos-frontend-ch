

export default (state = {lots: [], compLots: []}, action) => {
    switch (action.type) {
        case 'RECEIVE_LOTS':
            return {...state, lots: action.payload};
        case 'RECEIVE_COMP_LOTS':
            return {...state, compLots: action.payload}
        default:
            return state
    }
}