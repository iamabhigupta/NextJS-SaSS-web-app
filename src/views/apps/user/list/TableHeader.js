// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from 'next/link'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'

// ** Components Imports
import AddProductMenu from '../../../components/menu/AddProductMenu'

const TableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button sx={{ mr: 4, mb: 2 }} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small' />}>
        Export
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Search Product'
          onChange={e => handleFilter(e.target.value)}
        />
        {/* <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
          Add Product
        </Button> */}

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link href='/product/new'>
            <Button sx={{ mb: 2, borderRadius: ' 0.6rem 0 0 0.6rem ' }} variant='contained'>
              Add Product
            </Button>
          </Link>
          <AddProductMenu />
        </Box>
      </Box>
    </Box>
  )
}

export default TableHeader
