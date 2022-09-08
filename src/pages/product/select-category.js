import { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import CategoryPopup from 'src/views/apps/email/CategoryPopup'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import Modal from '@mui/material/Modal'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'

// ** Icon Imports
import CartPlus from 'mdi-material-ui/CartPlus'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CrmAward from 'src/views/dashboards/crm/CrmAward'
import CrmTable from 'src/views/dashboards/crm/CrmTable'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
import CrmExternalLinks from 'src/views/dashboards/crm/CrmExternalLinks'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import CrmPaymentHistory from 'src/views/dashboards/crm/CrmPaymentHistory'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import CrmProjectTimeline from 'src/views/dashboards/crm/CrmProjectTimeline'
import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
import CrmSocialNetworkVisits from 'src/views/dashboards/crm/CrmSocialNetworkVisits'
import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'
import { rows } from 'src/@fake-db/table/product-list-data'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '50%',
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4
}

const SelectCategory = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [fdata, setFdata] = useState([])

  const handleChange = (e, val) => {
    let isChecked = e.target.checked
    console.log(isChecked)

    if (isChecked) {
      fdata.push(val)
      console.log(fdata)
    } else {
      setFdata(current =>
        current.filter(fdata => {
          return fdata.id !== val.id
        })
      )
    }
  }

  const handleSubmit = () => {
    console.log(fdata)

    if (fdata.length > 0) {
      fdata.forEach((data, index) => {
        axios({
          url: process.env.NEXT_PUBLIC_API_ENDPOINT,
          method: 'post',
          data: {
            query: `
        mutation {
          productCreate(data: {
              category_id: 1,
              title: "${data.title}",
              short_description: "${data.short_description}",
              long_description: "${data.short_description}",
              html_content: "${data.short_description}",
              price: ${data.price},
              discount: ${data.discount},
              country_of_origin: "India",
              status: Active,
          }) {
              id,
              category_id,
              title,
              short_description,
              long_description,
              html_content,
              price,
              discount,
              country_of_origin,
              medias {
                  id,
                  src
              },
              attributes {
                  name,
                  value
              },
              faqs {
                  id,
                  question,
                  answer,
              },
              stock,
              status,
              created_at,
              updated_at
          }
      } `
          },
          headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
        }).then(result => {
          console.log(result)
        })
      })
    }

    router.push('/product')
  }

  return (
    <div>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={4} onClick={handleOpen}>
          <CrmAward title1='Fruits &' title2='Vegetables' color='success' />
        </Grid>
        <Grid item xs={12} md={4} onClick={handleOpen}>
          <CrmAward title1='Grocery & ' title2='Essentials' color='warning' />
        </Grid>
        <Grid item xs={12} md={4} onClick={handleOpen}>
          <CrmAward title1='Restaurants &' title2='Fast Food' color='error' />
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        {/* <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Dummy Readymade product data !
          </Typography>
          <Divider />

          <nav aria-label='main mailbox folders'>
            <List>
              {rows.map((data, i) => {
                return (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              label={data.title}
                              value={data.id}
                              onChange={e => handleChange(e, data)}
                            />
                          </FormGroup>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                )
              })}
            </List>
          </nav>

          <Grid container direction='row' justifyContent='right'>
            <Button variant='contained' item onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Box> */}
        <Box
          onClose={handleClose}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <CategoryPopup folder='inbox' />
        </Box>
      </Modal>
    </div>
  )
}

export default SelectCategory
