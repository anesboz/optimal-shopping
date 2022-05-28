import Main from 'views/Main'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Grid, ThemeProvider } from '@mui/material'
import { myTheme } from 'variables/theme'
import Banner from 'components/Banner'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter basename="/optimal-shopping">
        <Grid xs={12} style={{ maxWidth: 600, flex: 1, height: `100vh` }}>
          <Banner />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
