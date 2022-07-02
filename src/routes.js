import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SettingsIcon from '@mui/icons-material/Settings'
import Settings from 'views/Settings'
import AllProducts from 'views/AllProducts'
import Cart from 'views/Cart'

export const routes = [
  {
    label: `Tous les produits`,
    icon: <FormatListBulletedIcon />,
    path: `/AllProducts`,
    element: AllProducts,
  },
  {
    label: `Mon panier`,
    icon: <AddShoppingCartIcon />,
    path: `/`,  
    element: Cart,
  },
  {
    label: `Paramètres`,
    icon: <SettingsIcon />,
    path: `/settings`,
    element: Settings,
  },
]
