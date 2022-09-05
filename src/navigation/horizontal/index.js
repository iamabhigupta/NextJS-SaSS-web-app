// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ApplicationCog from 'mdi-material-ui/ApplicationCog'
import Poll from 'mdi-material-ui/Poll'
import Cube from 'mdi-material-ui/Cube'
import AccountSupervisor from 'mdi-material-ui/AccountSupervisor'
import Shopping from 'mdi-material-ui/Shopping'
import ViewCompact from 'mdi-material-ui/ViewCompact'
import ArrangeBringToFront from 'mdi-material-ui/ArrangeBringToFront'

const navigation = () => [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/dashboard'
  },

  {
    title: 'Orders',
    icon: Shopping,
    path: '/orders'
  },
  {
    title: 'Category',
    icon: ArrangeBringToFront,
    children: [
      {
        title: 'All Category',
        path: '/category'
      },
      {
        title: 'Add Category',
        path: '/category/new'
      }
    ]
  },
  {
    title: 'Product',
    icon: Cube,
    children: [
      {
        title: 'All Products',
        path: '/product'
      },
      {
        title: 'Select Category',
        path: '/product/select-category'
      }
    ]
  },
  {
    title: 'Customers',
    icon: AccountSupervisor,
    path: '/customers'
  },
  {
    title: 'Report',
    icon: Poll,
    path: '/report'
  },
  {
    title: 'Create Combination',
    icon: ViewCompact,
    path: '/create-combination'
  },
  {
    title: 'Site Configuration',
    icon: ApplicationCog,
    path: '/site-configuration'
  },
  {
    title: 'Dashboard 2',
    icon: EmailOutline,
    path: '/second-page'
  }
]

export default navigation