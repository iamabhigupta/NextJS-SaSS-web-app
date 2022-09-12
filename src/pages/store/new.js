// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import NewCategory from 'src/views/forms/form-layouts/NewCategory'
import NewCategoryCoollaps from 'src/views/forms/form-layouts/NewCategoryCoollaps'

const StoreNew = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <NewCategory />
      </Grid>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
        <NewCategoryCoollaps />
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
