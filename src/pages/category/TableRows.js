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

function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { fullName, emailAddress, salary } = data

    return (
      <>
        <TableBody>
          <TableRow sx={{ width: '100%' }}>
            <TableCell align='left' sx={{ width: '33.33%' }}>
              <TextField
                id='outlined-basic'
                sx={{ width: '100%' }}
                placeholder='Enter Key'
                type='text'
                value={emailAddress}
                onChange={evnt => handleChange(index, evnt)}
                name='emailAddress'
              />
            </TableCell>

            <TableCell align='left' sx={{ width: '33.33%' }}>
              <TextField
                id='outlined-basic'
                sx={{ width: '100%' }}
                placeholder='Enter Value'
                type='text'
                value={fullName}
                onChange={evnt => handleChange(index, evnt)}
                name='fullName'
              />
            </TableCell>

            <TableCell sx={{ width: '33.33%' }} align='center'>
              <Button variant='outlined' sx={{ width: '70%' }} color='secondary' onClick={() => deleteTableRows(index)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    )
  })
}

export default TableRows
