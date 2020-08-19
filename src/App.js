import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import GalleryContainer from './components/Gallery/GalleryContainer';
import ModalContainer from './components/Modal/ModalContainer';



const App = (props) => {

  return (
    <div className="App">
      <div>
        <h1>Photo App</h1>
        <GalleryContainer isModalActive={props.isModalActive} />
      </div>
      <Footer />
      {props.isModalActive && <ModalContainer />}
    </div>
  );
}

export default App;
