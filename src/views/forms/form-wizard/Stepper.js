// ** React Imports
import { useState } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ** Third Party Imports
import clsx from 'clsx'
import toast from 'react-hot-toast'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import DialogCreateApp from 'src/views/pages/dialog-examples/DialogCreateApp'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

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

  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    mutation {
      productCategoryCreate(data: {
          name: "${e.target.value}",
          slug: "${e.target.value}",
          status: Active,
      }) {
          id
          name
          slug
          image
          attributes {
              id
              name
              status
          }
          status
          created_at
          updated_at
      }
  }  `    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result)
    })
    
  };

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
                {/* <Link target='_blank' href='/categories'>
                  <Button variant='contained'>Add Category</Button>
                </Link> */}
 <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      {/* <InputLabel id="demo-select-small">Category</InputLabel> */}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={category}
        // label="Age"
        onChange={handleChange}
      >
      
        <MenuItem value={'Groceries'}>Groceries</MenuItem>
        <MenuItem value={'Mobile'}>Mobile</MenuItem>
        <MenuItem value={'Laptop'}>Laptop</MenuItem>
      </Select>
    </FormControl>
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
                <Link target='_blank' href='/product/add-product/'>
                  <Button variant='contained'>Add Product</Button>
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
    </Card>
  )
}

export default StepperVerticalWithoutNumbers
