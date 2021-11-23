import React from 'react';
import CardTemplate from '../CardTemplate/CardTemplate';
import {useSelector} from 'react-redux';

function LotCards({showFavorites, setOpenModal, openModal}) {
    let lots = useSelector(state => state.lots.lots)
    let favoriteIds = useSelector(state => state.liked.likedLots)

    if(showFavorites) {
        lots = lots.filter(lot => favoriteIds.includes(lot.lotId))
    }

    return (
        <div className='lot-cards-container'>
            {lots.map(lot => {
                return <CardTemplate key={lot.address} type="lot" info={lot} setOpenModal={setOpenModal} openModal={openModal}/>
            })}
        </div>
    )
}

export default LotCards
