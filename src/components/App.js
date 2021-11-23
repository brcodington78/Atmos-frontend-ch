import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Sidebar from './Sidebar/Sidebar';
import HomesPage from './MainPages/HomesPage';
import LotsPage from './MainPages/LotsPage';
import Modal from './Modal/Modal';

function App() {

  const [openModal, setOpenModal] = useState({type: '', open: false})

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route
          path="/homes"
          element={<HomesPage openModal={openModal} setOpenModal={setOpenModal} />}
        />
        <Route
          path="/lots"
          element={<LotsPage openModal={openModal} setOpenModal={setOpenModal} />}
        />
      </Routes>
      {openModal.open ? <Modal setOpenModal={setOpenModal} openModal={openModal}/> : null}
    </BrowserRouter>
  );
}

export default App;
