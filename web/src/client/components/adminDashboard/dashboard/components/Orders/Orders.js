
import * as React from 'react';

import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";

const columns = [
    {field: 'idOrder', headerName: 'ID', sortable: false, filterable: false},
    {field: 'menu', headerName: 'Menu', width: 300, sortable: false},
    {field: 'price', headerName: 'Price', width: 200, sortable: false, filterable: false},
    {field: 'amount', headerName: 'Amount', width: 200, filterable: false}
]

const Orders = () =>{
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://food-webapp.grp2.diplomportal.dk/api/items")
            .then(data => data.json())
            .then(data => setTableData(data))
    })


    return(
        <div style={{
            width: '100%',
            backgroundColor: 'whitesmoke',
            borderRadius: 20,
            height: 400,
            marginBottom: 40,
            boxShadow: 20,
            display: "flex"}}>
            <DataGrid
                getRowId={(row) => row.idOrder}
                rows={tableData}
                columns={columns}
            />

        </div>

    )
}

export default Orders;