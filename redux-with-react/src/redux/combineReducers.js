import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import reducer from './reducers'

const reducers = combineReducers({
  cake: cakeReducer,
  user: reducer,
})

export default reducers
