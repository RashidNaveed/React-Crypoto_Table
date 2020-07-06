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
        width: '60%',
        height: '520px',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '2%',
      }}>
      <AgGridReact
        columnDefs={columns}
        rowData={rows}
        pagination={true}
        paginationAutoPageSize={true}
        viewportRowModelPageSize={1}></AgGridReact>
    </div>
  );
};

export default Tables;
