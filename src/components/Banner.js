import React from 'react'
import { Button } from '@mui/material'

export default function Banner() {
  return (
    <div
      style={{
        position: "relative",
        height: 80,
        width: `100%`,
        backgroundColor: `#f25c5a`,
      }}
      className="center"
    >
      <h2
        style={{
          color: `yellow`,
          cursor: 'pointer',
        }}
        onClick={() => window.location.reload(false)}
      >
        🛒 Optimal Shopping
      </h2>
      
    </div>
  )
}
