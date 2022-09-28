import React, { Fragment, useState,useEffect } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import NewCategory from 'src/views/forms/form-layouts/NewCategory'
import NewCategoryCoollaps from 'src/views/forms/form-layouts/NewCategoryCoollaps'


const New = () => {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    store_id:"",
    status: "Active",
  });


  const [storeData, setStoreData] = useState([]);


  useEffect(() => {
    
    let userData = JSON.parse(window.localStorage.getItem("userData"))

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
        console.log(result.data.data.productCategoryCreate)
        setStoreData(result.data.data.productCategoryCreate)  

    })

 
  
  
  }, []);

  const handleSubmit = () => {

    
    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{    
 
    query: `
    mutation {
      productCategoryCreate(data: {
          store_id: ${storeData[0].id},
          name: "${formData.name}",
          slug: "${formData.name}",
          status: Active,
      }) {
          id,
          store_id,
          name,
          slug,
          image,
          attributes {
              id,
              name,
              status
          }
          status,
          created_at,
          updated_at
      }
  } `
        

    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }

      }).then((result) => {      
        console.log(result)

        toast.success('Category has created successfully !', {
          position: toast.POSITION.TOP_RIGHT
      });


      setTimeout(
        () => router.push('/category')
        , 
        2000
      );

    }).catch(err => {
      console.log(err)
    })

  }


  return (

    <><ToastContainer /><Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <NewCategory formData={formData} setFormData={setFormData} />
      </Grid>
      {/* <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
      <NewCategoryCoollaps />
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
          <Button type='button' color='success' variant='contained' size='large'
            onClick={handleSubmit}
          >
            Add Category
          </Button>
        </Box>
      </Grid>
    </Grid></>
  )
}

export default New
