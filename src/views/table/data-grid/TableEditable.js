import { Fragment, useState, useEffect, forwardRef } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
// import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 200,
    editable: true,
    field: 'name',
    headerName: 'Name'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    editable: true,
    headerName: 'Email'
  },
  {
    flex: 0.15,
    type: 'phone',
    minWidth: 130,
    editable: true,
    field: 'phone',
    headerName: 'Phone'
  },
  {
    flex: 0.15,
    minWidth: 120,
    editable: true,
    field: 'address',
    headerName: 'Address'
  }
]

const TableEditable = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    query {
      userFindAllByRole(role_id: 7) {
          id,
          role_id,
          store_id,
          name,
          phone,
          email,
          username,
          address,
          orders {
              id,
              store_id,
              user_id,
              initial_price,
              delivery_fee,
              total_price,
              shipping_address,
              billing_address,
              items {
                  id,
                  product_id,
                  quantity,
                  price,
                  total_price
              },
              status,
              created_at,
              updated_at
          }
          status,
          created_at,
          updated_at
      }
  }`    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result.data.data.userFindAllByRole)
        setRows(result.data.data.userFindAllByRole)
    })
  
  
  }, []);


  return (
    <Card>
      <CardHeader title='Customers' />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default TableEditable
