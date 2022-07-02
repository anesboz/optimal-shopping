import { useEffect, useState } from 'react'
import Recyclerview from 'components/Recyclerview'
import { getData, updateData } from 'actions/localstorage/generalActions'
import RV2 from 'components/RV2'

export default function AllProducts() {
  const [data, setData] = useState(getData())

  const hundle = (coord, newValue) => {
    const [i, j] = coord
    const clone = [...data]
    clone[i].prices[j].price = newValue
    setData(clone)
    updateData(clone)
  }

  return <RV2 data={data}/> // <Recyclerview data={data} />
}
