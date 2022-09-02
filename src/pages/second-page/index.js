// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import DialogCreateApp from 'src/views/pages/dialog-examples/DialogCreateApp'
import EcommerceWeeklySalesBg from 'src/views/dashboards/ecommerce/EcommerceWeeklySalesBg'
import EcommerceSalesThisMonth from 'src/views/dashboards/ecommerce/EcommerceSalesThisMonth'
import EcommerceMarketingSales from 'src/views/dashboards/ecommerce/EcommerceMarketingSales'
import EcommerceActivityTimeline from 'src/views/dashboards/ecommerce/EcommerceActivityTimeline'
import EcommerceImpressionsOrders from 'src/views/dashboards/ecommerce/EcommerceImpressionsOrders'
import EcommerceSalesOverviewWithTabs from 'src/views/dashboards/ecommerce/EcommerceSalesOverviewWithTabs'

import StepperLinearWithValidation from 'src/views/forms/form-wizard/StepperLinearWithValidation'
import Typography from '@mui/material/Typography'

const EcommerceDashboard = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} sm={4}>
        <EcommerceSalesThisMonth title='Total Orders' amount='759' />
      </Grid>
      <Grid item xs={12} sm={4}>
        <EcommerceSalesThisMonth title='Total Sales' amount='483' />
      </Grid>
      <Grid item xs={12} sm={4}>
        <EcommerceSalesThisMonth title='Total Customers' amount='7914' />
      </Grid>
    </Grid>
  )
}

export default EcommerceDashboard
