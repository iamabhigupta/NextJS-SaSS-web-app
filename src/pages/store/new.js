import React, { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import NewStore from 'src/views/forms/form-layouts/NewStore'
import NewStoreCollaps from 'src/views/forms/form-layouts/NewStoreCollaps'

const StoreNew = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    status: "Active",
  });

  let users = JSON.parse(window.localStorage.getItem("userData"))

  // console.log(users.id)

  const handleSubmit = () => {

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{    
 
    query: `
    mutation {
      storeCreate(data: {
          user_id: ${users.id},
          name: "${formData.name}",
          description: "${formData.name}",
          status: Active
      }) {
          id,
          user_id,
          name,
          description,
          status,
          created_at,
          updated_at
      }
  } `
        

    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }

      }).then((result) => {      
        console.log(result)

        toast.success('Store has created successfully !', {
          position: toast.POSITION.TOP_RIGHT
      });


      setTimeout(
        () => router.push('/store')
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
        <NewStore formData={formData} setFormData={setFormData} />
      </Grid>
      {/* <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
      <NewStoreCollaps />
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
            Add Store
          </Button>
        </Box>
      </Grid>
    </Grid></>
  )
}

export default StoreNew
