// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import Store from 'mdi-material-ui/Store'
import Vuejs from 'mdi-material-ui/Vuejs'
import Angular from 'mdi-material-ui/Angular'
import Laravel from 'mdi-material-ui/Laravel'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'

const TabFramework = () => {
  const [value, setValue] = useState('react')
  const [option, setOption] = useState('standard')

  const BoxWrapper = styled(Box)(({ theme }) => ({
    borderWidth: 1,
    display: 'flex',
    cursor: 'pointer',
    borderStyle: 'solid',
    padding: theme.spacing(5),
    borderColor: theme.palette.divider,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }))

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Ecommerce Type
      </Typography>
      <BoxWrapper
        onClick={() => setOption('standard')}
        sx={option === 'standard' ? { borderColor: 'primary.main' } : {}}
      >
        <Radio
          value='standard'
          checked={option === 'standard'}
          name='form-layouts-collapsible-options-radio'
          inputProps={{ 'aria-label': 'Standard Delivery' }}
          sx={{ mr: 2, ml: -2.5, mt: -2.5, alignItems: 'flex-start' }}
        />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 600 }}>Physical Goods</Typography>
            {/* <Typography sx={{ fontWeight: 700 }}>Free</Typography> */}
          </Box>
          {/* <Typography variant='body2'>Friday, 15 Nov - Monday, 18 Nov</Typography> */}
        </Box>
      </BoxWrapper>
      <BoxWrapper onClick={() => setOption('express')} sx={option === 'express' ? { borderColor: 'primary.main' } : {}}>
        <Radio
          value='express'
          checked={option === 'express'}
          name='form-layouts-collapsible-options-radio'
          inputProps={{ 'aria-label': 'Express Delivery' }}
          sx={{ mr: 2, ml: -2.5, mt: -2.5, alignItems: 'flex-start' }}
        />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 600 }}>Digital Goods</Typography>
            {/* <Typography sx={{ fontWeight: 700 }}>$5.00</Typography> */}
          </Box>
          {/* <Typography variant='body2'>Friday, 15 Nov - Sunday, 17 Nov</Typography> */}
        </Box>
      </BoxWrapper>
      <BoxWrapper
        onClick={() => setOption('overnight')}
        sx={option === 'overnight' ? { borderColor: 'primary.main' } : {}}
      >
        <Radio
          value='overnight'
          checked={option === 'overnight'}
          name='form-layouts-collapsible-options-radio'
          inputProps={{ 'aria-label': 'Overnight Delivery' }}
          sx={{ mr: 2, ml: -2.5, mt: -2.5, alignItems: 'flex-start' }}
        />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 600 }}>None</Typography>
            {/* <Typography sx={{ fontWeight: 700 }}>$10.00</Typography> */}
          </Box>
          {/* <Typography variant='body2'>Friday, 15 Nov - Saturday, 16 Nov</Typography> */}
        </Box>
      </BoxWrapper>
    </Box>
  )
}

export default TabFramework
