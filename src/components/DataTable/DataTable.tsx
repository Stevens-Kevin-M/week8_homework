
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,DialogTitle } from '@material-ui/core';
import { ShipForm } from '../../components/ShipForm';

interface gridData{
  data: {
    id?:string;
  }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'Ship name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 90,
  }
];

export const DataTable = () => {
  let {shipData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}});

  let handleOpen = () => {
    setOpen(true)
  };

  let handleClose = () => {
    setOpen(false)
  };

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  console.log(gridData.data.id)
  
    return(
        <div style={{height: 400, width: '100%'}}>
            <h1>Operators Ship Inventory</h1>
            <DataGrid rows={shipData} columns={columns} pageSize={5} checkboxSelection  onRowSelected = { setData }/>

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

              {/* Dialog box begins here */}
            <Dialog open={open} onClose={handleClose} aria-labelled-by='form-dialog-title'>
              <DialogTitle id="form-dialog-title">Update Ship</DialogTitle>
              <DialogContent>
                <DialogContentText>Update Ship</DialogContentText>
                <ShipForm id={gridData.data.id!} />
              </DialogContent>
              <DialogActions>
                <Button onClick ={handleClose} color="secondary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
              </DialogActions>
            </Dialog>
        </div>
    );
};
