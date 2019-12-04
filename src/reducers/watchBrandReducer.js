import { GET_WATCH_BRANDS } from '../actions/types'


const initialState = {
  brands: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_WATCH_BRANDS:
      return {
        ...state,
        brands: action.payload
      }
    default:
      return state;
  }
}
