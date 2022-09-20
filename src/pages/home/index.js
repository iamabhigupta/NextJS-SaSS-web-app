import React, { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

const Home = () => {

  const router = useRouter()

  const qr = qs.parse(location.search)
  const email = window.atob(qr.j$uio)
  
  axios({
    url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
    method: 'post',
    data: {
      query: `
      mutation {
        login(email: "${email}", password: "J7$#@!fgh") {
            token
            user {
                id
                role_id
                name
                phone
                email
                username
                status
                role_id
                created_at
                updated_at
            }
        }
    }
        `
    }
  }).then((result) => {
    
    if(result.data.data.login.user.role_id == 6){
      result.data.data.login.user.role = 'admin'
    }

    window.localStorage.setItem('accessToken', result.data.data.login.token)
    console.log(result.data)
    axios
    .get( process.env.NEXT_PUBLIC_API_ENDPOINT , {
      headers: {
        Authorization: window.localStorage.getItem('accessToken')
      }
    })

      const returnUrl = router.query.returnUrl
      setUser({ ...result.data.data.login.user })
      window.localStorage.setItem('userData', JSON.stringify(result.data.data.login.user))
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
      router.replace(redirectURL)

  })

  return (
   <div>
     ssss
   </div>
  )
}
Home.guestGuard = true
Home.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Home
