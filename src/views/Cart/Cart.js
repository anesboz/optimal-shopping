import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Recyclerview from 'components/Recyclerview'
import { updateCart } from 'actions/localstorage/generalActions'

export default function Cart(props) {
  const { data, selected } = props

  return (
    <div>
      <Autocomplete
        sx={{ padding: `0 10px 5px 10px` }}
        options={data.filter((e, i) => !selected.includes(e.product))}
        autoHighlight
        getOptionLabel={(option) => option.product}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.product}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choisir un produit"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
        onChange={(event, newValue) => {
          if (newValue == null) return
          updateCart([...selected, newValue.product])
        }}
        selectOnFocus
      />
      <Recyclerview
        data={data.filter((e, i) => selected.includes(e.product))}
      />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   mainBranch: state.mainBranch,
// })

// export default connect(mapStateToProps)(Main)
