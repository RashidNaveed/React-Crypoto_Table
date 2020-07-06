import React from 'react';
import { connect } from 'react-redux';
import Tables from '../../components/UI/Table/Table';

const CryptoData = (props) => {
  const columns = [
    { headerName: 'RANK', field: 'rank' },
    { headerName: 'COIN', field: 'name' },
    { headerName: 'PRICE', field: 'price' },
    { headerName: 'MKT-CAP', field: 'marketCap' },
    { headerName: 'CHG.1H', field: 'priceChange1h' },
    { headerName: 'CHG.24H', field: 'priceChange24h' },
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
