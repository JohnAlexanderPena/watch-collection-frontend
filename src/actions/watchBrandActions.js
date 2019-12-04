
import {  GET_WATCH_BRANDS } from './types';


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
