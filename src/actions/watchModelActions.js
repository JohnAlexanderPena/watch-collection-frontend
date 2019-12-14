import {  GET_MODELS, SET_SUBMODEL, GET_ROLEX_MODELS, GET_ROLEX_SUBMODELS } from './types';

const accentsTidy = (s) => {
                        var r=s.toLowerCase();
                        r = r.replace(new RegExp("\\s", 'g'),"");
                        r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
                        r = r.replace(new RegExp("æ", 'g'),"ae");
                        r = r.replace(new RegExp("ç", 'g'),"c");
                        r = r.replace(new RegExp("[èéêë]", 'g'),"e");
                        r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
                        r = r.replace(new RegExp("ñ", 'g'),"n");
                        r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
                        r = r.replace(new RegExp("œ", 'g'),"oe");
                        r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
                        r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
                        r = r.replace(new RegExp("[&]", 'g'), "and");
                        // console.log(r)
                                      // r = r.replace(new RegExp("\\W", 'g'),"");
                        return r;
                };

export const getWatchModels = (model) => dispatch => {
  let fixedModel = model.split(' ').join(' ')
  let sortedModelName;
  if(fixedModel.includes("-") || fixedModel.length > 1) {
    sortedModelName = accentsTidy(fixedModel.replace(/\s+/g, '-'))
    // || fixedModel.replace("&", '-and-')
    // console.log(sortedModelName)
  }
  fetch(`http://localhost:3000/brand_watches/`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        model: sortedModelName,
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

export const setSubModel = (model) =>  dispatch => {
  dispatch({
    type: SET_SUBMODEL,
    payload: model
  })
}


export const getRolexSubModels = (rolexModel) => dispatch => {
  // debugger;
  const rolexSubmodel = rolexModel[0].rolex_model.split(' ').join('-')
  fetch(`http://localhost:3000/rolex_model_watches/`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        model: rolexSubmodel,
      })
    })
    .then(resp => resp.json())
    .then(models => {
      // debugger;
      dispatch({
        type: GET_ROLEX_SUBMODELS,
        payload: models
      })
    })
}

export const getRolexModels = (model) => dispatch => {
  fetch("http://localhost:3000/rolex_models")
  .then(resp => resp.json())
  .then(models => {
    dispatch({
      type: GET_ROLEX_MODELS,
      payload: models
    })
  })
}
