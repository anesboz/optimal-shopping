import * as React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList } from 'react-window'
import { Avatar, Chip, ListItemAvatar } from '@mui/material'

export default function RV2(props) {
  const { data } = props
  return (
    <Box
      sx={{
        width: '100%',
        height: 400,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
      className="red"
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={data.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  )

  function renderRow(props) {
    const { index, style } = props

    return (
      <ListItem key={index}>
        <ListItemAvatar>
          <Avatar alt={'product'} src={'img'} />
        </ListItemAvatar>
        <ListItemText

          primary={'product'}
          // secondary={[1, 2, 4].map((e, j) => {
          //   // const i = getData().findIndex((e) => e.product === product)
          //   // const selected = coordinates?.[0] === i && coordinates?.[1] === j
          //   // const isMinimal = e.price === min
          //   // const charLength = e.name.length + 8
          //   return (
          //     <Chip
          //       key={j}
          //       avatar={null}
          //       label={
          //         <div>
          //           <b>{e.name}: </b>
          //           <span>{e.price}</span>
          //         </div>
          //       }
          //       // sx={{
          //       //   m: 0.4,
          //       //   border: selected ? `2px solid blue` : ``,
          //       //   width: `${charLength}ch`,
          //       //   color: isMinimal ? `white` : `gray`,
          //       //   opacity: isMinimal ? 0.9 : 0.7,
          //       //   fontSize: `80%`,
          //       // }}
          //       // color={isMinimal ? `success` : `default`}
          //       size="small"
          //     />
          //   )
          // })}
        />
      </ListItem>
    )
  }
  // function renderRow(props) {
  //   const { index, style } = props

  //   return (
  //     <ListItem style={style} key={index} component="div" disablePadding className='blue'>
  //       <ListItemButton>
  //         <ListItemText primary={`Item ${index + 1}`} />
  //       </ListItemButton>
  //     </ListItem>
  //   )
  // }
}
