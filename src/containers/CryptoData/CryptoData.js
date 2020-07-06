import React from 'react';
import { connect } from 'react-redux';
import Tables from '../../components/UI/Table/Table';
import { currencyConvert } from '../../utility/currencyConvert';

const CryptoData = (props) => {
  const coinCellRenderer = (params) => {
    let image = `<img
        width="30" height="35" align="left"
        src=${params.data.image}
        alt=${params.data.name}
      />`;

    return (
      '<span >' +
      image +
      '</span>' +
      ' ' +
      '<span>' +
      params.data.name +
      ' ' +
      params.data.symbol +
      '</span>'
    );
  };
  const columns = [
    {
      headerName: 'RANK',
      field: 'rank',
      width: 74,
      suppressSizeToFit: true,
    },
    {
      headerName: 'COIN',
      cellRenderer: coinCellRenderer,
      width: 200,
    },
    {
      headerName: 'PRICE',
      field: 'price',
      width: 100,
    },
    {
      headerName: 'MKT-CAP',
      field: 'marketCap',
      width: 100,
    },
    {
      headerName: 'CHG.1H',
      field: 'priceChange1h',
      width: 90,
    },
    {
      headerName: 'CHG.24H',
      field: 'priceChange24h',
      width: 100,
    },
    {
      headerName: 'VOLUME',
      field: 'totalVolume',
      width: 100,
    },
  ];
  const rows = [];
  props.apiData.map((data) => {
    return rows.push({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image,
      price: `$ ${currencyConvert(data.current_price)}`,
      marketCap: currencyConvert(data.market_cap),
      rank: data.market_cap_rank,
      priceChange1h: `${
        data.price_change_percentage_1h_in_currency
          ? data.price_change_percentage_1h_in_currency.toFixed(2)
          : 'Null'
      }%`,
      priceChange24h: `${
        data.price_change_percentage_24h
          ? data.price_change_percentage_24h.toFixed(2)
          : 'Null'
      }%`,
      totalVolume: currencyConvert(data.total_volume),
    });
  });
  rows.sort((a, b) => (a.rank > b.rank ? 1 : -1));

  return (
    <div>
      <Tables rows={rows} columns={columns} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.cryptoData,
  };
};

export default connect(mapStateToProps)(CryptoData);
