import React, {useState} from 'react';
import { addHomeToLiked, removeHomeFromLiked } from '../../actions/home_actions';
import { addLotToLiked, removeLotFromLiked} from '../../actions/lot_actions';
import {useDispatch,  useSelector} from 'react-redux';
import { fetchCompatibleHomes } from '../../actions/lot_actions';
import { fetchCompatibleLots } from '../../actions/home_actions';

function CardTemplate({type, info, openModal, setOpenModal}) {
    // if (type === 'home') {
    //     let {homePlanId, name, numBeds, numBaths, sqft, tags, description, image} = info;

    // } else if(type === 'lot') {
    //     let {lotId, address, acres,description, image} = info;
    // }
    let {homePlanId, name, numBeds, numBaths, sqft, tags, description, image, lotId, address, acres} = info
    const dispatch = useDispatch()
    let [liked, setLiked] = useState(false)


    //dispatches an action which add the house or lot to their respective liked array in state
    function changedLikedStatus(e) {
        e.preventDefault();
        if (type === "home" && !liked) {
            dispatch(addHomeToLiked(homePlanId));
        } else if(type === "home" && liked) {
            dispatch(removeHomeFromLiked(homePlanId))
        } else if (type === "lot" && !liked) {
            dispatch(addLotToLiked(lotId))
        } else if (type === "lot" && liked) {
            dispatch(removeLotFromLiked(lotId))
        }
        //add lot dispatch
        setLiked(!liked)

    }

    //function for splitting a address at comma, returns an object with two keys
    function splitAddy(addressStr) {
        let commaIndex = addressStr.indexOf(',')
        let obj = {street: addressStr.slice(0, commaIndex), cityState: addressStr.slice(commaIndex + 2)};
        return obj
    }

    function openCompLotModal() {
        
        console.log("type in openComLotModal", type)
        if (type === "home") {
            setOpenModal({type:"lot", open: true})
            dispatch(fetchCompatibleLots(homePlanId))};
        if(type === "lot") {
            setOpenModal({type:"home", open: true})
            dispatch(fetchCompatibleHomes(lotId))};
    }

    // determines the structure and content of the html for the bottom of the card based on the cardtype passed down
    let cardBottom;
    if (type === "home") {
        cardBottom = <div className="card-bottom home-bottom" onClick={() => openCompLotModal()}>
            <h2>{name}</h2>
            <div>{numBeds} beds - {numBaths} baths - {sqft} sqft</div>
            <div className="tags-container">
            {tags.map( (tag,i) => {
                return (<div key={tag + "," + i} className="home-tag">
                            {tag}

                        </div>)
            })}
            </div>
            <div className="card-description">{description}</div>
        </div>
    }

    if( type === 'lot') {
        let {street, cityState} = splitAddy(address)

        cardBottom = (
          <div
            className="card-bottom lot-bottom"
            onClick={() => openCompLotModal()}
          >
            <h2>{street}</h2>
            <div className="lot-detail">{cityState}</div>
            <div className="lot-detail">
              {acres} acres - {Math.floor(acres * 43560)} sqft
            </div>
            <div className="card-description">{description}</div>
          </div>
        );
    }


    let heartIcon;

    // code for changing the heartIcon from like to unlike
    liked ? (heartIcon = (
        <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
        ))
        : (heartIcon = (
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
        </svg>
        ));



    return (
      <div className="card-container">
        <div className="top-of-card">
          <img
            className="card-pic"
            src={image}
            onClick={() => openCompLotModal()}
          />
          <div className="like-button" onClick={(e) => changedLikedStatus(e)}>
            {heartIcon}
          </div>
        </div>
        {cardBottom}
      </div>
    );
}

export default CardTemplate
