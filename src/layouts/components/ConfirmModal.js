import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
  borderRadius: '16px'
}

export const ConfirmModal = ({
  title,
  description,
  cancelFunction,
  closeAutomatically = true,
  confirmFunction,
  open,
  handleClose,
  loading
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Box sx={{ justifyContent: 'space-between', display: 'flex', mt: '20px' }}>
          <Button
            variant={'contained'}
            color={'success'}
            onClick={() => {
              confirmFunction && confirmFunction()
              closeAutomatically && handleClose()
            }}
            disabled={loading}
          >
            Confirm
            {loading && <CircularProgress size={20} sx={{ position: 'absolute', right: '-35px' }} />}
          </Button>
          <Button
            variant={'contained'}
            color={'error'}
            onClick={() => {
              cancelFunction && cancelFunction()
              closeAutomatically && handleClose()
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
