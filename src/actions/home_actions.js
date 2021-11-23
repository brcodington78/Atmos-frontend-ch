import {createAction} from '@reduxjs/toolkit';
import { API } from '../API/api';



const receiveHomes = createAction('RECEIVE_HOMES');
const likeHome = createAction('LIKE_HOME');
const unlikeHome = createAction('UNLIKE_HOME');
const receiveCompLots = createAction('RECEIVE_COMP_LOTS');



//fetches all homes and places them into state
export const fetchHomes = () => async dispatch => {
    try {
        let homes = await API.getHomePlans()
        let action = receiveHomes(homes)
        dispatch(action)
        
        
    } catch (err) {
        console.log(err)
    }
}


export const addHomeToLiked = (homeId) => async dispatch => {
    try {
        dispatch(likeHome(homeId));
    } catch (err) {
        console.log(err)
    }
} 

export const removeHomeFromLiked = (homeId) => async dispatch => {
    try {
        dispatch(unlikeHome(homeId))
    } catch (err) {
        console.log(err)
    }
}

export const fetchCompatibleLots = (homeId) => async dispatch => {
    
    const sortHomeCombos = async (homeId) => {
        let lotIds = [];
        let combos = await API.getCombinations();
        
        let lots = await API.getLots();

        for (let combo of combos) {
            if (combo.homePlanId === homeId) {
                lotIds.push(combo.lotId);
            }
        }
    
        lots = lots.filter(lot => lotIds.includes(lot.lotId))
        return lots
        
    };

    try {
        let lots = await sortHomeCombos(homeId)

        dispatch(receiveCompLots(lots));
    } catch (err) {
        console.log(err)
    }
}


