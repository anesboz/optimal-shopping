import * as React from 'react'
import { Slider, Stack, TextField } from '@mui/material'

export default function Incremental(props) {
  const { valueHook, hide } = props
  const [value, setValue] = valueHook
  return (
    <div>
      <Stack
        style={{ visibility: hide ? `hidden` : `visible` }}
        sx={{ height: 300, position: `fixed`, right: 0, bottom: 100 }}
        spacing={1}
        direction="row"
      >
        <div
          style={{ display: hide ? `none` : `flex`, padding: 9 }}
          className="center"
        >
          <TextField
            value={value ?? ``}
            onChange={(event) => setValue(event.target.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </div>
        <Slider
          aria-label="Small steps"
          value={value ?? 1}
          onChange={(_, newValue) => setValue(newValue)}
          getAriaValueText={(value) => `${value}`}
          step={0.1}
          marks
          min={0}
          max={10}
          valueLabelDisplay="auto"
          orientation="vertical"
        />
      </Stack>
    </div>
  )
}
