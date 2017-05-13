import { combineReducers } from 'redux'

const nop = (state = {}, action) => {
  console.info(action.type)
  return state
}

const rootReducer = combineReducers({
  nop,
})

export default rootReducer

