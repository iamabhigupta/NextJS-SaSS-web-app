// ** React Imports
import { useState } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

const MenuBasic = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        sx={{ mb: 2, borderRadius: '0 0.7rem 0.7rem 0' }}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        variant='contained'
      >
        <ChevronDown />
      </Button>
      <Menu
        sx={{ marginLeft: '-30px', marginTop: '10px' }}
        keepMounted
        id='simple-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <Link href='/product/select-category'>
          <MenuItem onClick={handleClose}>Readymade Category</MenuItem>
        </Link>
        <Link href='/product/select-category'>
          <MenuItem onClick={handleClose}>Bulk Upload Products</MenuItem>
        </Link>
        <Link href='/product/select-category'>
          <MenuItem onClick={handleClose}>Bulk edit Products </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default MenuBasic
