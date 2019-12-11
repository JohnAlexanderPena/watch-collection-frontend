import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import errorReducer from './errorReducer'
// import profileReducer from './profileReducer'
import watchBrandReducer from './watchBrandReducer'
import watchModelReducer from './watchModelReducer'


export default combineReducers({
  // auth: authReducer,
  // errors: errorReducer,
  // profile: profileReducer,
  brands: watchBrandReducer,
  models: watchModelReducer
})
