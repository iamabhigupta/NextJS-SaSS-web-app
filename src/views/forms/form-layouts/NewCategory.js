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

const NewCategory = ({formData, setFormData}) => {
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

  const [rows, setRows] = useState([]);

  useEffect(() => {

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    query {
      storeFindAll {
          id,
          user_id,
          name,
          description,
          status,
          created_at,
          updated_at
      }
  }`    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result.data.data.storeFindAll)
        setRows(result.data.data.storeFindAll)

    })
  
  
  }, []);

  return (
    <Card>
      <CardHeader title='New Category' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Category Name</Typography>
              <TextField autoComplete='off' fullWidth placeholder='Enter Category name'
               name="name"
               onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              } />
            </Grid>

            <Grid item xs={6}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Store</Typography>
                <FormControl fullWidth>
                  <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                     name="store_id"
                     onChange={(event) =>
                      setFormData({ ...formData, store_id: event.target.value })
                    }
                  >
                    <MenuItem value=''>
                      <em>Select store ..</em>
                    </MenuItem>
                    {rows.map(data => {
                    return (
                    <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>                 
                    )
                    })}
                  </Select>
                  {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
              </Grid>


            {/* <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: 500 }}>Category Image</Typography>
              <DropzoneWrapper>
                <Grid item xs={12}>
                  <FileUploaderMultiple />
                </Grid>
              </DropzoneWrapper>
            </Grid> */}
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default NewCategory
