// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Store from 'mdi-material-ui/Store'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'

const TabDatabase = ({Fstype}) => {
  const [value, setValue] = useState('kirana')
  
  Fstype(value)

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Select Category
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => setValue('kirana')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Store />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Kirana</Typography>
            </Box>
          </Box>
          <Radio value='kirana' onChange={handleChange} checked={value === 'kirana'} />
        </Box>
        <Box
          onClick={() => setValue('fashion')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='success' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Store />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Fashion</Typography>
            </Box>
          </Box>
          <Radio value='fashion' onChange={handleChange} checked={value === 'fashion'} />
        </Box>
        <Box
          onClick={() => setValue('hotel')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Store />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Hotel</Typography>
            </Box>
          </Box>
          <Radio value='hotel' onChange={handleChange} checked={value === 'hotel'} />
        </Box>
        <Box
          onClick={() => setValue('mobile')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='error' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Store />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Mobiles and Tablets</Typography>
            </Box>
          </Box>
          <Radio value='mobile' onChange={handleChange} checked={value === 'mobile'} />
        </Box>
        <Box
          onClick={() => setValue('groceries')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Store />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Groceries</Typography>
            </Box>
          </Box>
          <Radio value='groceries' onChange={handleChange} checked={value === 'groceries'} />
        </Box>
      </Box>
    </Box>
  )
}

export default TabDatabase
