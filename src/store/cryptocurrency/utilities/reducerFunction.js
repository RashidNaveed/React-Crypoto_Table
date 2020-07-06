export const getCryptoData = (state, action) => {
  const dataArray = action.payload.data;
  return {
    ...state,
    cryptoData: dataArray,
  };
};
