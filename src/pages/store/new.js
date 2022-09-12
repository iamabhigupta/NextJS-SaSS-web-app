// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import NewStore from 'src/views/forms/form-layouts/NewStore'
import NewStoreCollaps from 'src/views/forms/form-layouts/NewStoreCollaps'

const StoreNew = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <NewStore />
      </Grid>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
        <NewStoreCollaps />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            gap: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button type='submit' color='success' variant='contained' size='large'>
            Add Store
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default StoreNew
