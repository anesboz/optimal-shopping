import { REFRESH } from 'actions/types'

export const initalState = {
  refresh: new Date().getTime(),
}

export default (state = initalState, action) => {
  switch (action.type) {
    case REFRESH:
      return {
        ...state,
        refresh: new Date().getTime(),
      }

    default:
      return state
  }
}
