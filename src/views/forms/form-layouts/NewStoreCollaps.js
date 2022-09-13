// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import NewCategoryContent from './NewCategoryContent'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// Styled component for the Box wrappers in Delivery Options' accordion
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

const NewStoreCoollaps = () => {
  // ** States
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')
  const [focus, setFocus] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [option, setOption] = useState('standard')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const handleBlur = () => setFocus('')

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-1'
          aria-controls='form-layouts-collapsible-content-1'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            Content
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <NewCategoryContent />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </form>
  )
}

export default NewStoreCoollaps
