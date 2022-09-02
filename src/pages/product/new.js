// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/forms/form-layouts/FormLayoutsBasic'
import FormLayoutsCollapsible from 'src/views/forms/form-layouts/FormLayoutsCollapsible'

const Settings = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <FormLayoutsBasic />
      </Grid>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
        <FormLayoutsCollapsible />
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
            Add Product
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Settings
