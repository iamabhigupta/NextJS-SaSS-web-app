// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import StepperAlternativeLabel from 'src/views/forms/form-wizard/StepperAlternativeLabel'
import StepperVerticalWithNumbers from 'src/views/forms/form-wizard/StepperVerticalWithNumbers'
import StepperLinearWithValidation from 'src/views/forms/form-wizard/StepperLinearWithValidation'
import Stepper from 'src/views/forms/form-wizard/Stepper'

const FormWizard = () => {
  return (
    <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid item xs={12} md={6}>
        <Stepper />
      </Grid>
    </Grid>
  )
}

export default FormWizard
