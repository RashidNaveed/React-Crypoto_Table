import React from 'react';
import { connect } from 'react-redux';
import Tables from '../../components/UI/Table/Table';

const CryptoData = (props) => {
  const columns = [
    {
      headerName: 'RANK',
      field: 'rank',
      width: 75,
      suppressSizeToFit: true,
    },
    {
      headerName: 'COIN',
      field: 'name',
      width: 200,
    },
    {
      headerName: 'PRICE',
      field: 'price',
      width: 90,
      minWidth: 50,
      maxWidth: 100,
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
      resizable: true,
    },
  ];
  const rows = [];
  props.apiData.map((data) => {
    return rows.push({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image,
      price: data.current_price,
      marketCap: data.market_cap,
      rank: data.market_cap_rank,
      priceChange1h: data.price_change_percentage_1h_in_currency,
      priceChange24h: data.price_change_percentage_24h,
    });
  });
  console.log('Rows', rows);

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
