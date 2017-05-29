// import update from 'react-addons-update'
import {
  START_STEPS
} from '../actions/index'
const initialState = {
  step: 1,
  currentStep: 1,
  lenstype: '',
  price: '',
  wearglasses: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_STEPS:
      let choselenstype = Object.assign({}, state, {lenstype: action.payload})
      console.log('state:' + action.type + choselenstype)
      console.log(choselenstype)
      return choselenstype
  }
  console.log(state)
  return state
}
