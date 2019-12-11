import {  GET_MODELS } from '../actions/types'


const initialState = {
  models: null
}

export default function(state = initialState, action) {
  switch(action.type) {
      case GET_MODELS:
        return {
          ...state,
          models: action.payload
        }
    default:
      return state;
  }
}
