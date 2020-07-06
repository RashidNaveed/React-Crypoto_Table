import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/cryptocurrency/index';
import CryptoData from './containers/CryptoData/CryptoData';

function App(props) {
  React.useEffect(() => {
    props.onStartApplication();
  }, []);

  return (
    <div className='App'>
      <CryptoData />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartApplication: () => dispatch(actionCreator.fetchDataFromApi()),
  };
};

export default connect(null, mapDispatchToProps)(App);
