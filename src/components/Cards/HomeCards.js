import React,{useEffect} from 'react';
import CardTemplate from '../CardTemplate/CardTemplate';
import {useSelector} from 'react-redux';



function HomeCards({showFavorites, openModal, setOpenModal}) {
    
    let homes = useSelector(state => state.homes.homes)
    let favoriteIds = useSelector(state => state.liked.likedHomes)

    if(showFavorites){
        homes = homes.filter(home => favoriteIds.includes(home.homePlanId))
    }

    
    return (
        <div className="home-cards-container">
            {homes.map(home => {
                return <CardTemplate key={home.homePlanId + home.name} type={"home"} info={home} openModal={openModal} setOpenModal={setOpenModal}/>;
            })}
        </div>
    )
}

export default HomeCards
