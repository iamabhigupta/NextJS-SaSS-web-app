import { useState, forwardRef, useCallback, useEffect } from 'react'
import axios from 'axios'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import FormLayoutsBasic2 from 'src/views/forms/form-layouts/FormLayoutsBasic2'
import FormLayoutsCollapsible from 'src/views/forms/form-layouts/FormLayoutsCollapsible'
import CircularProgress from '@mui/material/CircularProgress'

import { useRouter } from 'next/router'

const Settings = () => {
  const router = useRouter()

  const [fname, setFname] = useState('')

  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({
    category: '',
    dPrice: '',
    description: '',
    file: '',
    type: '',
    price: '',
    name: ''
  })
  const [storeData, setStoreData] = useState([])

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem('userData'))

    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
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
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    }).then(result => {
      setFname(result.data.data.title)
      // console.log(result.data.)
      setStoreData(result.data.data.storeFindAllByUser)
    })

    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
        query: `
    query getProductById{
      productFindOne(id:${router.query.id}){
    id
    title
    price
    discount
    long_description
    category_id
  }

}
`
      },
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    }).then(result => {
      console.log(result.data.data.productFindOne)
      const { category_id, long_description, discount, title, price, story_id } = result.data.data.productFindOne
      setValues({
        category: category_id,
        description: long_description,
        dPrice: discount,
        name: title,
        price: price,
        type: story_id
      })
      // setStoreData(result.data.data.storeFindAllByUser)
    })
  }, [])

  // const productMediaId = localStorage.getItem("productMediaId")

  const handleClick = event => {
    setLoading(true)
    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: 'post',
      data: {
        query: `
        mutation productUpdate{
          productUpdate(id:${router.query.id},
            data:{
            category_id: ${values['category']},
            title: "${values['name']}",
            short_description: "${values['description']}",
            long_description: "${values['description']}",
            html_content: "${values['description']}",
            price: ${Number(values['price'])},
            discount: ${Number(values['dPrice'])},
            store_id:3,
            status: Active,
            media_ids:"11",
      }) {
          id,
      }
  }


        `
      },
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('accessToken') }
    })
      .then(result => {
        console.log(result)
        router.push('/product')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <FormLayoutsBasic2 setMainValues={setValues} mainValues={values} />
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
          <Button
            disabled={!values['name'] || !values['category'] || loading}
            type='button'
            onClick={event => handleClick(event)}
            color='success'
            variant='contained'
            size='large'
          >
            Update Product
            {loading && <CircularProgress size={25} sx={{ position: 'absolute', right: '-45px' }} />}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Settings
