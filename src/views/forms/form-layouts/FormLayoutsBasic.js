// ** React Imports
import { useState,useEffect, forwardRef ,useCallback} from 'react'
import axios from 'axios'

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

const FormLayoutsBasic = ({ fName, fCatName, fPrice, fDprice, fPdesc,fstore,fcategory,pffileId }) => {
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

  const [storew, setStorew] = useState([]);
  const [categoryw, setCategoryw] = useState([]);

  const [storeData, setStoreData] = useState([]);
  const [ffileid, setFfileid] = useState();

  pffileId(ffileid)

  useEffect(() => {

  const userData = JSON.parse(window.localStorage.getItem('userData'))

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    query {
      storeFindAllByUser(user_id: ${userData.id}) {
          id,
          user_id,
          name,
          site_name,
          description,
          image,
          status,
          created_at,
          updated_at
      }
  }`    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result.data.data.storeFindAllByUser)
        setStoreData(result.data.data.storeFindAllByUser)

    })

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    query {
      productCategoryFindAll {
          id,
          store_id,
          name,
          slug,
          image,
          attributes {
              id,
              name,
              status
          }
          status,
          created_at,
          updated_at
      }
  }`    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result.data.data.productCategoryFindAll)
        setCategoryw(result.data.data.productCategoryFindAll)

    })
  
  
  }, []);

  return (
    <Card>
      <CardHeader title='Product Information' titleTypographyProps={{ variant: 'h6' }} />
     
      {storeData.length > 0  && (
      <Link target="_blank" href={ process.env.NEXT_PUBLIC_STORE_ADDRESS+storeData[0].site_name } underline="hover"  sx={{
         position:'absolute',
         top:'18%',
         left:'50%'
      }}>
        { process.env.NEXT_PUBLIC_STORE_ADDRESS+storeData[0].site_name }
      </Link>

      )}

{storeData.length == 0 && (
      <Link href="/dashboard" underline="hover"  sx={{
         position:'absolute',
         top:'18%',
         left:'50%',
         color:'red'
      }}>
        Please setup your store .. click here
      </Link>

      )}
      
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
                  <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                  onChange={e => fcategory(e.target.value)}
                  >
                  <MenuItem value=''>
                      <em>Select Category ..</em>
                    </MenuItem>
                    {categoryw.map(data => {
                    return (
                    <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>                 
                    )
                    })}
                  </Select>
                  {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
              </Grid>
            </Grid>
            {/* <Grid item xs={12}>
              <Grid item xs={6}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Store</Typography>
                <FormControl fullWidth>
                  <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                  onChange={e => fstore(e.target.value)}                  
                  >
                  <MenuItem value=''>
                      <em>Select Store ..</em>
                    </MenuItem>
                    {storew.map(data => {
                    return (
                    <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>                 
                    )
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid> */}
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
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Product Media (up to 5)</Typography>
              <DropzoneWrapper>
                <Grid item xs={12}>
                  <FileUploaderMultiple fileId = {text => setFfileid(text)} />
                </Grid>
              </DropzoneWrapper>
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
            
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
