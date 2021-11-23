
export default (state = {homes: [], compHomes: []}, action) => {
    switch (action.type) {
        case 'RECEIVE_HOMES':
            return {...state, homes: [...action.payload]};
        case 'RECEIVE_COMP_HOMES': 
            return {...state, compHomes: action.payload}
        default:
            return state;
    }
}