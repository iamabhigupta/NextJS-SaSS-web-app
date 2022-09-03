// ** React Imports
import { useState,useEffect } from 'react'

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

const TabDetails = ({fName,fStore,fLfile}) => {
  const [value, setValue] = useState('ecommerce')
  const [fname, setFname] = useState('')
  const [fsrc, setFsrc] = useState([])

  fName(fname);
  fStore(value);
  fLfile(fsrc);


  

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Box>
      <TextField fullWidth sx={{ mb: 4 }} label='Site Name' placeholder='Lapaas' onChange = {(e) => setFname(e.target.value)} />
      <Typography variant='h6' sx={{ mb: 4 }}>
        Upload Your Logo -- {fsrc}
      </Typography>
      <DropzoneWrapper>
        <Grid className='match-height' xs={12}>
          {/* <Grid item xs={7}>  */}
          <FileUploaderRestrictions fileSrc = {text => setFsrc(text)} />
          {/* </Grid> */}
        </Grid>
      </DropzoneWrapper>
      <Typography variant='h6' sx={{ my: 4 }}>
        Store Type
      </Typography>
      <FormGroup row>
        <FormControlLabel label='Ecommerce' control={<Checkbox name='basic-unchecked' />} onChange = {(e) => fStore('Ecommerce')} />
        <FormControlLabel disabled label='Site' control={<Checkbox name='basic-disabled-unchecked' />} onChange = {(e) => fStore('Site')} />
      </FormGroup>
    </Box>
  )
}

export default TabDetails
