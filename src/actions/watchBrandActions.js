
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


// export const getWatchModels = (model) => dispatch => {
//   let fixedModel = model.split(' ').join(' ')
//   let sortedModelName;
//   if(fixedModel.includes("-") || fixedModel.length > 1) {
//     sortedModelName = accentsTidy(fixedModel.replace(/\s+/g, '-'))
//     // || fixedModel.replace("&", '-and-')
//     // console.log(sortedModelName)
//   }
//   fetch(`http://localhost:3000/brand_watches/`, {
//       method: "POST",
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({
//         model: sortedModelName,
//       })
//     })
//   .then(resp => resp.json())
//   .then(res =>
//         {
//           dispatch({
//           type: GET_MODELS,
//           payload: res
//         })
//       }
//     )
// }

// export const setSubModel = (model) =>  dispatch => {
//   dispatch({
//     type: SET_SUBMODEL,
//     payload: model
//   })
// }
//
// export const getRolexModels = (model) => dispatch => {
//   fetch("http://localhost:3000/rolex_models")
//   .then(resp => resp.json())
//   .then(models => {
//     dispatch({
//       type: GET_ROLEX_MODELS,
//       payload: models
//     })
//   })
// }
