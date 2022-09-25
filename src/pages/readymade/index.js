// ** React Imports
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import Laptop from 'mdi-material-ui/Laptop'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import CogOutline from 'mdi-material-ui/CogOutline'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/user'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/user/list/TableHeader'
import AddUserDrawer from 'src/views/apps/user/list/AddUserDrawer'

import { rows } from 'src/@fake-db/table/product-list-data'

// ** Vars
const userRoleObj = {
  admin: <Laptop sx={{ mr: 2, color: 'error.main' }} />,
  author: <CogOutline sx={{ mr: 2, color: 'warning.main' }} />,
  editor: <PencilOutline sx={{ mr: 2, color: 'info.main' }} />,
  maintainer: <ChartDonut sx={{ mr: 2, color: 'success.main' }} />,
  subscriber: <AccountOutline sx={{ mr: 2, color: 'primary.main' }} />
}

const userStatusObj = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// ** Styled component for the link for the avatar with image
const AvatarWithImageLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3)
}))

// ** Styled component for the link for the avatar without image
const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

// ** renders client column
const renderClient = row => {
  if (row.avatar) {
    // return (
    //   <AvatarWithImageLink href={`/apps/user/view/${row.id}`}>
    //     <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
    //   </AvatarWithImageLink>
    // )
  } else {
    // return (
    //   <AvatarWithoutImageLink href={`/apps/user/view/${row.id}`}>
    //     <CustomAvatar
    //       skin='light'
    //       color={row.avatarColor || 'primary'}
    //       sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
    //     >
    //       {getInitials(row.fullName ? row.fullName : 'John Doe')}
    //     </CustomAvatar>
    //   </AvatarWithoutImageLink>
    // )
  }
}

// ** Styled component for the link inside menu
const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

const RowOptions = ({ id }) => {
  // ** Hooks
  const dispatch = useDispatch()

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem sx={{ p: 0 }}>
          <Link href={`/apps/user/view/${id}`} passHref>
            <MenuItemLink>
              <EyeOutline fontSize='small' sx={{ mr: 2 }} />
              View
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose}>
          <PencilOutline fontSize='small' sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const columns = [
  { field: 'title', headerName: 'Name', width: 180, editable: true },
  { field: 'price', headerName: 'MRP', editable: true },
  {
    field: 'discount',
    headerName: 'Selling price',
    width: 180,
    editable: true,
  },
  {
    field: 'inventory',
    headerName: 'INVENTORY',
    width: 220,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'created_at',
    width: 220,
    editable: true,
  },
];

// const rows = [
//   {
//     id: 1,
//     name: 'jj',
//     age: 25,
//     dateCreated: '',
//     lastLogin: '',
//   },
//   {
//     id: 2,
//     name: 'jj',
//     age: 25,
//     dateCreated: '',
//     lastLogin: '',
//   },  
// ];

const Readymade = () => {

  // ** State
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const router = useRouter()

  // const [rows, setRows] = useState([])
  const [storeData, setStoreData] = useState([])
  const [updatedData, setUpdatedData] = useState([])
  const [selecteddData, setSelecteddData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])


  useEffect(() => {

    const userData = JSON.parse(window.localStorage.getItem('userData'))

    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
        query: `
    query {
      storeFindAllByUser(user_id: ${userData.id}) {
          id,
          user_id,
          name,
          site_name,
          description,
          image,
          status,
          created_at,
          updated_at
      }
  }`
      },
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    }).then(result => {
      console.log(result.data.data.storeFindAllByUser)
      setStoreData(result.data.data.storeFindAllByUser)

      axios({
        url: process.env.NEXT_PUBLIC_API_ENDPOINT,
        method: 'post',
        data: {
          query: `
          query {
            productCategoryFindAllByStore(store_id: ${result.data.data.storeFindAllByUser[0].id}) {
                id,
                store_id,
                name,
                slug,
                image,
                attributes {
                    id,
                    name,
                    status
                }
                status,
                created_at,
                updated_at
            }
        }`
        },
        headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
      }).then(result => {
        console.log(result.data.data.productCategoryFindAllByStore)
        setSelectedCategory(result.data.data.productCategoryFindAllByStore)
    
      })
  
    })

  }, [])

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)
  useEffect(() => {
    dispatch(
      fetchData({
        role,
        status,
        q: value,
        currentPlan: plan
      })
    )
  }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  const handlePlanChange = useCallback(e => {
    setPlan(e.target.value)
  }, [])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const processRowUpdate = (newRow) => {

    const updatedRow = { ...newRow, isNew: false };

    console.log(updatedRow);

    setUpdatedData(updatedRow);

    return updatedRow;
}

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setSelecteddData(selectedRowsData);
    console.log(updatedData);
    console.log(selectedRowsData);
  };

  const handleClick = (event) => { 

    if(selecteddData.length == 0){

      alert('Please select atleast one item.')

       return false;
       
      }

      selecteddData.forEach((data, index) => {
    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `          
    mutation {
      productCreate(data: {
          store_id: ${storeData[0].id},
          category_id: ${selectedCategory[0].id},
          title: "${data.title}",
          short_description: "${data.short_description}",
          long_description: "${data.short_description}",
          html_content: "${data.short_description}",
          price: ${data.price},
          discount: ${data.discount},
          country_of_origin: "India",
          media_ids: "",
          stock: 10,
          status: Active,
      }) {
          id,
          store_id,
          category_id,
          title,
          short_description,
          long_description,
          html_content,
          price,
          discount,
          country_of_origin,
          image,
          attributes {
              name,
              value
          },
          faqs {
              id,
              question,
              answer,
          },
          stock,
          status,
          created_at,
          updated_at
      }
  }      
        `    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result)
        router.push('/product')
    })
  })
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='role-select'>Select Category</InputLabel>
                  <Select
                    fullWidth
                    value={role}
                    id='select-role'
                    label='Select Category'
                    labelId='role-select'
                    onChange={handleRoleChange}
                    inputProps={{ placeholder: 'Select Category' }}
                  >
                    <MenuItem value=''>Select Category</MenuItem>
                    <MenuItem value='admin'>Kirana</MenuItem>
                    <MenuItem value='author'>Kirana</MenuItem>
                    <MenuItem value='editor'>Kirana</MenuItem>
                    <MenuItem value='maintainer'>Kirana</MenuItem>
                    <MenuItem value='subscriber'>Kirana</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='plan-select'>Stock</InputLabel>
                  <Select
                    fullWidth
                    value={plan}
                    id='select-plan'
                    label='Stock'
                    labelId='plan-select'
                    onChange={handlePlanChange}
                    inputProps={{ placeholder: 'Select Plan' }}
                  >
                    <MenuItem value=''>Stock</MenuItem>
                    <MenuItem value='basic'>In Stock</MenuItem>
                    <MenuItem value='company'>Out of Stock</MenuItem>
                    {/* <MenuItem value='enterprise'>Enterprise</MenuItem>
                    <MenuItem value='team'>Team</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='status-select'>Select Status</InputLabel>
                  <Select
                    fullWidth
                    value={status}
                    id='select-status'
                    label='Select Status'
                    labelId='status-select'
                    onChange={handleStatusChange}
                    inputProps={{ placeholder: 'Select Role' }}
                  >
                    <MenuItem value=''>Select Role</MenuItem>
                    <MenuItem value='pending'>Pending</MenuItem>
                    <MenuItem value='active'>Active</MenuItem>
                    <MenuItem value='inactive'>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          {/* <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} /> */}
        
        
          <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <Link href='#'>
            <Button onClick={handleClick} sx={{ mb: 2, borderRadius: ' 0.6rem 0 0 0.6rem ' }} variant='contained'>
              Add Product
            </Button>
          </Link>
        </Box>

          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            checkboxSelection
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            experimentalFeatures={{ newEditingApi: true }}      
            processRowUpdate={processRowUpdate}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}  

          />

        </Card>
      </Grid>

      <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
    </Grid>
  )
}

export default Readymade
