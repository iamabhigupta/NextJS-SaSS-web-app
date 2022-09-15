import { useState, forwardRef ,useCallback,useEffect} from 'react'
import axios from 'axios'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/forms/form-layouts/FormLayoutsBasic'
import FormLayoutsCollapsible from 'src/views/forms/form-layouts/FormLayoutsCollapsible'
import { useRouter } from 'next/router'

const Settings = () => {

  const router = useRouter()

  const [fname, setFname] = useState("")
  const [fcatname, setFcatname] = useState("")
  const [fdprice, setFdprice] = useState("")
  const [fprice, setFprice] = useState("")
  const [fpdesc, setFpdesc] = useState("")
  const [fpstore, setFpstore] = useState("")
  const [fpcat, setFpcat] = useState("")


  const [storeData, setStoreData] = useState([]);
  const userData = JSON.parse(window.localStorage.getItem('userData'))
  
  useEffect(() => {

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
    query {
      storeFindAllByUser(user_id: ${userData.id}) {
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
  }`    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result.data.data.storeFindAllByUser)
        setStoreData(result.data.data.storeFindAllByUser)

    })
  
  
  }, [userData]);

  // const productMediaId = localStorage.getItem("productMediaId")


  const handleClick = (event) => {
    
    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{   
    query: `
          
    mutation {
      productCreate(data: {
          store_id: ${storeData[0].id},
          category_id: ${fpcat},
          title: "${fname}",
          short_description: "${fpdesc}",
          long_description: "${fpdesc}",
          html_content: "${fpdesc}",
          price: ${fprice},
          discount: ${fdprice},
          country_of_origin: "India",
          media_ids: "${localStorage.getItem("productMediaId")}",
          stock: 10,
          status: Active,
      }) {
          id,
          store_id,
          category_id,
          title,
          short_description,
          long_description,
          html_content,
          price,
          discount,
          country_of_origin,
          image,
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
  }   
   
        `    
    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
      }).then((result) => {      
        console.log(result)
        router.push('/product')

    })


  }

  return (
    <Grid container spacing={6} className='match-height'>

      <Grid item xs={12}>
        <FormLayoutsBasic 
        fName = {text => setFname(text)} 
        fCatName = {text => setFcatname(text)} 
        fDprice = {text => setFdprice(text)} 
        fPrice = {text => setFprice(text)} 
        fPdesc = {text => setFpdesc(text)} 
        fstore = {text => setFpstore(text)} 
        fcategory = {text => setFpcat(text)} 
        
        />
      </Grid>
      {/* <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
        <FormLayoutsCollapsible />
      </Grid> */}
      <Grid item xs={12}>
        <Box
          sx={{
            gap: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button type='button' onClick={event => handleClick(event)} color='success' variant='contained' size='large'>
            Add Product
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Settings
