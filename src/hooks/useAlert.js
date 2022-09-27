import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const style = {
  position: 'absolute',
  top: '20px',
  right: '20px'
  
  // bgcolor: 'null'
  // transform: 'translate(-50%, -50%)',
  // width: 450,
  // bgcolor: 'background.paper',
  // boxShadow: 24,
  // p: 5,
  // borderRadius: '16px'
}

export const useAlert = () => {
  const [alertArray, setAlertArray] = useState([])

  const handleAddAlert = ({ type, text }) => {
    switch (type) {
      case 'error':
        setAlertArray(prevState => [
          ...prevState,
          <Alert key={text} severity='error'>
            This is an error alert — check it out!
          </Alert>
        ])
      case 'success':
        setAlertArray(prevState => [
          ...prevState,
          <Alert key={text} severity='success'>
            This is an error alert — check it out!
          </Alert>
        ])
      case 'info':
        setAlertArray(prevState => [
          ...prevState,
          <Alert key={text} severity='error'>
            This is an error alert — check it out!
          </Alert>
        ])
    }
  }

  return {
    handleAddAlert,
    AlertElement: <Stack sx={{ position: 'fixed', right: '10px', top: '60px' }}>{alertArray}</Stack>
  }
}
