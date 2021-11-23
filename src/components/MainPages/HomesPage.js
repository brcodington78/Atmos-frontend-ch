import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {fetchHomes} from '../../actions/home_actions';
import HomeCards from '../Cards/HomeCards';



function HomesPage({openModal, setOpenModal}) {
    const [showFavorites, setShowFavorites] = useState(false)
    const homes = useSelector((state) => state.homes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHomes())
    },[])
    return (
        <div>
            <button className="show-saved" onClick={e => setShowFavorites(!showFavorites)}>Show Saved Homes</button>
            <HomeCards showFavorites={showFavorites} openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    )
}

export default HomesPage
