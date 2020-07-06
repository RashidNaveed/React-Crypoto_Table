import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Tables = (props) => {
  const { rows, columns } = props;

  return (
    <div
      className='ag-theme-alpine'
      style={{
        width: '80%',
        height: '600px',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2%',
      }}>
      <AgGridReact columnDefs={columns} rowData={rows}></AgGridReact>
    </div>
  );
};

export default Tables;
