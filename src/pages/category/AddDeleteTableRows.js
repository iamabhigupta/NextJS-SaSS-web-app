import { useState } from 'react'
import TableRows from './TableRows'

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

function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([])

  const addTableRows = () => {
    const rowsInput = {
      fullName: '',
      emailAddress: '',
      salary: ''
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

// // ** MUI Imports
// import Paper from '@mui/material/Paper'
// import Table from '@mui/material/Table'
// import TableRow from '@mui/material/TableRow'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'

// const createData = (name, calories, fat, carbs, protein) => {
//   return { name, calories, fat, carbs, protein }
// }

// const rows = [createData('Frozen yoghurt', 159), createData('Ice cream sandwich', 237)]

// const AddDeleteTableRows = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label='simple table'>
//         <TableHead>
//           <TableRow>
//             <TableCell>Key</TableCell>
//             <TableCell align='left'>Value</TableCell>
//             <TableCell align='left'>Update</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell align='left'>
//               <TextField id='outlined-basic' placeholder='Enter Key' />
//             </TableCell>
//             <TableCell align='left'>
//               <TextField id='outlined-basic' placeholder='Enter Value' />
//             </TableCell>
//             <TableCell align='left'>
//               <Button variant='contained' color='secondary'>
//                 Secondary
//               </Button>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default AddDeleteTableRows
