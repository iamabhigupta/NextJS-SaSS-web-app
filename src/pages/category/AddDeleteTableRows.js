import { useState } from 'react'
import TableRows from './TableRows'
import axios from 'axios'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function AddDeleteTableRows({ cdata }) {
  const [rowsData, setRowsData] = useState([])

  const addTableRows = () => {
    const rowsInput = {
      key: '',
      value: '',
    }
    setRowsData([...rowsData, rowsInput])
  }

  const deleteTableRows = index => {
    const rows = [...rowsData]
    rows.splice(index, 1)
    setRowsData(rows)
  }

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target
    const rowsInput = [...rowsData]
    rowsInput[index][name] = value
    setRowsData(rowsInput)
  }

  console.log(cdata)

  if(cdata.cId){

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data:{    
 
    query: `
    mutation {
      productCategoryAttributeCreate(category_id:${cdata.cId}, data: {
          name: "df",
          key: "df",
          value: "Colorf",
          status: Active,
      }) {
          id
          category_id
          name
          key
          value
          status
          created_at
          updated_at
      }
  }`
        

    },
    headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }

      }).then((result) => {      
        console.log(result)


    }).catch(err => {
      console.log(err)
    })
   
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '33.33%' }} align='center'>
                Key
              </TableCell>
              <TableCell sx={{ width: '33.33%' }} align='center'>
                Value
              </TableCell>
              <TableCell sx={{ width: '33.33%' }} align='center'>
                <Button variant='outlined' color='secondary' sx={{ width: '70%' }} onClick={addTableRows}>
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
        </Table>
      </TableContainer>
    </>
  )
}

export default AddDeleteTableRows

