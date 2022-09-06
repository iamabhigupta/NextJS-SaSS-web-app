// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

// ** Icons Imports
import ContentCopy from 'mdi-material-ui/ContentCopy'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import CheckboxMultipleBlankCircle from 'mdi-material-ui/CheckboxMultipleBlankCircle'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

const ListSimple = () => {
  return (
    <Fragment>
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckboxMultipleBlankCircle />
            </ListItemIcon>
            <ListItemText primary='Product Information' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ m: 0 }} />
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckboxMultipleBlankCircle />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ m: 0 }} />
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckboxMultipleBlankCircle />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ m: 0 }} />
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckboxMultipleBlankCircle />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ m: 0 }} />
    </Fragment>
  )
}

export default ListSimple
