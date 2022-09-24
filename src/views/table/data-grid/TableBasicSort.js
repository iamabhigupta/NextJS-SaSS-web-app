// ** React Imports
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
// import { rows } from 'src/@fake-db/table/static-data'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  
}

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'Delivered', color: 'success' },
  3: { title: 'Canceled', color: 'error' },
  4: { title: 'Pending', color: 'warning' },
  5: { title: 'Shipped', color: 'info' }
}

const TableSort = () => {

  // const rows = [
  //   {
  //     id: 1,
  //     full_name: "Korrie O'Crevy",
  //     post: 'Nuclear Power Engineer',
  //     email: 'kocrevy0@thetimes.co.uk',
  //     city: 'Krasnosilka',
  //     start_date: '09/23/2016',
  //     salary: 23896.35,
  //     age: '61',
  //     experience: '1 Year',
  //     status: 2
  //   },
  //   {
  //     id: 7,
  //     full_name: 'Eileen Diehn',
  //     post: 'Environmental Specialist',
  //     email: 'ediehn6@163.com',
  //     city: 'Lampuyang',
  //     start_date: '10/15/2017',
  //     salary: 18991.67,
  //     age: '59',
  //     experience: '9 Years',
  //     status: 3
  //   }];

  const [rows, setRows] = useState([])


    useEffect(() => {
     
      axios({
        url: process.env.NEXT_PUBLIC_API_ENDPOINT,
        method: 'post',
        data: {
          query: `
          query {
            orderFindAll {
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
        }`
        },
        headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
      }).then(result => {
        console.log(result.data.data.orderFindAll)
        setRows(result.data.data.orderFindAll)
  
      })


    }, [])




  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [isNameSortable, setIsNameSortable] = useState(true)

  const columns = [
    {
      flex: 0.275,
      minWidth: 290,
      field: 'full_name',
      headerName: 'Customer Name',
      sortable: isNameSortable,
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.user_id}
              </Typography>
              <Typography noWrap variant='caption'>
                {row.email}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.125,
      field: 'age',
      minWidth: 80,
      headerName: 'Order ID',
      sortable: isNameSortable,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 120,
      headerName: 'Date',
      field: 'start_date',
      sortable: isNameSortable,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.created_at}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 110,
      field: 'salary',
      headerName: 'Order value',
      sortable: isNameSortable,
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.salary}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'status',
      headerName: 'Status',
      sortable: isNameSortable,
      renderCell: params => {
        const status = statusObj['Pending']

        return (
          <CustomChip
            size='small'
            skin='light'
            color='warning'
            label='Pending'
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    }
  ]

  return (
    <Card>
      {/* <CardHeader
        title='Sorting'
        action={
          <Box>
            <Button size='small' variant='contained' onClick={() => setIsNameSortable(!isNameSortable)}>
              {`Disable Sorting: ${!isNameSortable}`}
            </Button>
          </Box>
        }
      /> */}
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default TableSort
