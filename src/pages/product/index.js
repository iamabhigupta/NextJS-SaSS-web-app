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
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Select from '@mui/material/Select'

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
import { ConfirmModal } from '../../layouts/components/ConfirmModal'
import { useAlert } from '../../hooks/useAlert'

// ** import { rows } from 'src/@fake-db/table/product-list-data'

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

const Product = () => {
  const RowOptions = id => {
    // ** Hooks
    const dispatch = useDispatch()

    // ** State
    const [anchorEl, setAnchorEl] = useState(null)
    const [confirmModal, setConfirmModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleRedirect = route => {
      router.push(route)
    }
    
    const handleRowOptionsClose = () => {
      setAnchorEl(null)
    }

    const handleDelete = () => {
      setConfirmModal(true)
      setLoading(true)

      console.log(id)
      axios({
        url: process.env.NEXT_PUBLIC_API_ENDPOINT,
        method: 'post',
        data: {
          query: `
          mutation productDelete{
        productDelete(id:${id})
      }`
        },
        headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
      })
        .then(result => {
          console.log(result)
          setConfirmModal(false)
          setRefreshRows(prevState => !prevState)
        })
        .finally(() => {
          setLoading(false)
          setRows(prevState => {
            let result = prevState.filter(elem => elem.id != id)

            return result
          })
        })
      handleRowOptionsClose()
    }
    const { handleAddAlert, AlertElement } = useAlert()

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
          <MenuItem onClick={() => handleRedirect(`/product/update/${id}`)}>
            <PencilOutline fontSize='small' sx={{ mr: 2 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={() => setConfirmModal(true)}>
            <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
            Delete
          </MenuItem>

          <ConfirmModal
            title={'Are you sure you want to remove the product?'}
            open={confirmModal}
            confirmFunction={() => handleDelete()}
            cancelFunction={() => setConfirmModal(false)}
            closeAutomatically={false}
            loading={loading}
            handleClose={() => setConfirmModal(false)}
          />
        </Menu>
        {/*{AlertElement}*/}
      </>
    )
  }

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'name',
      headerName: 'Products',
      renderCell: ({ row }) => {
        const { id, fullName, username } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(row)}

            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              {/* <Link href={`/apps/user/view/${id}`} passHref>
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                {fullName}
              </Typography>
            </Link> */}
              {/* <Link href={`/apps/user/view/${id}`} passHref> */}
              <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                {row.title}
              </Typography>
              {/* </Link> */}
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 250,
      field: 'price',
      headerName: 'Price',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.price}
          </Typography>
        )
      }
    },
    {
      flex: 0.15,
      field: 'role',
      minWidth: 150,
      headerName: 'Inventory',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {userRoleObj[row.role]}
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.role}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Plan',
      field: 'currentPlan',
      renderCell: ({ row }) => {
        return (
          <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
            {row.currentPlan}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        return (
          <>
            <CustomChip
              skin='light'
              size='small'
              label={row.status}
              color={userStatusObj[row.status]}
              sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
            />
            <Box sx={{ ml: 2 }}>{RowOptions(row.id)}</Box>
          </>
        )
      }
    }

    // {
    //   flex: 0.1,
    //   minWidth: 5,
    //   width:10,
    //   filterable:false,
    //   disableColumnMenu:true,
    //   hideSortIcons:true,
    //   renderCell: ({ row }) => {
    //     return (
    //       RowOptions(row.id)
    //     )
    //   }
    // }

    // {
    //   flex: 0.1,
    //   minWidth: 90,
    //   sortable: false,
    //   field: 'actions',
    //   headerName: 'Image',
    //   renderCell: ({ row }) => <RowOptions id={row.id} />
    // }
  ]

  // ** State
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [refreshRows, setRefreshRows] = useState(false)

  const router = useRouter()

  const [rows, setRows] = useState([])
  const [storeData, setStoreData] = useState([])

  useEffect(() => {
    var sname = ''

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

      if ((result.data.data.storeFindAllByUser || []).length === 0) {
        sname = '#@'
      }

      if ((result.data.data.storeFindAllByUser || []).length > 0) {
        sname = result.data.data.storeFindAllByUser[0].site_name
      }

      axios({
        url: process.env.NEXT_PUBLIC_API_ENDPOINT,
        method: 'post',
        data: {
          query: `
        query {
          productFindAllBySiteName(site_name: "${sname}") {
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
      }`
        },
        headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
      }).then(result => {
        console.log(result.data.data.productFindAllBySiteName)

        if ((result.data.data.productFindAllBySiteName || []).length > 0) {
          setRows(result.data.data.productFindAllBySiteName)
        } else {
          setRows([])
        }
      })
    })
  }, [refreshRows])

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
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
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
          />
        </Card>
      </Grid>

      <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
    </Grid>
  )
}

export default Product
