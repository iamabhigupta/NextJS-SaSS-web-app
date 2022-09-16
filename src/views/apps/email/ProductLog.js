// ** React Imports
import { Fragment, useState } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Input from '@mui/material/Input'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import ContentCopy from 'mdi-material-ui/ContentCopy'
import Tooltip from '@mui/material/Tooltip'
import Backdrop from '@mui/material/Backdrop'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import ListItem from '@mui/material/ListItem'
import { useRouter } from 'next/router'

import { rows } from 'src/@fake-db/table/product-list-data'

// ** Icons Import
import MenuIcon from 'mdi-material-ui/Menu'
import Circle from 'mdi-material-ui/Circle'
import Reload from 'mdi-material-ui/Reload'
import Magnify from 'mdi-material-ui/Magnify'
import StarOutline from 'mdi-material-ui/StarOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import LabelOutline from 'mdi-material-ui/LabelOutline'
import FolderOutline from 'mdi-material-ui/FolderOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import EmailOpenOutline from 'mdi-material-ui/EmailOpenOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import AlertOctagonOutline from 'mdi-material-ui/AlertOctagonOutline'

// ** Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Email App Component Imports
import { setTimeout } from 'timers'
import MailDetails from './MailDetails'

const MailItem = styled(ListItem)(({ theme }) => ({
  zIndex: 1,
  cursor: 'pointer',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('xs')]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5)
  },
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}))

const ScrollWrapper = ({ children, hidden }) => {
  if (hidden) {
    return <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
  }
}

const ProductLog = props => {
  // a
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [fdata, setFdata] = useState([])

  const handleChange = (e, val) => {
    let isChecked = e.target.checked
    console.log(isChecked)

    if (isChecked) {
      fdata.push(val)
      console.log(fdata)
    } else {
      setFdata(current =>
        current.filter(fdata => {
          return fdata.id !== val.id
        })
      )
    }
  }

  const handleSubmit = () => {
    console.log(fdata)

    if (fdata.length > 0) {
      fdata.forEach((data, index) => {
        axios({
          url: process.env.NEXT_PUBLIC_API_ENDPOINT,
          method: 'post',
          data: {
            query: `
        mutation {
          productCreate(data: {
              category_id: 1,
              title: "${data.title}",
              short_description: "${data.short_description}",
              long_description: "${data.short_description}",
              html_content: "${data.short_description}",
              price: ${data.price},
              discount: ${data.discount},
              country_of_origin: "India",
              status: Active,
          }) {
              id,
              category_id,
              title,
              short_description,
              long_description,
              html_content,
              price,
              discount,
              country_of_origin,
              medias {
                  id,
                  src
              },
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
      } `
          },
          headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
        }).then(result => {
          console.log(result)
        })
      })
    }

    router.push('/product')
  }

  // ** Props
  const {
    store,
    query,
    hidden,
    lgAbove,
    dispatch,
    setQuery,
    direction,
    updateMail,
    routeParams,
    labelColors,
    paginateMail,
    getCurrentMail,
    mailDetailsOpen,
    updateMailLabel,
    handleSelectMail,
    setMailDetailsOpen,
    handleSelectAllMail,
    handleLeftSidebarToggle
  } = props

  // ** State
  const [refresh, setRefresh] = useState(false)
  const [labelAnchorEl, setLabelAnchorEl] = useState(null)
  const [folderAnchorEl, setFolderAnchorEl] = useState(null)

  // ** Vars
  const openLabelMenu = Boolean(labelAnchorEl)
  const openFolderMenu = Boolean(folderAnchorEl)

  const folders = [
    {
      name: 'draft',
      icon: <PencilOutline fontSize='small' sx={{ mr: 2 }} />
    },
    {
      name: 'spam',
      icon: <AlertOctagonOutline fontSize='small' sx={{ mr: 2 }} />
    },
    {
      name: 'trash',
      icon: <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
    },
    {
      name: 'inbox',
      icon: <EmailOutline fontSize='small' sx={{ mr: 2 }} />
    }
  ]

  const foldersConfig = {
    draft: {
      name: 'draft',
      icon: <PencilOutline fontSize='small' sx={{ mr: 2 }} />
    },
    spam: {
      name: 'spam',
      icon: <AlertOctagonOutline fontSize='small' sx={{ mr: 2 }} />
    },
    trash: {
      name: 'trash',
      icon: <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
    },
    inbox: {
      name: 'inbox',
      icon: <EmailOutline fontSize='small' sx={{ mr: 2 }} />
    }
  }

  const foldersObj = {
    inbox: [foldersConfig.spam, foldersConfig.trash],
    sent: [foldersConfig.trash],
    draft: [foldersConfig.trash],
    spam: [foldersConfig.inbox, foldersConfig.trash],
    trash: [foldersConfig.inbox, foldersConfig.spam]
  }

  const handleLabelMenuClick = event => {
    setLabelAnchorEl(event.currentTarget)
  }

  const handleLabelMenuClose = () => {
    setLabelAnchorEl(null)
  }

  const handleFolderMenuClick = event => {
    setFolderAnchorEl(event.currentTarget)
  }

  const handleFolderMenuClose = () => {
    setFolderAnchorEl(null)
  }

  const handleMoveToTrash = () => {
    dispatch(updateMail({ emailIds: store.selectedMails, dataToUpdate: { folder: 'trash' } }))
    dispatch(handleSelectAllMail(false))
  }

  const handleStarMail = (e, id, value) => {
    e.stopPropagation()
    dispatch(updateMail({ emailIds: [id], dataToUpdate: { isStarred: value } }))
  }

  const handleReadMail = (id, value) => {
    const arr = Array.isArray(id) ? [...id] : [id]
    dispatch(updateMail({ emailIds: arr, dataToUpdate: { isRead: value } }))
    dispatch(handleSelectAllMail(false))
  }

  const handleLabelUpdate = (id, label) => {
    const arr = Array.isArray(id) ? [...id] : [id]
    dispatch(updateMailLabel({ emailIds: arr, label }))
  }

  const handleFolderUpdate = (id, folder) => {
    const arr = Array.isArray(id) ? [...id] : [id]
    dispatch(updateMail({ emailIds: arr, dataToUpdate: { folder } }))
  }

  const handleRefreshMailsClick = () => {
    setRefresh(true)
    setTimeout(() => setRefresh(false), 1000)
  }

  const renderLabelsMenu = () => {
    return Object.entries(labelColors).map(([key, value]) => {
      return (
        <MenuItem
          key={key}
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => {
            handleLabelUpdate(store.selectedMails, key)
            handleLabelMenuClose()
            dispatch(handleSelectAllMail(false))
          }}
        >
          <Circle sx={{ mr: 2, fontSize: '0.75rem', color: `${value}.main` }} />
          <Typography sx={{ textTransform: 'capitalize' }}>{key}</Typography>
        </MenuItem>
      )
    })
  }

  const renderFoldersMenu = () => {
    if (routeParams && routeParams.folder && !routeParams.label && foldersObj[routeParams.folder]) {
      return foldersObj[routeParams.folder].map(folder => {
        return (
          <MenuItem
            key={folder.name}
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => {
              handleFolderUpdate(store.selectedMails, folder.name)
              handleFolderMenuClose()
              dispatch(handleSelectAllMail(false))
            }}
          >
            {folder.icon}
            <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>
          </MenuItem>
        )
      })
    } else if (routeParams && routeParams.label) {
      return folders.map(folder => {
        return (
          <MenuItem
            key={folder.name}
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => {
              handleFolderUpdate(store.selectedMails, folder.name)
              handleFolderMenuClose()
              dispatch(handleSelectAllMail(false))
            }}
          >
            {folder.icon}
            <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>
          </MenuItem>
        )
      })
    } else {
      return foldersObj['inbox'].map(folder => {
        return (
          <MenuItem
            key={folder.name}
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => {
              handleFolderUpdate(store.selectedMails, folder.name)
              handleFolderMenuClose()
              dispatch(handleSelectAllMail(false))
            }}
          >
            {folder.icon}
            <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>
          </MenuItem>
        )
      })
    }
  }

  const renderMailLabels = arr => {
    return arr.map((label, index) => {
      return <Circle key={index} sx={{ mr: 3.5, fontSize: '0.625rem', color: `${labelColors[label]}.main` }} />
    })
  }

  const mailDetailsProps = {
    hidden,
    folders,
    dispatch,
    direction,
    foldersObj,
    updateMail,
    routeParams,
    labelColors,
    paginateMail,
    handleStarMail,
    mailDetailsOpen,
    handleLabelUpdate,
    handleFolderUpdate,
    setMailDetailsOpen,
    mail: store && store.currentMail ? store.currentMail : null
  }

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', '& .ps__rail-y': { zIndex: 5 } }}>
      <Box sx={{ height: '100%', backgroundColor: 'background.paper' }}>
        <Divider sx={{ m: 0 }} />
        <Box sx={{ p: 5, overflowY: 'hidden' }}>
          <Button fullWidth variant='contained' item onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        {/* <Grid container direction='row' justifyContent='right'>
          <Button variant='contained' item onClick={handleSubmit}>
            Submit
          </Button>
        </Grid> */}
        <Box sx={{ p: 0, position: 'relative', overflowX: 'hidden', height: 'calc(100% - 7rem)' }}>
          <ScrollWrapper hidden={hidden}>
            <List component='nav' aria-label='main mailbox'>
              {rows.map((data, i) => {
                return (
                  <>
                    <ListItem disablePadding>
                      <Box
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '60px',
                          width: '100%'
                        }}
                      >
                        <ListItemButton>
                          <img
                            src='https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                            alt=''
                            style={{ width: 60, height: 60, borderRadius: '3px', marginRight: '12px' }}
                          />
                          <ListItemText primary={data.title} />
                        </ListItemButton>
                        <FormGroup row>
                          <FormControlLabel
                            value={data.id}
                            onChange={e => handleChange(e, data)}
                            control={<Checkbox name='basic-unchecked' />}
                          />
                        </FormGroup>
                      </Box>
                    </ListItem>
                  </>
                )
              })}
            </List>
          </ScrollWrapper>
          <Backdrop
            open={refresh}
            onClick={() => setRefresh(false)}
            sx={{
              zIndex: 5,
              position: 'absolute',
              color: theme => theme.palette.common.white,
              backgroundColor: 'action.disabledBackground'
            }}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        </Box>
      </Box>

      <MailDetails {...mailDetailsProps} />
    </Box>
  )
}

export default ProductLog
