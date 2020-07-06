import * as actionType from './actionTypes';
import * as reducerFunction from './utilities/index';

const initialState = {
  cryptoData: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CRYPTODATA:
      return reducerFunction.getCryptoData(state, action);

    default:
      return state;
  }
};

export default cryptoReducer;
