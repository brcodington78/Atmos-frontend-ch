import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {fetchLots} from '../../actions/lot_actions';
import LotCards from '../Cards/LotCards';


function LotsPage({openModal, setOpenModal}) {
    const [showFavorites, setShowFavorites] = useState(false)
    const lots = useSelector(state => state.lots)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLots())
    },[])

    return (
        <div>
            <button className="show-saved" onClick={() => setShowFavorites(!showFavorites)}>Show Saved Lots</button>
            <LotCards showFavorites={showFavorites} openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    );
}

export default LotsPage
