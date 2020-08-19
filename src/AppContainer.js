import React from 'react';
import { connect } from 'react-redux';
import App from './App';



const AppContainer = (props) => {
  return <App isModalActive={props.isModalActive} />
};

const mapStateToProps = (state) => {
  return {
    isModalActive: state.isModalActive
  };
};

export default connect(mapStateToProps)(AppContainer);
