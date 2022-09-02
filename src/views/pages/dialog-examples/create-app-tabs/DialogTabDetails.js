// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import LicenseIcon from 'mdi-material-ui/LicenseIcon'
import CartOutline from 'mdi-material-ui/CartOutline'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'

// ** Demo Components Imports
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'

// ** Styled Component
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'

const TabDetails = () => {
  const [value, setValue] = useState('ecommerce')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <TextField fullWidth sx={{ mb: 4 }} label='Site Name' placeholder='Lapaas' />
      <Typography variant='h6' sx={{ mb: 4 }}>
        Upload Your Logo
      </Typography>
      <DropzoneWrapper>
        <Grid className='match-height' xs={12}>
          {/* <Grid item xs={7}>  */}
          <FileUploaderRestrictions />
          {/* </Grid> */}
        </Grid>
      </DropzoneWrapper>
      <Typography variant='h6' sx={{ my: 4 }}>
        Store Type
      </Typography>
      <FormGroup row>
        <FormControlLabel label='Ecommerce' control={<Checkbox name='basic-unchecked' />} />
        <FormControlLabel disabled label='Site' control={<Checkbox name='basic-disabled-unchecked' />} />
      </FormGroup>
    </Box>
  )
}

export default TabDetails
