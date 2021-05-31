import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'Drone name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 90,
  }
];

const rows = [
  { id: 1, lastName: 'Solo', firstName: 'Han', age: 35 },
  { id: 2, lastName: 'Vader', firstName: 'Darth', age: 32 },
  { id: 3, lastName: 'D2', firstName: 'R2', age: 100 },
  { id: 4, lastName: 'PO', firstName: 'C3', age: 200 },
  { id: 5, lastName: 'Fett', firstName: 'Jango', age: 40 },
  { id: 6, lastName: 'Fett', firstName: 'Boba', age: 20 },
  { id: 7, lastName: 'Ren', firstName: 'Kylo', age: 25 },
  { id: 8, lastName: null, firstName: 'Grogu', age: 36 },
  { id: 9, lastName: 'Calrissian', firstName: 'Lando', age: 42 },
];

export const DataTable = () => {
  let {shipData, getData } = useGetData();
  
  
    return(
        <div style={{height: 400, width: '100%'}}>
            <h1>Operators Ship Inventory</h1>
            <DataGrid rows={shipData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};