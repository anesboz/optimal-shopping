import { Button, Stack, TextField } from '@mui/material'
import { getData, updateData } from 'actions/localstorage/generalActions'

export default function Incremental(props) {
  const { coordinates } = props
  const hide = coordinates == null

  if (coordinates == null) return null
  const [i, j] = coordinates
  const currentValue = getData()[i].prices[j].price

  function hundleChange(newValue) {
    const clone = [...getData()]
    clone[i].prices[j].price = newValue
    updateData(clone)
  }

  return (
    <Stack
      style={{ visibility: hide ? `hidden` : `visible` }}
      sx={{
        position: `fixed`,
        right: 0,
        bottom: 100,
        height: 300,
        width: 90,
        padding: 1,
      }}
      spacing={1}
      direction="column"
    >
      <TextField
        value={currentValue ?? 0}
        onChange={(event) => hundleChange(event.target.value)}
        sx={{ input: { textAlign: 'center' } }}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      {[10, 1, -1, -10].map((e, i) => (
        <Button
          variant="outlined"
          size="small"
          key={i}
          onClick={() => {
            const oldValue =
              currentValue == null || isNaN(currentValue) ? 0 : currentValue
            hundleChange(Math.round((oldValue + e / 100) * 100) / 100)
          }}
        >
          {`${e > 0 ? `+` : `-`} ${Math.abs(e)}¢`}
        </Button>
      ))}
    </Stack>
  )
}
