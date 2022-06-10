import { IconButton } from '@mui/material'
import DataGridDemo from 'components/DataGridGlobalView'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { getCart, updateCart, ObjGroupBy } from 'utils/utils'
import DataGridSelected from 'components/DataGridSelected'

import RestartAltIcon from '@mui/icons-material/RestartAlt'

export default function ShoppingCart(props) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])

  useEffect(() => {
    let arr = getCart() ?? []
    arr = arr.map((e) => {
      const clone = { ...e }
      delete clone.Product
      const min = Math.min(...Object.values(clone).filter((e) => e))
      const cheapest = Object.entries(clone).find(([k, v]) => v === min)[0]
      return { cheapest, ...e }
    })

    setSelected(ObjGroupBy(arr, `cheapest`))
  }, [])

  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <div style={{ display: `flex`, justifyContent: `flex-end` }}>
        <IconButton onClick={() => {
          updateCart([])
          navigate(`/`)
        }}>
          <RestartAltIcon />
        </IconButton>
      </div>

      {Object.entries(selected).map((e, i) => {
        const [key, value] = e
        return (
          <div key={i}>
            <h4>{key}</h4>
            <DataGridSelected
              data={value.map((x) => {
                const clone = { ...x }
                delete clone.cheapest
                return clone
              })}
            />
          </div>
        )
      })}
    </div>
  )
}
