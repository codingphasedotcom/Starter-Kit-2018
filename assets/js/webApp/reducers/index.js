import { combineReducers } from 'redux'
import globalState from './globalState'
const rootReducer = combineReducers({
  globalState: globalState
})

export default rootReducer
