import { refresh } from 'actions/mainActions'
import { initialData } from './initialData'

// ----------------------------------------------------
const DATA_NAME = `data`

export function getData() {
  const data = JSON.parse(localStorage.getItem(DATA_NAME))
  if (!data) return initialData
  return data
}

export function updateData(newData) {
  localStorage.setItem(DATA_NAME, JSON.stringify(newData))
  refresh()
}

// ----------------------------------------------------

const CART_NAME = `selected`

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_NAME)) ?? []
}

export function updateCart(list) {
  localStorage.setItem(CART_NAME, JSON.stringify(list))
  refresh()
}

// ----------------------------------------------------

export function deleteData() {
  localStorage.clear()
  refresh()
}
