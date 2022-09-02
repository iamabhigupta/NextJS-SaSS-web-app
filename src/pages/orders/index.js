// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TableBasicSort from 'src/views/table/data-grid/TableBasicSort' 
import EcommerceTable from 'src/views/dashboards/ecommerce/EcommerceTable'
import EcommerceTotalVisits from 'src/views/dashboards/ecommerce/EcommerceTotalVisits'
import EcommerceVisitsByDay from 'src/views/dashboards/ecommerce/EcommerceVisitsByDay'
import EcommerceLiveVisitors from 'src/views/dashboards/ecommerce/EcommerceLiveVisitors'
import EcommerceSalesOverview from 'src/views/dashboards/ecommerce/EcommerceSalesOverview'
import EcommerceWeeklySalesBg from 'src/views/dashboards/ecommerce/EcommerceWeeklySalesBg'
import EcommerceSalesThisMonth from 'src/views/dashboards/ecommerce/EcommerceSalesThisMonth'
import EcommerceMarketingSales from 'src/views/dashboards/ecommerce/EcommerceMarketingSales'
import EcommerceActivityTimeline from 'src/views/dashboards/ecommerce/EcommerceActivityTimeline'
import EcommerceImpressionsOrders from 'src/views/dashboards/ecommerce/EcommerceImpressionsOrders'
import EcommerceSalesOverviewWithTabs from 'src/views/dashboards/ecommerce/EcommerceSalesOverviewWithTabs'

import StepperLinearWithValidation from 'src/views/forms/form-wizard/StepperLinearWithValidation'
import Typography from '@mui/material/Typography'

const Orders = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6} className='match-height'>
        <Grid container item xs={9}>
            <Typography variant='h5'>Orders</Typography>
          </Grid> <Grid item xs={12} sm={6} md={4}>
            <CardStatisticsCharacter
              data={{
                stats: '27',
                title: 'New Orders',
                chipColor: 'primary',
                trendNumber: '+1.6%',
                chipText: 'Today',
                src: '/images/cards/card-stats-img-1.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardStatisticsCharacter
              data={{
                 stats: '27',
                title: 'Pending Orders',
                trend: 'negative',
                chipColor: 'success',
                trendNumber: '-25.5%',
                chipText: 'Last Month',
                src: '/images/cards/card-stats-img-2.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardStatisticsCharacter
              data={{
               stats: '27',
                title: 'Delivered Orders',
                trend: 'negative',
                chipColor: 'success',
                trendNumber: '-25.5%',
                chipText: 'Last Month',
                src: '/images/cards/card-stats-img-3.png'
              }}
            />
          </Grid>
          <Grid item xs={12}>
        <TableBasicSort />
      </Grid> 
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default Orders
