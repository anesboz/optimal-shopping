import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList } from 'react-window'
import { Avatar, Chip, Divider, ListItemAvatar } from '@mui/material'
import { getData, updateData } from 'actions/localstorage/generalActions'
import Incremental from './Incremental'
import { useEffect, useState } from 'react'

export default function Recyclerview(props) {
  let { data, ...rest } = props
  const [coordinates, setCoordinates] = useState(null)

  return (
    <div {...rest}>
      <Incremental
        data={data}
        coordinates={coordinates}
      />
      <Box
        sx={{
          width: '100%',
          height: 600,
          bgcolor: 'background.paper',
          p: 2,
        }}
      >
        <FixedSizeList
          height={600}
          itemSize={120}
          itemCount={data.length}
          overscanCount={1}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  )

  function renderRow(props) {
    const { index } = props
    const element = data[index]
    const { product, prices, img } = element
    const min = Math.min(...prices.map((e) => e.price).filter((e) => e))

    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={product} src={img} />
          </ListItemAvatar>
          <ListItemText
            primary={product}
            secondary={prices.map((e, j) => {
              const i = getData().findIndex((e) => e.product === product)
              const selected = coordinates?.[0] === i && coordinates?.[1] === j
              const isMinimal = e.price === min
              const charLength = e.name.length + 8
              return (
                <Chip
                  key={j}
                  avatar={null}
                  label={
                    <div>
                      <b>{e.name}: </b>
                      <span>{e.price}</span>
                    </div>
                  }
                  sx={{
                    m: 0.4,
                    border: selected ? `2px solid blue` : ``,
                    width: `${charLength}ch`,
                    color: isMinimal ? `white` : `gray`,
                    opacity: isMinimal ? 0.9 : 0.7,
                    fontSize: `80%`,
                  }}
                  color={isMinimal ? `success` : `default`}
                  onClick={() => {
                    setCoordinates(selected ? null : [i, j])
                  }}
                  size="small"
                />
              )
            })}
          />
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  // function renderRow(props) {
  //   const { index, style } = props
  //   const element = data[index]
  //   const { product, prices } = element
  //   const min = Math.min(...prices.map((e) => e.price).filter((e) => e))

  //   return (
  //     <ListItem
  //       // style={style}
  //       key={index}
  //       component="div"
  //       disablePadding
  //       className="red"
  //     >
  //       <div>
  //         <b>{product}</b>
  //         <br />
  //         {prices.map((e, j) => {
  //           const i = getData().findIndex((e) => e.product === product)
  //           const selected = element?.[0] === i && element?.[1] === j
  //           return (
  //             <Chip
  //               key={j}
  //               avatar={null}
  //               label={
  //                 <div>
  //                   <b>{e.name}: </b>
  //                   <span>{e.price}</span>
  //                 </div>
  //               }
  //               sx={{
  //                 m: 0.4,
  //                 border: selected ? `2px solid blue` : ``,
  //                 width: 100,
  //               }}
  //               color={e.price === min ? `success` : `default`}
  //               onClick={() => {
  //                 setElement(selected ? null : [i, j])
  //               }}
  //             />
  //           )
  //         })}
  //         <Divider variant="inset" sx={{ p: 2 }} />
  //       </div>
  //     </ListItem>
  //   )
  // }
  // function backup(props) {
  //   const { index, style } = props
  //   const element = data[index]
  //   const { product, prices } = element
  //   const min = Math.min(...prices.map((e) => e.price).filter((e) => e))

  //   return (
  //     <ListItem
  //       // style={style}
  //       key={index}
  //       component="div"
  //       disablePadding
  //       className="red"
  //     >
  //       <div>
  //         <b>{product}</b>
  //         <br />
  //         {prices.map((e, j) => {
  //           const i = getData().findIndex((e) => e.product === product)
  //           const selected = element?.[0] === i && element?.[1] === j
  //           return (
  //             <Chip
  //               key={j}
  //               avatar={null}
  //               label={
  //                 <div>
  //                   <b>{e.name}: </b>
  //                   <span>{e.price}</span>
  //                 </div>
  //               }
  //               sx={{
  //                 m: 0.4,
  //                 border: selected ? `2px solid blue` : ``,
  //                 width: 100,
  //               }}
  //               color={e.price === min ? `success` : `default`}
  //               onClick={() => {
  //                 setElement(selected ? null : [i, j])
  //               }}
  //             />
  //           )
  //         })}
  //         <Divider variant="inset" sx={{ p: 2 }} />
  //       </div>
  //     </ListItem>
  //   )
  // }
}
