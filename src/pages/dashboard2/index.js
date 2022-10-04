// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStats from './components/CardStats'
import SalesOverview from './components/SalesOverview'
import Overview from './components/Overview'
import TotalSales from './components/TotalSales'
import TotalRevenue from './components/TotalRevenue'
import LastOrder from './components/LastOrder'
import WeeklySales from './components/WeeklySales'
import TotalProfit from './components/TotalProfit'
import Performance from './components/Performance'
import Transactions from './components/Transactions'
import Report from './components/Report'
import Logistics from './components/Logistics'
import SalesBySources from './components/SalesBySources'
import CardTransactions from './components/CardTransactions'
import CardMeetingSchedule from './components/CardMeetingSchedule'
import CardSocialNetworkVisits from './components/CardSocialNetworkVisits'
import PaymentHistory from './components/PaymentHistory'
import CustomerTable from './components/CustomerTable'

// ** Icon Imports
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import Link from 'mdi-material-ui/Link'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const EcommerceDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={12} sm={6} md={3}>
            <CardStats
              data={{
                stats: '8.14k',
                title: 'Orders',
                chipColor: 'primary',
                trendNumber: '+15.6%',
                chipText: 'Year of 2022',
                src: '/images/cards/card-stats-img-1.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardStats
              data={{
                stats: '12.2k',
                trend: 'negative',
                title: 'Traffic',
                chipColor: 'success',
                trendNumber: '-25.5%',
                chipText: 'Last Month',
                src: '/images/cards/card-stats-img-2.png'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalSales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalRevenue
              stats='$13.4k'
              color='success'
              trendNumber='+38%'
              title='Total Sales'
              icon={<CurrencyUsd />}
              chipText='Last Six Month'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Overview />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <LastOrder />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <TotalProfit />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Performance />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Transactions />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Report />
              </Grid>
              <Grid item xs={6}>
                <TotalRevenue
                  stats='$13.4k'
                  color='success'
                  trendNumber='+38%'
                  title='Total Sales'
                  icon={<CurrencyUsd />}
                  chipText='Last Six Month'
                />
              </Grid>
              <Grid item xs={6}>
                <TotalRevenue
                  color='info'
                  stats='142.8k'
                  icon={<Link />}
                  trendNumber='+62%'
                  chipText='Last One Year'
                  title='Total Impressions'
                />
              </Grid>
              <Grid item xs={6}>
                <Logistics />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <SalesBySources />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardTransactions />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardMeetingSchedule />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardSocialNetworkVisits />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PaymentHistory />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomerTable />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
