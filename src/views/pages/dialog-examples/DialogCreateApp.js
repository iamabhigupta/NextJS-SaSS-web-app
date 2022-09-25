// ** React Imports
import { useState, forwardRef ,useCallback} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Check from 'mdi-material-ui/Check'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'
import ArrowRight from 'mdi-material-ui/ArrowRight'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import ApplicationCog from 'mdi-material-ui/ApplicationCog'
import StarOutline from 'mdi-material-ui/StarOutline'
import ClipboardOutline from 'mdi-material-ui/ClipboardOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** Hook Imports
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Tab Content Imports
import DialogTabDetails from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabDetails'
import DialogTabBilling from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabBilling'
import DialogTabDatabase from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabDatabase'
import DialogTabFramework from 'src/views/pages/dialog-examples/create-app-tabs/DialogTabFramework'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const TabLabel = props => {
  const { icon, title, subtitle, active } = props

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3.5,
            ...(active ? { color: 'common.white', backgroundColor: 'primary.main' } : { color: 'text.primary' })
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant='body2'>{title}</Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled', textTransform: 'none' }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
const tabsArr = ['detailsTab', 'frameworkTab', 'DatabaseTab', 'submitTab']

const DialogCreateApp = () => {

  const router = useRouter()

  // ** States
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('detailsTab')

  // ** Hook
  const { settings } = useSettings()

  // ** Var
  const { direction } = settings

  const handleClose = () => {
    setShow(false)
    setActiveTab('detailsTab')
  }



  const [fname, setFname] = useState("")
  const [fstore, setFstore] = useState("")
  const [fetype, setFetype] = useState("")
  const [stype, setFstype] = useState("")
  const [ffile, setFfile] = useState([])
  const [mediaId, setMediaId] = useState("")

  const userData = JSON.parse(window.localStorage.getItem('userData'))
  
  const handleCreateSite = (params, errorCallback) => {
    
    // console.log("mediaID=====>"+mediaId)

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{    
 
    query: `

    mutation {
      storeCreate(data: {
          user_id: ${userData.id},
          name: "${params.name}",
          site_name: "${params.name}",
          description: "N/A",
          media_ids: "${mediaId}",
          status: Active
      }) {
          id,
          user_id,
          name,
          site_name,
          description,
          image,
          status,
          created_at,
          updated_at
      }
  }

        `
        

    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }

      }).then((result) => {      
       localStorage.setItem("store_id", result.data.data.storeCreate.id);
        console.log(result)

    }).catch(err => {
      if (errorCallback) errorCallback(err)
    })
  }







  const NextArrow = direction === 'ltr' ? ArrowRight : ArrowLeft
  const PreviousArrow = direction === 'ltr' ? ArrowLeft : ArrowRight

  const renderTabFooter = () => {
    const prevTab = tabsArr[tabsArr.indexOf(activeTab) - 1]
    const nextTab = tabsArr[tabsArr.indexOf(activeTab) + 1]

    return (
      <Box sx={{ mt: 8.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant='outlined'
          color='secondary'
          startIcon={<PreviousArrow />}
          disabled={activeTab === 'detailsTab'}
          onClick={() => setActiveTab(prevTab)}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          endIcon={activeTab === 'submitTab' ? <Check /> : <NextArrow />}
          color={activeTab === 'submitTab' ? 'success' : 'primary'}
          onClick={() => {           

            if (activeTab !== 'submitTab') {
              setActiveTab(nextTab)
            } else {

              // {fname} -- {fstore} -- {fetype} -- {stype}

              handleCreateSite(
                {
                  name:fname,
                  fstore:fstore,
                  fetype:fetype,
                  stype:stype,
                }
              )
              handleClose()
            }
          }}
        >
          {activeTab === 'submitTab' ? 'Submit' : 'Next'}
        </Button>
      </Box>
    )
  }

  return (
    <>
      <Button variant='contained' onClick={() => setShow(true)}>
        Create Site
      </Button>
      <Dialog
        fullWidth
        open={show}
        scroll='body'
        maxWidth='md'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            position: 'relative',
            pr: { xs: 5, sm: 12 },
            pl: { xs: 4, sm: 11 },
            pt: { xs: 8, sm: 12.5 },
            pb: { xs: 5, sm: 12.5 }
          }}
        >
          <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <Close />
          </IconButton>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Create Site
            </Typography>
            <Typography variant='body2'>Provide data with this form to create your site.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
            <TabContext value={activeTab}>
              <TabList
                orientation='vertical'
                onChange={(e, newValue) => setActiveTab(newValue)}
                sx={{
                  border: 0,
                  minWidth: 200,
                  '& .MuiTabs-indicator': { display: 'none' },
                  '& .MuiTabs-flexContainer': {
                    alignItems: 'flex-start',
                    '& .MuiTab-root': {
                      width: '100%',
                      alignItems: 'flex-start'
                    }
                  }
                }}
              >
                <Tab
                  disableRipple
                  value='detailsTab'
                  label={
                    <TabLabel
                      title='Details'
                      subtitle='Enter Details'
                      icon={<ClipboardOutline />}
                      active={activeTab === 'detailsTab'}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='frameworkTab'
                  label={
                    <TabLabel
                      title='Type'
                      icon={<StarOutline />}
                      subtitle='Select Type'
                      active={activeTab === 'frameworkTab'}
                    />
                  }
                />
                <Tab
                  disableRipple
                  value='DatabaseTab'
                  label={
                    <TabLabel
                      title='Category'
                      active={activeTab === 'DatabaseTab'}
                      subtitle='Select Category'
                      icon={<ChartDonut />}
                    />
                  }
                />
                {/* <Tab
                  disableRipple
                  value='paymentTab'
                  label={
                    <TabLabel
                      title='Billing'
                      active={activeTab === 'paymentTab'}
                      subtitle='Payment details'
                      icon={<CreditCardOutline />}
                    />
                  }
                /> */}
                <Tab
                  disableRipple
                  value='submitTab'
                  label={
                    <TabLabel title='Submit' subtitle='Submit' active={activeTab === 'submitTab'} icon={<Check />} />
                  }
                />
              </TabList>
              <TabPanel value='detailsTab' sx={{ flexGrow: 1 }}>
                <DialogTabDetails fName = {text => setFname(text)} fStore = {text => setFstore(text)} fLfile = {text => setFfile(text)} fmediaID = {text => setMediaId(text)} />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel value='frameworkTab' sx={{ flexGrow: 1 }}>
                <DialogTabFramework fEtype = {text => setFetype(text)} />
                {renderTabFooter()}
              </TabPanel>
              <TabPanel value='DatabaseTab' sx={{ flexGrow: 1 }}>
                <DialogTabDatabase Fstype = {text => setFstype(text)} />
                {renderTabFooter()}
              </TabPanel>
              {/* <TabPanel value='paymentTab' sx={{ flexGrow: 1 }}>
                <DialogTabBilling />
                {renderTabFooter()}
              </TabPanel> */}
              <TabPanel value='submitTab' sx={{ flexGrow: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6'>Submit</Typography>
                  <Typography variant='body2'>Submit to kickstart your Store.</Typography>

                  <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                    <img alt='submit-img' src={`/images/pages/create-app-dialog-illustration-${settings.mode}.png`} />
                  </Box>
                </Box>
                {renderTabFooter()}
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DialogCreateApp
