import {  GET_MODELS, SET_SUBMODEL } from '../actions/types'


const initialState = {
  models: null,
  subModel: null
}

export default function(state = initialState, action) {
  switch(action.type) {
      case GET_MODELS:
        return {
          ...state,
          models: action.payload
        }
        case SET_SUBMODEL:
          return {
            ...state,
            subModel: state.models.filter(model => model.image_url === action.payload)
          }
    default:
      return state;
  }
}
