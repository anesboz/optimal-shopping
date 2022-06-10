import { Alert, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { getCart, updateCart } from 'utils/utils'

export default function AlerCostum(props) {
  const { element } = props
  const product = element?.Product

  const [show, setShow] = useState(false)
  const [timeOut, setTimeOut] = useState(null)

  useEffect(() => {
    if (product == null) return
    clearTimeout(timeOut)
    setShow(true)
    const t = setTimeout(() => {
      setShow(false)
    }, 2000)
    setTimeOut(t)
  }, [element])

  return (
    <Alert
      style={{
        flex: 1,
        margin: `4px 40px`,
        visibility: show ? `visible` : `hidden`,
      }}
      action={
        <Button
          color="inherit"
          size="small"
          onClick={() => {
            const tmp = getCart().filter((e) => e != element)
            updateCart(tmp)
          }}
        >
          UNDO
        </Button>
      }
    >
      {product}
    </Alert>
  )
}
