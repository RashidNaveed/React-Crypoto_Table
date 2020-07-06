import Axios from 'axios';
import * as actionType from './actionTypes';

export const getDataSuccess = (data) => {
  return {
    type: actionType.GET_CRYPTODATA,
    payload: {
      data: data,
    },
  };
};

export const fetchDataFromApi = () => {
  return (dispatch) => {
    Axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h'
    )
      .then((response) => {
        dispatch(getDataSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
