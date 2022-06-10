import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SettingsIcon from '@mui/icons-material/Settings'

export default function BottomNavigationMenu(props) {
  const { routes } = props
  const [value, setValue] = React.useState(1)
  const ref = React.useRef(null)
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate(routes[value].path)
  }, [value])

  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: `100%` }} ref={ref}>
      <CssBaseline />
      <Paper elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          {routes.map((e, i) => (
            <BottomNavigationAction key={i} label={e.label} icon={e.icon} />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
