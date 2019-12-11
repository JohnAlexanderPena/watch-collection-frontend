
import {  GET_WATCH_BRANDS, GET_MODELS } from './types';


export const getWatchBrands = () => dispatch => {
  fetch('http://localhost:3000/watch_brands')
  .then(resp => resp.json())
  .then(res =>
        dispatch({
        type: GET_WATCH_BRANDS,
        payload: res
      })
    )
}


export const getWatchModels = (model) => dispatch => {
  fetch(`http://localhost:3000/brand_watches/`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        model: model,
      })
    })
  .then(resp => resp.json())
  .then(res =>
        {
          dispatch({
          type: GET_MODELS,
          payload: res
        })
      }
    )
}
