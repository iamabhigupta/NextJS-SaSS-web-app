// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ApplicationCog from 'mdi-material-ui/ApplicationCog'
import Poll from 'mdi-material-ui/Poll'
import Cube from 'mdi-material-ui/Cube'
import AccountSupervisor from 'mdi-material-ui/AccountSupervisor'
import Shopping from 'mdi-material-ui/Shopping'
import Account from 'mdi-material-ui/Account'
import ViewCompact from 'mdi-material-ui/ViewCompact'
import ArrangeBringToFront from 'mdi-material-ui/ArrangeBringToFront'
import Store from 'mdi-material-ui/Store'

const navigation = () => {
  return [
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
  
    // {
    //   title: 'Store',
    //   icon: Store,
    //   children: [
    //     {
    //       title: 'All Store',
    //       path: '/store'
    //     },
    //     {
    //       title: 'Add Store',
    //       path: '/store/new'
    //     }
    //   ]
    // },
    
    {
      title: 'Product',
      icon: Cube,
      children: [
        {
          title: 'All Products',
          path: '/product'
        },
        {
          title: 'Add Products',
          path: '/product/new'
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
      title: 'Account',
      icon: Account,
      path: '/account'
    },
    {
      title: 'Dashboard 2',
      icon: EmailOutline,
      path: '/second-page'
    }
  ]
}

export default navigation
