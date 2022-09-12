// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Styled Component
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** CleaveJS Imports
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import FileUploaderMultiple from '../form-elements/file-uploader/FileUploaderMultiple'

const FormLayoutsBasic = ({ fName, fCatName, fPrice, fDprice, fPdesc }) => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [personName, setPersonName] = useState([])

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const names = ['Veg', 'Non Veg', 'Egg', 'Others']

  return (
    <Card>
      <CardHeader title='Product Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Product Name</Typography>
              <TextField
                autoComplete='off'
                onChange={e => fName(e.target.value)}
                fullWidth
                placeholder='Enter product name'
              />
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Product Category</Typography>
                <FormControl fullWidth>
                  <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='Kirana'>Kirana</MenuItem>
                    <MenuItem value='Hotel'>Hotel</MenuItem>
                    <MenuItem value='Resturant'>Resturant</MenuItem>
                  </Select>
                  {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Store</Typography>
                <FormControl fullWidth>
                  <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='Store1'>Store1</MenuItem>
                    <MenuItem value='Store2'>Store2</MenuItem>
                    <MenuItem value='Store3'>Store3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Price</Typography>
              <TextField
                autoComplete='off'
                onChange={e => fPrice(e.target.value)}
                fullWidth
                placeholder='Enter price'
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Discounted Price</Typography>
              <TextField
                autoComplete='off'
                onChange={e => fDprice(e.target.value)}
                fullWidth
                placeholder='Enter discounted price'
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Veg / Non Veg / Egg</Typography>
              {/* <FormControl fullWidth>
                <InputLabel id='demo-multiple-name-label'>Choose Option</InputLabel>
                <Select
                  multiple
                  label='Choose Option'
                  value={personName}
                  id='demo-multiple-name'
                  onChange={handleChange}
                  labelId='demo-multiple-name-label'
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
              <FormControl fullWidth>
                <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Veg'>Veg</MenuItem>
                  <MenuItem value='Non Veg'>Non Veg</MenuItem>
                  <MenuItem value='Egg'>Egg</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Product Description</Typography>
              <TextField
                autoComplete='off'
                onChange={e => fPdesc(e.target.value)}
                fullWidth
                placeholder='Enter product description'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Product Media (up to 5)</Typography>
              <DropzoneWrapper>
                <Grid item xs={12}>
                  <FileUploaderMultiple />
                </Grid>
              </DropzoneWrapper>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
