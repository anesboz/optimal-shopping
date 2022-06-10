import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { myTheme } from 'variables/theme'
import Banner from 'components/Banner'
import { routes } from 'routes'
import BottomNavigationMenu from 'components/BottomNavigationMenu'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCart, getData } from 'actions/localstorage/generalActions'

function App(props) {
  const { refresh } = props.mainBranch
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    setData(getData())
    setSelected(getCart())
  }, [refresh])

  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter basename="/optimal-shopping">
        <div
          style={{
            position: `relative`,
            maxWidth: 600,
            flex: 1,
            height: `100%`,
            backgroundColor: `white`,
            overflow: 'hidden'
          }}
        >
          <Banner />
          <div style={{ padding: 30 }}>
            <Routes>
              {routes.map((e, i) => {
                return (
                  <Route
                    key={i}
                    path={e.path}
                    element={<e.element data={data} selected={selected} />}
                  />
                )
              })}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div> 
          <BottomNavigationMenu routes={routes} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(App)
