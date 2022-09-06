// ** MUI Imports
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon imports
import ArrowRight from 'mdi-material-ui/ArrowRight'

// Styled component for the trophy image
const TrophyImg = styled('img')(({ theme }) => ({
  right: 22,
  bottom: 0,
  width: 106,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 95
  }
}))

const CrmAward = ({ title1, title2, link, color }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>{title1}</Typography>
        <Typography variant='h6'>{title2}</Typography>
        <Link href={link}>
          <Button color={color} size='small' variant='contained' sx={{ marginTop: '20px' }}>
            <ArrowRight />
          </Button>
        </Link>
        <TrophyImg alt='trophy' src='/images/cards/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default CrmAward
