import {createAction} from '@reduxjs/toolkit';
import { API } from '../API/api';

const receiveLots = createAction('RECEIVE_LOTS');
const likeLot = createAction('LIKE_LOT');
const unlikeLot = createAction("UNLIKE_LOT");
const receiveCompHomes = createAction("RECEIVE_COMP_HOMES")

export const fetchLots = () => async dispatch => {
    try {
        let lots = await API.getLots();
        dispatch(receiveLots(lots))
    } catch (err) {
        console.log(err)
    }
}

export const addLotToLiked = (lotId=null) => async dispatch => {
    try {
        dispatch(likeLot(lotId))
    } catch (err) {
        console.log(err)
    }
}

export const removeLotFromLiked = (lotId) => async dispatch => {
    try {
        dispatch(unlikeLot(lotId))
    } catch (err) {
        console.log(err)
    }
}


export const fetchCompatibleHomes = (lotId) => async (dispatch) => {

    const sortLotCombos = async (lotId) => {
        let homeIds = [];
        let combos = await API.getCombinations();

        let homes = await API.getHomePlans();

        for (let combo of combos) {
            if (combo.lotId === lotId) {
                homeIds.push(combo.homePlanId);
            }
        }
        
        homes = homes.filter(home => homeIds.includes(home.homePlanId))
        
        return homes
    };

    try {
        let compHomes = await sortLotCombos(lotId);
        dispatch(receiveCompHomes(compHomes));
    } catch (err) {
        console.log(err);
    }
};





