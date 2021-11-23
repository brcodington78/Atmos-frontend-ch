import React from 'react';
import {useSelector} from 'react-redux';
import CardTemplate from '../CardTemplate/CardTemplate'



function Modal({setOpenModal, openModal}) {
    let state = useSelector(state => state);
    console.log("state", state)

    let homes = state.homes.compHomes;
    console.log("compHomes", homes)
    let lots = state.lots.compLots;
    console.log("compLots", lots)
    let correctTemplate;

    console.log('modal type', openModal.type)
    if (openModal.type === "home") {
        console.log("hitting")
        correctTemplate = homes.map(home => {
            return <CardTemplate type="home" key={home.homePlanId + home.name + "modal"} info={home} openModal={openModal} setOpenModal={setOpenModal}/>
        })
    } else if (openModal.type === 'lot') {
        console.log("hitting")
        correctTemplate = lots.map(lot => {
            return <CardTemplate type="lot" key={lot.address} info={lot} setOpenModal={setOpenModal} openModal={openModal}/>
        })
    }
    



    return (
      <div className="modal-background">
        <div className="modal-container">
        <button className="modal-button" onClick={() => setOpenModal({ type: "", open: false })}>
          X
        </button>
            <h1>Compatible {openModal.type === 'home' ? "homes!" : "lots!"}</h1>
            <div className="modal-card-container">

            {correctTemplate}
            </div>
        </div>
      </div>
    );
}

export default Modal
