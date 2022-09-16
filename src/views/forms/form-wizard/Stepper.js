// ** React Imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductPopup from 'src/views/apps/email/ProductPopup'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Modal from '@mui/material/Modal'
import Dialog from '@mui/material/Dialog'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'
import MuiAvatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import ListItem from '@mui/material/ListItem'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import clsx from 'clsx'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import DialogCreateApp from 'src/views/pages/dialog-examples/DialogCreateApp'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'
import ArrowExpandAll from 'mdi-material-ui/ArrowExpandAll'
import Close from 'mdi-material-ui/Close'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const categories = [
  'Restaurants & Hotels',
  ' Kirana Store, FMCG & Grocery',
  'Local & Online Services',
  'Fresh Chicken, Fish, & Meat',
  'Insurance & Financial Services'
]

const steps = [
  {
    title: 'Set Up Your Ecommerce Store',
    subtitle: 'Enter your Store Details',
    description:
      'Chocolate cookie lollipop toffee candy canes marzipan liquorice chocolate. Cake gummi bears dessert lollipop apple pie candy. Candy pie sesame snaps lollipop biscuit chocolate cake fruitcake apple pie. '
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information',
    description:
      'Lemon drops ice cream danish macaroon bear claw cookie. Liquorice ice cream chocolate bar pastry chocolate bar candy. Caramels candy canes marshmallow soufflé biscuit tart fruitcake tiramisu. '
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links',
    description:
      'Jelly lollipop halvah bear claw jujubes macaroon candy canes. Soufflé halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon soufflé pudding. '
  }
]

const StepperVerticalWithoutNumbers = () => {
  // ** States
  const [open, setOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleModalOpen = () => setOpenModal(true)
  const handleModalClose = () => setOpenModal(false)

  // const [selectedValue, setSelectedValue] = useState(categories[1])
  const handleClickOpen = () => setOpen(true)
  const handleDialogClose = () => setOpen(false)

  const handleClose = value => {
    setOpen(false)
    setCategory(value)
    handleChange(value)
  }

  const router = useRouter()

  const [activeStep, setActiveStep] = useState(0)

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const addProduct = () => {
    router.push('/product/new')
  }

  const [category, setCategory] = useState('')

  const [storeData, setStoreData] = useState([])

  useEffect(() => {
    let userData = JSON.parse(window.localStorage.getItem('userData'))

    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
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
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    }).then(result => {
      console.log(result.data.data.storeFindAllByUser)
      setStoreData(result.data.data.storeFindAllByUser)
    })
  }, [])

  const handleChange = categoryName => {
    // setCategory(e.target.value)
    var sId = ''
    if (storeData.length > 0) {
      sId = storeData[0].id
    } else {
      sId = localStorage.getItem('store_id')
    }

    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
        query: `
        mutation {
          productCategoryCreate(data: {
              store_id: ${sId},
              name: "${categoryName}",
              slug: "${categoryName}",
              status: Active,
          }) {
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
      } `
      },
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    }).then(result => {
      console.log(result)
    })
  }

  return (
    <Card>
      <CardHeader title='Finish your store setup...' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step>
              <StepLabel StepIconComponent={StepperCustomDot}>
                <div className='step-label'>
                  <div>
                    <Typography className='step-title'>Set Up Your Ecommerce Site</Typography>
                    <Typography className='step-subtitle'>Enter Your Details</Typography>
                  </div>
                </div>
              </StepLabel>
              <StepContent>
                <DialogCreateApp />
                <div className='button-wrapper'>
                  <Button
                    size='small'
                    color='secondary'
                    variant='outlined'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    Back
                  </Button>
                  <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel StepIconComponent={StepperCustomDot}>
                <div className='step-label'>
                  <div>
                    <Typography className='step-title'>Create Your First Category</Typography>
                    <Typography className='step-subtitle'>Enter Your Details</Typography>
                  </div>
                </div>
              </StepLabel>
              <StepContent>
                <div>
                  {/* <Button variant='contained'>Select Category</Button> */}
                  <TextField
                    id='outlined-basic'
                    size='small'
                    placeholder='Select Category'
                    onClick={handleClickOpen}
                    value={category}
                    onChange={handleChange}
                  />

                  {/* <Typography variant='subtitle1' sx={{ mb: 2 }}>
        Selected: {selectedValue}
      </Typography> */}
                  <Dialog onClose={handleDialogClose} aria-labelledby='simple-dialog-title' open={open}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <DialogTitle id='simple-dialog-title'>Choose business category</DialogTitle>
                      <div style={{ paddingRight: '30px', cursor: 'pointer' }}>
                        <Close onClick={handleDialogClose} />
                      </div>
                      {/* <ListItemAvatar>
            <MuiAvatar>
              <Close  />
            </MuiAvatar>
          </ListItemAvatar> */}
                    </div>
                    <List sx={{ pt: 0, px: '0 !important' }}>
                      {categories.map(category => (
                        <ListItem key={category} disablePadding onClick={() => handleClose(category)}>
                          <Box
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              paddingRight: '10rem',
                              width: '100%'
                            }}
                          >
                            <ListItemButton>
                              <img
                                src='https://mydukaan.s3.ap-south-1.amazonaws.com/grocery.jpg'
                                alt=''
                                style={{ width: 60, height: 60, borderRadius: '3px', marginRight: '12px' }}
                              />
                              <ListItemText primary={category} />
                            </ListItemButton>
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </Dialog>
                </div>

                {/* <Link target='_blank' href='/categories'>
                  <Button variant='contained'>Add Category</Button>
                </Link> */}

                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size='small'> */}
                {/* <InputLabel id="demo-select-small">Category</InputLabel> */}

                {/* <Select
                    labelId='demo-select-small'
                    id='demo-select-small'
                    value={category}
                    // label="Age"

                    onChange={handleChange}
                  >
                    <MenuItem value={'Groceries'}>Groceries</MenuItem>
                    <MenuItem value={'Mobile'}>Mobile</MenuItem>
                    <MenuItem value={'Laptop'}>Laptop</MenuItem>
                  </Select>
                </FormControl> */}
                <div className='button-wrapper'>
                  <Button
                    size='small'
                    color='secondary'
                    variant='outlined'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    Back
                  </Button>
                  <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel StepIconComponent={StepperCustomDot}>
                <div className='step-label'>
                  <div>
                    <Typography className='step-title'>Set Up Your Ecommerce Store</Typography>
                    <Typography className='step-subtitle'>Enter Your Details</Typography>
                  </div>
                </div>
              </StepLabel>
              <StepContent>
                <Link>
                  <Button variant='contained' onClick={handleModalOpen}>
                    Add Product
                  </Button>
                </Link>
                <div className='button-wrapper'>
                  <Button
                    size='small'
                    color='secondary'
                    variant='outlined'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    Back
                  </Button>
                  <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <Box sx={{ mt: 4 }}>
            <Typography>All steps are completed!</Typography>
            <Button size='small' sx={{ mt: 2 }} variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </CardContent>
      {/* Model  */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          onClose={handleModalClose}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <ProductPopup folder='inbox' />
        </Box>
      </Modal>
    </Card>
  )
}

export default StepperVerticalWithoutNumbers
