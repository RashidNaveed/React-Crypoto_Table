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
    setInterval(() => {
      Axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h'
      )
        .then((response) => {
          dispatch(getDataSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };
};
