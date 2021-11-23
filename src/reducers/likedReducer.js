
//will store ids of liked homes and lots

export default (state = {likedHomes: [], likedLots: []}, action) => {
    switch (action.type) {
        case 'LIKE_HOME': 
            return {...state, likedHomes: [...state.likedHomes, action.payload]}
        case 'UNLIKE_HOME':
            return {...state, likedHomes: [...state.likedHomes.filter(homeId => homeId !== action.payload )]}
        case 'LIKE_LOT':
            return {...state, likedLots: [...state.likedLots, action.payload]}
        case 'UNLIKE_LOT':
            return {...state, likedLots: [...state.likedLots.filter(lotId => lotId !== action.payload)]}
        default:
            return state;
    }
}